import type { RepairService } from '../types/catalog';

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: 'srv-screen',
    title: 'Screen & Touch Display Replacement',
    badge: 'Same-Day Service',
    turnaroundTime: '30 – 45 Minutes',
    description:
      'Resolution for cracked outer glass, non-responsive touch zones, purple ink spots, and horizontal display lines.',
    procedureSteps: [
      'Hot-air controlled frame separation without casing scratches',
      'Removal of glass shards and acoustic mesh cleaning',
      'Test-fitting display on bench before applying adhesive',
      'Clamp curing with original T-7000/B-7000 adhesive for dust-tight seal',
    ],
    highlights: [
      'Original IC & high refresh rate options',
      'Full touch & sensor testing in front of customer',
      'Zero loss of personal data or photos',
    ],
  },
  {
    id: 'srv-battery',
    title: 'Battery Health Diagnosis & Replacement',
    badge: 'Express Swap',
    turnaroundTime: '20 – 30 Minutes',
    description:
      'Fixes sudden power drops at 20-30%, battery swelling, extreme overheating during charging, and boot-looping.',
    procedureSteps: [
      'Safe back glass panel heating and suction lift',
      'Clean adhesive pull-tab extraction without puncturing cell',
      'Connector terminal resistance check with multimeter',
      'New battery capacity calibration and charge-rate test',
    ],
    highlights: [
      '100% pure cobalt cell chemistry',
      'Dual safety IC prevents overcharging',
      'Testing warranty provided on counter',
    ],
  },
  {
    id: 'srv-charging',
    title: 'Charging Port & Micro-Soldering Fix',
    badge: 'Precision Soldering',
    turnaroundTime: '30 – 60 Minutes',
    description:
      'Resolves loose cable connections, "Moisture Detected" errors, non-detection of fast chargers, and broken Type-C pins.',
    procedureSteps: [
      'Inspection of USB connector under digital microscope',
      'Lead-free hot air desoldering of damaged charging jack',
      'Micro-soldering of original pin connector with flux cleaning',
      'Verification of 33W/67W flash charge & OTG data pass-through',
    ],
    highlights: [
      'Preserves original sub-board & network reception',
      'Microphone & vibration motor function re-verified',
      'High mechanical pull strength solder joints',
    ],
  },
  {
    id: 'srv-audio',
    title: 'Earpiece, Mic & Loudspeaker Restoration',
    badge: 'Audio Recovery',
    turnaroundTime: '25 – 40 Minutes',
    description:
      'Restores low in-call earpiece volume, distorted loudspeaker ringing, and non-working microphone during voice calls.',
    procedureSteps: [
      'Ultrasonic cleaning of acoustic dust meshes and grilles',
      'Testing audio amplifier IC and flex ribbons',
      'Fitting matched frequency loudspeaker or earpiece module',
      'Live test call verification in front of customer',
    ],
    highlights: [
      'Crystal clear call and media audio output',
      'Replacement acoustic dust seals prevent future blockage',
      'Quick counter service while you wait in shop',
    ],
  },
];
