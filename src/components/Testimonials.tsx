import { motion } from 'motion/react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: 'var(--bg-base)', padding: 'clamp(80px,10vw,140px) 0' }}>
      <div style={{ paddingLeft: 'clamp(24px,6vw,96px)', marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: '#C6FF00' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(198,255,0,0.85)' }}>
            MEMBER VOICES
          </span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(40px,6vw,80px)',
            color: '#f0f0f0',
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: '-0.01em'
          }}
        >
          THOSE WHO KNOW.
        </h2>
      </div>

      <div
        className="testimonial-rail scrollbar-hide"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '20px',
          paddingLeft: 'clamp(24px,6vw,96px)',
          paddingRight: 'clamp(24px,6vw,96px)'
        }}
      >
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className="card"
            style={{
              flexShrink: 0,
              width: 'clamp(280px,30vw,380px)',
              padding: '36px'
            }}
          >
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '12px',
                lineHeight: 1.9,
                color: 'rgba(240,240,240,0.65)',
                marginBottom: '28px'
              }}
            >
              "{testimonial.quote}"
            </p>
            <div
              style={{
                width: '24px',
                height: '1px',
                background: 'var(--accent)',
                marginBottom: '20px'
              }}
            />
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: '#f0f0f0',
                marginBottom: '4px'
              }}
            >
              {testimonial.name}
            </div>
            <div
              style={{
                fontSize: '9px',
                letterSpacing: '0.2em',
                color: 'rgba(240,240,240,0.35)'
              }}
            >
              {testimonial.role} · {testimonial.tag}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
