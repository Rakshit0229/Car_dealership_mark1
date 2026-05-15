export interface CarSpec {
  label: string;
  value: string;
}

export interface SpecCategory {
  category: string;
  specs: CarSpec[];
}

export interface Car {
  id: string;
  name: string;
  tagline: string;
  quickSpecs: string[];
  fullSpecs: SpecCategory[];
}

export const cars: Car[] = [
  {
    id: 'apex-gt',
    name: 'APEX GT',
    tagline: 'REFINED SPEED FOR THE DISCERNING FEW',
    quickSpecs: ['ENGINE 4.0L V8', 'POWER 630 BHP', '0–100 KM/H 3.1S', 'TOP SPEED 318 KM/H', 'SEATS 2+2', 'TRANSMISSION 8-SPD AUTO'],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'LENGTH', value: '4,521 MM' },
          { label: 'WIDTH', value: '1,939 MM' },
          { label: 'HEIGHT', value: '1,299 MM' },
          { label: 'WHEELBASE', value: '2,650 MM' },
          { label: 'WEIGHT', value: '1,545 KG' }
        ]
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: '0–100 KM/H', value: '3.1 SECONDS' },
          { label: '0–200 KM/H', value: '9.9 SECONDS' },
          { label: 'TOP SPEED', value: '318 KM/H' },
          { label: 'LATERAL G', value: '1.2 G' },
          { label: 'POWER-TO-WEIGHT', value: '408 BHP/TON' }
        ]
      },
      {
        category: 'POWERTRAIN',
        specs: [
          { label: 'ENGINE', value: '4.0L TWIN-TURBO V8' },
          { label: 'POWER', value: '630 BHP @ 6,250 RPM' },
          { label: 'TORQUE', value: '850 NM @ 2,000-5,500 RPM' },
          { label: 'TRANSMISSION', value: '8-SPEED AUTOMATIC' },
          { label: 'DRIVE', value: 'REAR-WHEEL DRIVE' }
        ]
      },
      {
        category: 'INTERIOR & COMFORT',
        specs: [
          { label: 'SEATS', value: '2+2 CONFIGURATION' },
          { label: 'MATERIALS', value: 'FULL LEATHER + ALCANTARA' },
          { label: 'INFOTAINMENT', value: '10.25" TOUCHSCREEN' },
          { label: 'AUDIO', value: 'Burmester 3D SURROUND' },
          { label: 'CLIMATE', value: '4-ZONE AUTOMATIC' }
        ]
      },
      {
        category: 'SAFETY & TECHNOLOGY',
        specs: [
          { label: 'BRAKES', value: 'CARBON-CERAMIC' },
          { label: 'AIRBAGS', value: '8' },
          { label: 'ASSISTANCE', value: 'ADAPTIVE CRUISE + LKA' },
          { label: 'LIGHTING', value: 'MATRIX LED' },
          { label: 'TIRES', value: 'MICHELIN PILOT SPORT 4S' }
        ]
      }
    ]
  },
  {
    id: 'obsidian-rs',
    name: 'OBSIDIAN RS',
    tagline: 'POWER AND PRECISION REDEFINED',
    quickSpecs: ['ENGINE 5.2L V10', 'POWER 820 BHP', '0–100 KM/H 2.8S', 'TOP SPEED 340 KM/H', 'SEATS 2', 'TRANSMISSION 7-SPD PDK'],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'LENGTH', value: '4,519 MM' },
          { label: 'WIDTH', value: '1,900 MM' },
          { label: 'HEIGHT', value: '1,237 MM' },
          { label: 'WHEELBASE', value: '2,637 MM' },
          { label: 'WEIGHT', value: '1,450 KG' }
        ]
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: '0–100 KM/H', value: '2.8 SECONDS' },
          { label: '0–200 KM/H', value: '8.5 SECONDS' },
          { label: 'TOP SPEED', value: '340 KM/H' },
          { label: 'LATERAL G', value: '1.3 G' },
          { label: 'POWER-TO-WEIGHT', value: '565 BHP/TON' }
        ]
      },
      {
        category: 'POWERTRAIN',
        specs: [
          { label: 'ENGINE', value: '5.2L NATURALLY ASPIRATED V10' },
          { label: 'POWER', value: '820 BHP @ 8,400 RPM' },
          { label: 'TORQUE', value: '650 NM @ 6,400 RPM' },
          { label: 'TRANSMISSION', value: '7-SPEED PDK' },
          { label: 'DRIVE', value: 'ALL-WHEEL DRIVE' }
        ]
      },
      {
        category: 'INTERIOR & COMFORT',
        specs: [
          { label: 'SEATS', value: '2-SEATER' },
          { label: 'MATERIALS', value: 'RACE-INSPIRED LEATHER' },
          { label: 'INFOTAINMENT', value: '12.3" DIGITAL COCKPIT' },
          { label: 'AUDIO', value: 'Bose SURROUND SYSTEM' },
          { label: 'CLIMATE', value: 'DUAL-ZONE AUTOMATIC' }
        ]
      },
      {
        category: 'SAFETY & TECHNOLOGY',
        specs: [
          { label: 'BRAKES', value: 'CARBON-CERAMIC' },
          { label: 'AIRBAGS', value: '6' },
          { label: 'ASSISTANCE', value: 'SPORT PLUS STABILITY' },
          { label: 'LIGHTING', value: 'LASER LED' },
          { label: 'TIRES', value: 'PIRELLI P ZERO CORSA' }
        ]
      }
    ]
  },
  {
    id: 'phantom-s',
    name: 'PHANTOM S',
    tagline: 'WHERE COMFORT MEETS VELOCITY',
    quickSpecs: ['ENGINE 6.75L V12', 'POWER 563 BHP', '0–100 KM/H 4.6S', 'RANGE 800 KM', 'SEATS 4+1', 'BUILD 2023'],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'LENGTH', value: '5,825 MM' },
          { label: 'WIDTH', value: '2,000 MM' },
          { label: 'HEIGHT', value: '1,636 MM' },
          { label: 'WHEELBASE', value: '3,556 MM' },
          { label: 'WEIGHT', value: '2,520 KG' }
        ]
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: '0–100 KM/H', value: '4.6 SECONDS' },
          { label: 'TOP SPEED', value: '250 KM/H' },
          { label: 'RANGE', value: '800 KM' },
          { label: 'LATERAL G', value: '0.9 G' },
          { label: 'POWER-TO-WEIGHT', value: '223 BHP/TON' }
        ]
      },
      {
        category: 'POWERTRAIN',
        specs: [
          { label: 'ENGINE', value: '6.75L TWIN-TURBO V12' },
          { label: 'POWER', value: '563 BHP @ 5,000 RPM' },
          { label: 'TORQUE', value: '900 NM @ 1,700 RPM' },
          { label: 'TRANSMISSION', value: '8-SPEED AUTOMATIC' },
          { label: 'DRIVE', value: 'ALL-WHEEL DRIVE' }
        ]
      },
      {
        category: 'INTERIOR & COMFORT',
        specs: [
          { label: 'SEATS', value: '4+1 CONFIGURATION' },
          { label: 'MATERIALS', value: 'HAND-STITCHED LEATHER' },
          { label: 'INFOTAINMENT', value: 'DUAL 12.3" SCREENS' },
          { label: 'AUDIO', value: 'Bespoke 18-Speaker System' },
          { label: 'CLIMATE', value: '4-ZONE WITH PURIFICATION' }
        ]
      },
      {
        category: 'SAFETY & TECHNOLOGY',
        specs: [
          { label: 'BRAKES', value: 'VENTILATED CERAMIC' },
          { label: 'AIRBAGS', value: '10' },
          { label: 'ASSISTANCE', value: 'NIGHT VISION + ADAPTIVE' },
          { label: 'LIGHTING', value: 'STARLIGHT HEADLIGHTS' },
          { label: 'TIRES', value: 'RUN-FLAT ALL-SEASON' }
        ]
      }
    ]
  }
];
