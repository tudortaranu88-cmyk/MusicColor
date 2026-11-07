# MusicColor_01 — 2026-11-07

Prima versiune cu **sunete reale** pe cele 6 instrumente orchestrale.
Pornită din repo-ul `tudortaranu88-cmyk/TSkyes.sinestezia` (sursa din spatele `music-color5.apk`).

## Ce s-a schimbat față de versiunea anterioară

- **Nume aplicație:** `Music&Color` → `MusicColor`.
- **Pachet:** `com.tskyes.sinestezia` → `com.tskyes.musiccolor` (Android + iOS).
- **Sunete reale** din Versilian Studios Chamber Orchestra 2, Community Edition (licență CC0):
  - pian — Upright Piano (7 note)
  - vioara — Solo Violin, arco vibrato (8 note)
  - violoncel — Cello Section, sus vibrato (9 note)
  - bas — Solo Contrabass, sus vibrato (8 note)
  - flaut — Flute, sus vibrato (7 note)
  - toba — Timpani (5 note)
- **Motor audio extins:** `InstrumentCfg.tuned[]` — sample-uri tag-uite pe pitch real (MIDI),
  nu doar pe cele 8 coloane. Fiecare sample a fost etichetat după frecvența **măsurată**,
  nu după numele fișierului (la violoncel, contrabas și flaut numele erau cu o octavă sub pitch-ul real).
- Sample-uri convertite: mono, 16-bit, 44.1 kHz, atac curat (fără liniște la început), în `assets/sunete/<instrument>/n<MIDI>.wav`.

## Ce a rămas neschimbat

- Instrumentele populare **caval, nai, tilinca, taragot, dramba** rămân pe timbrul sintetizat,
  până adăugăm înregistrări autentice (VSCO nu are aceste instrumente).

## Cum obții APK-ul

Codul **nu a fost compilat aici** (fără internet în mediul de lucru). Două opțiuni:
1. **GitHub Actions** — pune proiectul într-un repo și, la push pe `main`, workflow-ul
   `.github/workflows/android.yml` produce automat `musiccolor-<nr>.apk` ca artefact.
2. **Local** — `npm install`, apoi `npx expo prebuild` și `npx expo run:android`
   (necesită development build, nu Expo Go, fiindcă `react-native-audio-api` are cod nativ).

## Licență sunete

VSCO 2 Community Edition este CC0 (domeniu public). Creditul către Versilian Studios și
Ivy Audio (pian) este încurajat. Vezi și restricția „a nu fi vândute ca atare” — aici sunetele
sunt procesate și integrate în aplicație, nu redistribuite ca pachet de sample-uri.
