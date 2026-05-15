import { motion } from 'motion/react';

export default function Experiences() {
  const experienceCards = [
    {
      category: 'PRIVATE RENTAL',
      title: 'VEHICLE & DRIVER',
      description: 'Custom drives from city transfers to cross-country routes with professional chauffeurs.'
    },
    {
      category: 'TRACK PROGRAMME',
      title: 'CIRCUIT & SPRINT',
      description: 'Join our exclusive racetrack calendar with coaching from professional instructors.'
    },
    {
      category: 'CONCIERGE',
      title: '24 / 7 ACCESS',
      description: 'Every detail handled — delivery, insurance, customs, and route planning.'
    }
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <video
        src="/media/Silver_supercar_in_parking_struc…_202605131647.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '100vh',
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
          gap: '80px',
          alignContent: 'center'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(198,255,0,0.5)' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(198,255,0,0.85)' }}>
              CURATED FOR MEMBERS
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(36px,4.5vw,72px)',
              fontWeight: 400,
              lineHeight: 0.95,
              color: 'white'
            }}
          >
            LIFE BEYOND<br />
            THE LIMIT
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {experienceCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card"
              style={{ padding: '24px 28px' }}
            >
              <div
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.3em',
                  color: 'rgba(198,255,0,0.7)',
                  marginBottom: '8px'
                }}
              >
                {card.category}
              </div>
              <div
                style={{
                  fontSize: '18px',
                  color: 'white',
                  letterSpacing: '0.05em',
                  marginBottom: '12px'
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontSize: '10px',
                  lineHeight: 1.8,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.5)'
                }}
              >
                {card.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
