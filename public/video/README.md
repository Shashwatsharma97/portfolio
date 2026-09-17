Drop any project or hero video files here and reference them with a
`/video/your-file.mp4` path from a component.

`hero-scrub.mp4` is the scroll-scrubbed hero background used by
`components/Hero.tsx`. It's a re-encode of the original source video with
every frame as a keyframe (`-g 1 -bf 0`) so `video.currentTime` seeks
instantly as the user scrolls — without this, scrubbing stutters badly
since the browser has to decode from the last keyframe on every seek.
To swap in a different clip, re-encode it the same way:

```
ffmpeg -i input.mp4 -an -c:v libx264 -preset slow -crf 20 -g 1 -bf 0 \
  -pix_fmt yuv420p -movflags +faststart public/video/hero-scrub.mp4
```
