import { useEffect, useRef } from 'react';

export default function RippleTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ripplesRef = useRef<Array<{ x: number; y: number; age: number; active: boolean }>>([]);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ripples: Array<{ x: number; y: number; age: number; active: boolean }> = [];
    const rippleElements: HTMLDivElement[] = [];

    for (let i = 0; i < 80; i++) {
      const ripple = document.createElement('div');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.pointerEvents = 'none';
      ripple.style.backdropFilter = 'url(#liquid-trail) blur(1px)';
      ripple.style.boxShadow = 'inset 0 0 30px rgba(198,255,0,0.07), 0 0 15px rgba(198,255,0,0.10)';
      ripple.style.opacity = '0';
      container.appendChild(ripple);
      rippleElements.push(ripple);
      ripples.push({ x: 0, y: 0, age: 1, active: false });
    }

    ripplesRef.current = ripples;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (lastPointRef.current) {
        const dx = x - lastPointRef.current.x;
        const dy = y - lastPointRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 25) {
          const inactiveRipple = ripples.find(r => !r.active);
          if (inactiveRipple) {
            inactiveRipple.x = x;
            inactiveRipple.y = y;
            inactiveRipple.age = 0;
            inactiveRipple.active = true;
            lastPointRef.current = { x, y };
          }
        }
      } else {
        lastPointRef.current = { x, y };
      }
    };

    const animate = () => {
      ripples.forEach((ripple, i) => {
        if (ripple.active) {
          ripple.age += 0.012;

          if (ripple.age >= 1) {
            ripple.active = false;
            ripple.age = 1;
          }

          const size = 20 + ripple.age * (300 - 20);
          const opacity = 1 - Math.pow(ripple.age, 1.2);

          const el = rippleElements[i];
          el.style.width = `${size}px`;
          el.style.height = `${size}px`;
          el.style.left = `${ripple.x - size / 2}px`;
          el.style.top = `${ripple.y - size / 2}px`;
          el.style.opacity = `${opacity}`;
        } else {
          rippleElements[i].style.opacity = '0';
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      rippleElements.forEach(el => el.remove());
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'fixed', inset: 0, zIndex: 30, pointerEvents: 'none' }}>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="liquid-trail">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
