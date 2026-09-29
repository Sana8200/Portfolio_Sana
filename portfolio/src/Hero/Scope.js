import { useEffect, useRef } from 'react';

// CH2 carries "SANA" as 8-bit ASCII in serial frames (start bit 0, stop bit 1),
// padded with idle-high bits between repeats.
const BITS = (
  '1111' +
  [...'SANA'].map((c) => '0' + c.charCodeAt(0).toString(2).padStart(8, '0') + '1').join('') +
  '1111'
).split('').map(Number);

const CH1 = { line: '#F2B38A', glow: 'rgba(224,123,106,0.9)' };
const CH2 = { line: '#E3BC6A', glow: 'rgba(196,154,60,0.9)' };

function Scope({ hostRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const start = performance.now();
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    let visible = true;
    let pointerX = null;

    const elapsed = () => (reduced ? 2.4 : (performance.now() - start) / 1000);

    // Normalised analog signal in roughly [-1, 1]
    const analog = (x, t) => {
      const cycles = w < 600 ? 1.6 : 2.6;
      const u = (x / w) * Math.PI * 2 * cycles;
      const p = t * 1.1;
      const env = 1 + 0.12 * Math.sin(t * 0.45);
      return env * (0.62 * Math.sin(u - p) + 0.24 * Math.sin(2.7 * u - 1.6 * p + 1) + 0.12 * Math.sin(6.1 * u + 0.7 * p));
    };

    const bitWidth = () => (w < 600 ? 9 : 13);
    const bitAt = (x, t) => {
      const i = Math.floor((x + t * 38) / bitWidth());
      return BITS[((i % BITS.length) + BITS.length) % BITS.length];
    };

    const glowStroke = ({ line, glow }) => {
      ctx.save();
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = glow;
      ctx.shadowColor = glow;
      ctx.shadowBlur = 12;
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 4;
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = line;
      ctx.stroke();
      ctx.restore();
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      const c1 = h * 0.36;
      const a1 = h * 0.24;
      const hi = h * 0.7;
      const lo = h * 0.88;

      // CH1 — analog
      ctx.beginPath();
      for (let x = 0; x <= w; x += 3) {
        const y = c1 - analog(x, t) * a1;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      glowStroke(CH1);

      // CH2 — digital, scrolling left
      const bw = bitWidth();
      const offset = t * 38;
      const first = Math.floor(offset / bw);
      const x0 = first * bw - offset;
      let prevY = null;
      ctx.beginPath();
      for (let k = 0; x0 + k * bw < w; k++) {
        const bit = BITS[(first + k) % BITS.length];
        const y = bit ? hi : lo;
        const xs = x0 + k * bw;
        if (prevY === null) ctx.moveTo(xs, y);
        else if (y !== prevY) {
          ctx.lineTo(xs, prevY);
          ctx.lineTo(xs + 1.5, y);
        }
        ctx.lineTo(xs + bw, y);
        prevY = y;
      }
      glowStroke(CH2);

      // Fade the traces out at both edges
      ctx.save();
      ctx.globalCompositeOperation = 'destination-in';
      const fade = ctx.createLinearGradient(0, 0, w, 0);
      fade.addColorStop(0, 'rgba(0,0,0,0)');
      fade.addColorStop(0.18, 'rgba(0,0,0,1)');
      fade.addColorStop(0.82, 'rgba(0,0,0,1)');
      fade.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = fade;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

      // Measurement cursor follows the pointer
      if (pointerX !== null && pointerX >= 0 && pointerX <= w) {
        const px = pointerX;
        const v1 = analog(px, t);
        const y1 = c1 - v1 * a1;
        const bit = bitAt(px, t);
        const y2 = bit ? hi : lo;

        ctx.save();
        ctx.setLineDash([3, 5]);
        ctx.strokeStyle = 'rgba(240,231,221,0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px + 0.5, 0);
        ctx.lineTo(px + 0.5, h);
        ctx.stroke();
        ctx.setLineDash([]);

        [[y1, CH1.line], [y2, CH2.line]].forEach(([y, color]) => {
          ctx.beginPath();
          ctx.arc(px, y, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(px, y, 7, 0, Math.PI * 2);
          ctx.strokeStyle = color;
          ctx.globalAlpha = 0.35;
          ctx.stroke();
          ctx.globalAlpha = 1;
        });

        ctx.font = '500 10px "JetBrains Mono", monospace';
        ctx.fillStyle = 'rgba(240,231,221,0.75)';
        const lx = px + 12 > w - 84 ? px - 84 : px + 12;
        ctx.fillText(`CH1 ${v1 >= 0 ? '+' : '−'}${Math.abs(v1).toFixed(2)}`, lx, y1 - 10);
        ctx.fillText(`CH2 ${bit}`, lx, y2 - 10);
        ctx.restore();
      }
    };

    const frame = () => {
      draw(elapsed());
      raf = requestAnimationFrame(frame);
    };
    const play = () => {
      if (reduced || running || !visible || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };
    const pause = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!running) draw(elapsed());
    };

    const onMove = (e) => {
      if (e.pointerType === 'touch') return;
      pointerX = e.clientX - canvas.getBoundingClientRect().left;
      if (!running) draw(elapsed());
    };
    const onLeave = () => {
      pointerX = null;
      if (!running) draw(elapsed());
    };
    const onVisibility = () => (document.hidden ? pause() : play());

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play();
      else pause();
    });
    io.observe(canvas);
    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    resize();
    play();

    return () => {
      pause();
      ro.disconnect();
      io.disconnect();
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [hostRef]);

  return <canvas ref={canvasRef} className="scope__canvas" aria-hidden="true" />;
}

export default Scope;
