import { AnimatePresence, motion } from 'motion/react';
import FleetVideo from './FleetVideo';

export default function FleetOverlay({ isOpen, onClose, onSpecOpen: _onSpecOpen }: { isOpen: boolean; onClose: () => void; onSpecOpen: (car: any) => void }) {
  const fleetItems = [
    {
      name: 'APEX GT',
      videoSrc: '/media/Car_Straight_01.mp4',
      delay: 0,
      specs: [
        { label: 'ENGINE', value: '4.0L V8' },
        { label: 'POWER', value: '630 BHP' },
        { label: '0–100 KM/H', value: '3.1S' },
        { label: 'SEATS', value: '2+2' }
      ]
    },
    {
      name: 'OBSIDIAN RS',
      videoSrc: '/media/Car_Straight_02.mp4',
      delay: 0.12,
      specs: [
        { label: 'ENGINE', value: '5.2L V10' },
        { label: 'POWER', value: '820 BHP' },
        { label: 'TOP SPEED', value: '340 KM/H' },
        { label: 'TRANSMISSION', value: '7-SPD PDK' }
      ]
    },
    {
      name: 'PHANTOM S',
      videoSrc: '/media/Car_Straight_03.mp4',
      delay: 0.24,
      specs: [
        { label: 'ENGINE', value: '6.75L V12' },
        { label: 'POWER', value: '563 BHP' },
        { label: 'RANGE', value: '800 KM' },
        { label: 'SEATS', value: '4+1' }
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            flexDirection: 'row',
            display: 'flex'
          }}
        >
          {fleetItems.map((item) => (
            <FleetVideo
              key={item.name}
              videoSrc={item.videoSrc}
              name={item.name}
              specs={item.specs}
              delay={item.delay}
              isOpen={isOpen}
            />
          ))}

          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: '32px',
              right: '32px',
              zIndex: 120,
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '100px',
              padding: '12px 28px',
              color: 'white',
              background: 'transparent',
              fontSize: '10px',
              letterSpacing: '0.22em',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textTransform: 'uppercase'
            }}
          >
            CLOSE
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
