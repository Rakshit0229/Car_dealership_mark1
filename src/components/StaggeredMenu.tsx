import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface StaggeredMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onFleetOpen: () => void;
}

export default function StaggeredMenu({ isOpen, onClose, onFleetOpen }: StaggeredMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const prelayer1Ref = useRef<HTMLDivElement>(null);
  const prelayer2Ref = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const socialsRef = useRef<HTMLDivElement>(null);
  const menuLabelRef = useRef<HTMLSpanElement>(null);
  const closeLabelRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Open animation
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      timelineRef.current = tl;

      // Cycle label text
      gsap.to(menuLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' });
      gsap.fromTo(closeLabelRef.current, { y: '100%' }, { y: '0%', duration: 0.4, ease: 'power3.inOut' });

      // Prelayers slide in
      tl.to(prelayer1Ref.current, { x: '0%', duration: 0.6 }, 0);
      tl.to(prelayer2Ref.current, { x: '0%', duration: 0.6 }, 0.08);
      tl.to(panelRef.current, { x: '0%', duration: 0.8 }, 0.15);

      // Prelayers slide out
      tl.to([prelayer1Ref.current, prelayer2Ref.current], { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5);

      // Nav items stagger in
      navItemsRef.current.forEach((item, i) => {
        if (item) {
          tl.fromTo(
            item.querySelector('a'),
            { x: -40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
            0.6 + i * 0.06
          );
        }
      });

      // Socials fade in
      if (socialsRef.current) {
        tl.fromTo(
          socialsRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          0.9
        );
      }
    } else {
      // Close animation
      if (timelineRef.current) {
        timelineRef.current.reverse();
      }

      // Cycle label back
      gsap.to(menuLabelRef.current, { y: '0%', duration: 0.4, ease: 'power3.inOut' });
      gsap.to(closeLabelRef.current, { y: '100%', duration: 0.4, ease: 'power3.inOut' });
    }
  }, [isOpen]);

  const handleNavClick = (index: number) => {
    if (index === 1) {
      // OUR FLEET
      onFleetOpen();
      onClose();
    } else {
      onClose();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button className={`menu-toggle ${isOpen ? 'is-open' : ''}`} onClick={onClose}>
        <div className="menu-toggle-label">
          <span ref={menuLabelRef}>MENU</span>
          <span ref={closeLabelRef} style={{ position: 'absolute', top: '100%' }}>CLOSE</span>
        </div>
        <span className="menu-toggle-icon">+</span>
      </button>

      {/* Prelayers */}
      <div ref={prelayer1Ref} className="menu-prelayer menu-prelayer-1" />
      <div ref={prelayer2Ref} className="menu-prelayer menu-prelayer-2" />

      {/* Menu Panel */}
      <div ref={panelRef} className="menu-panel">
        <ul className="menu-nav">
          {['HOME', 'OUR FLEET', 'MEMBERSHIP', 'TRACK & EVENTS', 'ACADEMY', 'CONTACT'].map((item, i) => (
            <li key={item} ref={(el) => { navItemsRef.current[i] = el; }}>
              <a onClick={() => handleNavClick(i)}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="menu-socials" ref={socialsRef}>
          <span className="menu-socials-title">FOLLOW</span>
          <div className="menu-socials-links">
            <a href="#">INSTAGRAM</a>
            <a href="#">FACEBOOK</a>
            <a href="#">YOUTUBE</a>
          </div>
        </div>
      </div>
    </>
  );
}
