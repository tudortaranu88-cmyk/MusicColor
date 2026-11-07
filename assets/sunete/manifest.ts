// Manifestul sample-urilor. React Native cere require() static pentru fiecare fișier.
//
// Cele 6 instrumente orchestrale au sunete reale din Versilian Studios Chamber Orchestra 2
// (Community Edition, CC0). Fiecare sample e tag-uit pe pitch-ul REAL măsurat (MIDI), nu pe
// nume de fișier – motorul (AudioEngine) alege sample-ul cel mai apropiat și îl transpune.
// Numele fișierelor: n<MIDI>.wav  (ex. n060.wav = Do3/C4 = MIDI 60).
//
// Instrumentele populare (caval, nai, tilinca, taragot, dramba) NU au încă sunete reale și
// rămân pe timbrul sintetizat din src/core/instruments.ts, până adăugăm înregistrări autentice.
//
// Convenție MIDI a aplicației: Do3 = 60, Do4 = 72 (vezi src/core/golden.ts).

import type { InstrumentCfg } from '../../src/audio/AudioEngine';

export const SAMPLE_MANIFEST: Record<string, InstrumentCfg> = {
  // PIAN – Upright Piano (Ivy Audio / Versilian). Percutant, fără buclă.
  pian: {
    samples: {},
    loop: false,
    release: 0.4,
    gain: 0.9,
    tuned: [
      { midi: 37, mod: require('./pian/n037.wav') },
      { midi: 45, mod: require('./pian/n045.wav') },
      { midi: 53, mod: require('./pian/n053.wav') },
      { midi: 61, mod: require('./pian/n061.wav') },
      { midi: 69, mod: require('./pian/n069.wav') },
      { midi: 77, mod: require('./pian/n077.wav') },
      { midi: 85, mod: require('./pian/n085.wav') },
    ],
  },

  // VIOARA – Solo Violin, arco vibrato. Susținut, cu buclă.
  vioara: {
    samples: {},
    loop: true,
    loopStart: 0.4,
    attack: 0.06,
    release: 0.2,
    gain: 0.85,
    tuned: [
      { midi: 55, mod: require('./vioara/n055.wav') },
      { midi: 60, mod: require('./vioara/n060.wav') },
      { midi: 64, mod: require('./vioara/n064.wav') },
      { midi: 67, mod: require('./vioara/n067.wav') },
      { midi: 69, mod: require('./vioara/n069.wav') },
      { midi: 72, mod: require('./vioara/n072.wav') },
      { midi: 76, mod: require('./vioara/n076.wav') },
      { midi: 79, mod: require('./vioara/n079.wav') },
    ],
  },

  // VIOLONCEL – Cello Section, sus vibrato. Susținut, cu buclă.
  violoncel: {
    samples: {},
    loop: true,
    loopStart: 0.4,
    attack: 0.08,
    release: 0.25,
    gain: 0.85,
    tuned: [
      { midi: 36, mod: require('./violoncel/n036.wav') },
      { midi: 43, mod: require('./violoncel/n043.wav') },
      { midi: 50, mod: require('./violoncel/n050.wav') },
      { midi: 57, mod: require('./violoncel/n057.wav') },
      { midi: 60, mod: require('./violoncel/n060.wav') },
      { midi: 64, mod: require('./violoncel/n064.wav') },
      { midi: 67, mod: require('./violoncel/n067.wav') },
      { midi: 74, mod: require('./violoncel/n074.wav') },
      { midi: 77, mod: require('./violoncel/n077.wav') },
    ],
  },

  // BAS – Solo Contrabass, sus vibrato. Grav, susținut, cu buclă.
  bas: {
    samples: {},
    loop: true,
    loopStart: 0.4,
    attack: 0.05,
    release: 0.2,
    gain: 0.9,
    tuned: [
      { midi: 30, mod: require('./bas/n030.wav') },
      { midi: 36, mod: require('./bas/n036.wav') },
      { midi: 40, mod: require('./bas/n040.wav') },
      { midi: 45, mod: require('./bas/n045.wav') },
      { midi: 49, mod: require('./bas/n049.wav') },
      { midi: 52, mod: require('./bas/n052.wav') },
      { midi: 56, mod: require('./bas/n056.wav') },
      { midi: 59, mod: require('./bas/n059.wav') },
    ],
  },

  // FLAUT – Flute, sus vibrato. Susținut, cu buclă.
  flaut: {
    samples: {},
    loop: true,
    loopStart: 0.35,
    attack: 0.05,
    release: 0.15,
    gain: 0.8,
    tuned: [
      { midi: 60, mod: require('./flaut/n060.wav') },
      { midi: 64, mod: require('./flaut/n064.wav') },
      { midi: 69, mod: require('./flaut/n069.wav') },
      { midi: 72, mod: require('./flaut/n072.wav') },
      { midi: 76, mod: require('./flaut/n076.wav') },
      { midi: 81, mod: require('./flaut/n081.wav') },
      { midi: 84, mod: require('./flaut/n084.wav') },
    ],
  },

  // TOBA – Timpani (tobă acordată). Percutant, fără buclă.
  toba: {
    samples: {},
    loop: false,
    release: 0.2,
    gain: 1.0,
    tuned: [
      { midi: 30, mod: require('./toba/n030.wav') },
      { midi: 34, mod: require('./toba/n034.wav') },
      { midi: 37, mod: require('./toba/n037.wav') },
      { midi: 40, mod: require('./toba/n040.wav') },
      { midi: 42, mod: require('./toba/n042.wav') },
    ],
  },
};
