import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'HOW DOES MEMBERSHIP WORK?',
      answer: 'Our annual membership tiers provide access to our curated fleet of supercars. Each tier offers different levels of vehicle access, track programme participation, and concierge services. Members can reserve vehicles for self-drive or chauffeured experiences.'
    },
    {
      question: 'WHAT CARS ARE IN THE FLEET?',
      answer: 'We maintain three exclusive vehicles: the APEX GT (4.0L V8, 630 BHP), the OBSIDIAN RS (5.2L V10, 820 BHP), and the PHANTOM S (6.75L V12, 563 BHP). Each vehicle is meticulously maintained and prepared for the ultimate driving experience.'
    },
    {
      question: 'CAN I HIRE A CAR FOR CORPORATE EVENTS?',
      answer: 'Yes, we offer full corporate event services including self-drive options, professional chauffeurs, and complete event coordination. Our team handles delivery, insurance, and all logistics to ensure a seamless experience.'
    },
    {
      question: 'IS VELOCE AVAILABLE INTERNATIONALLY?',
      answer: 'We operate across Europe, the Middle East, and select Asian markets. International arrangements can be made through our concierge service, with vehicle delivery and collection handled at your preferred location.'
    },
    {
      question: 'HOW DO I JOIN THE TRACK PROGRAMME?',
      answer: 'The track programme is available from the Veloce Club tier and above. Members receive access to exclusive racetrack calendars, professional coaching, and timed sessions at premier circuits including the Nürburgring and Silverstone.'
    },
    {
      question: 'WHAT DOES THE CONCIERGE SERVICE COVER?',
      answer: 'Our 24/7 concierge service handles every detail: vehicle delivery and collection, comprehensive insurance, fuel, route planning, accommodation recommendations, restaurant reservations, and any special requests to ensure your experience is flawless.'
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--bg-base)', maxWidth: '800px', margin: '0 auto', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: '#C6FF00' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(198,255,0,0.85)' }}>FAQ</span>
        </div>
        <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#f0f0f0', fontWeight: 400, lineHeight: 0.95 }}>WHAT YOU NEED TO KNOW.</h2>
      </div>

      {faqs.map((faq, i) => (
        <div key={i}>
          <div
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '24px 0',
              borderBottom: '1px solid rgba(240,240,240,0.07)'
            }}
          >
            <span style={{ fontSize: '12px', letterSpacing: '0.12em', color: openIndex === i ? '#f0f0f0' : 'rgba(240,240,240,0.5)' }}>
              {faq.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.4 }}
              style={{ fontSize: '20px', color: 'rgba(240,240,240,0.4)' }}
            >
              ↓
            </motion.span>
          </div>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{ overflow: 'hidden' }}
              >
                <p style={{ fontSize: '10px', lineHeight: 1.9, letterSpacing: '0.15em', color: 'rgba(240,240,240,0.45)', padding: '0 0 24px' }}>
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}
