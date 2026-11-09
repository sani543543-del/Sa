# Sanshuv Foods — খাঁটি গাওয়া ঘি (Remotion, 1920×1080, 30fps, ~35.2s)

1. npm install
2. npx remotion studio src/index.ts          # preview (voiceover + SFX play in Studio)
3. npx remotion render src/index.ts Main out/video.mp4 --codec h264 --crf 17

Voiceover is OFF by default in a render. To include it:
npx remotion render src/index.ts Main out/video.mp4 --codec h264 --crf 17 --props='{"voiceoverInRender":true}'

Edit timing:  src/timing.ts  (scene ranges + SFX cues, in seconds)
Edit look:    src/theme.ts   (colors, fonts, easings, springs)
Assets:       public/ (voiceover.mp3, logo.png, jar-500g.png, sfx/*.wav)
Fonts:        Hind Siliguri via @remotion/google-fonts (needs internet on first load)
