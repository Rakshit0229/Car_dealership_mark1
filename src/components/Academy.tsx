import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Academy() {
  const modules = [
    { number: '01', title: 'HIGH-SPEED HANDLING', description: 'Advanced cornering techniques and line selection for maximum speed.', progress: 75 },
    { number: '02', title: 'TRACK TECHNIQUE', description: 'Braking points, apex management, and throttle control.', progress: 60 },
    { number: '03', title: 'CAR CONTROL', description: 'Weight transfer, understeer/oversteer correction, and drift basics.', progress: 85 },
    { number: '04', title: 'RACE STRATEGY', description: 'Overtaking, defending, and race pace management.', progress: 50 },
    { number: '05', title: 'MECHANICAL SYSTEMS', description: 'Understanding vehicle dynamics and setup adjustments.', progress: 40 },
    { number: '06', title: 'PERFORMANCE MINDSET', description: 'Mental preparation and focus under pressure.', progress: 70 }
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <video src="/media/homepage.mp4" autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />

      <div style={{ position: 'relative', zIndex: 10, padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
        <div style={{ marginBottom: '60px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(198,255,0,0.85)', marginBottom: '16px' }}>VELOCE ACADEMY</div>
          <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', fontWeight: 400, lineHeight: 0.9, color: 'white', maxWidth: '600px' }}>
            MASTER THE<br />MACHINE.<br /><em>MASTER<br />YOURSELF.</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginTop: '48px' }}>
          {modules.map((module, i) => (
            <ModuleCard key={i} module={module} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ module, index }: { module: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-mid"
      style={{ padding: '28px 28px 24px', borderRadius: '4px' }}
    >
      <div style={{ fontSize: '64px', color: 'rgba(255,255,255,0.06)', lineHeight: 1, marginBottom: '-8px' }}>{module.number}</div>
      <div style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(198,255,0,0.55)', marginBottom: '10px' }}>MODULE</div>
      <div style={{ fontSize: '13px', letterSpacing: '0.12em', color: 'white', marginBottom: '8px' }}>{module.title}</div>
      <div style={{ fontSize: '9px', lineHeight: 1.8, color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>{module.description}</div>
      <div style={{ marginTop: '16px' }}>
        <div style={{ height: '2px', background: 'rgba(255,255,255,0.06)', borderRadius: '1px', position: 'relative' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${module.progress}%` } : { width: 0 }}
            transition={{ duration: 1.2, delay: index * 0.1 }}
            style={{ height: '100%', background: 'var(--accent)', borderRadius: '1px' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
