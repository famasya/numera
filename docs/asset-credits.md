# Asset provenance

## Lumi rabbit

- User requested [Rabbits on FreeSVG](https://freesvg.org/rabbits), SVG ID 37517, published by OpenClipart. The accessed page identifies it as public domain; the SVG embeds the Openclipart public-domain license URL.
- Chrome's domain policy prevented direct navigation. The user subsequently supplied `/Users/famasya/Downloads/rabbits.svg`, which was copied locally. No blocked download workaround was used.
- Unchanged original: `public/art/rabbits.svg`.
- Game derivative: `public/art/lumi-rabbit.svg`. Blue rabbit paths were extracted; the yellow background and pink companion were removed, and the viewBox was fit to the character. Colors and face geometry were preserved. This is a vector edit, not an AI-generated replacement.
- Used consistently in map guide, garden guide and curiosity dialog. Celebration uses gentle motion rather than changing the supplied face.

## Island, garden and flowers

The island is original built-in imagegen artwork, documented in `art-prompt.md`. Garden scenery and flower manipulatives are authored SVG in `src/components/Art.tsx`. Lucide icons use the package's ISC license. Fonts currently load from Google Fonts; system sans-serif fallback is available when the font request fails.
