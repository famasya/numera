# World and visual coordinates

One coherent original painted island with four large silhouettes: a petal-roof cottage, a mushroom forest, a lavender tower and an orange-roof shape castle. Artwork generated with the built-in imagegen tool, then compressed to WebP. No supplied watermarked reference was traced or embedded. Final asset: `public/art/numera-island.webp`.

The first draft contained too many small details. Following user feedback, the final prompt emphasized four very large landmarks, broad rounded shapes, little fine detail, a connected green island and turquoise sea. The final prompt is retained in `art-prompt.md`.

Layers: raster island; SVG dotted path at viewBox 0 0 1200 800; normalized percentage-positioned level buttons and landmark labels; clouds and restored flowers; navigation/zoom/guide overlays. Raster and SVG use the same 3:2 aspect ratio. Logic lives separately from illustration.

Map width never falls below 950 CSS pixels on a tablet. Native touch scrolling and mouse dragging pan the world; zoom buttons expand the canvas to 2x without shrinking hit targets. A compass focuses the garden. Level buttons remain 53–70 CSS pixels, and activity flowers are intentionally much larger than scenery. The scroll viewport crops scenery, not interactions via tiny whole-map scaling.

Mission flowers and scenery use custom SVG in a shared continuous garden environment. Lumi uses the blue rabbit from the user-supplied `rabbits.svg`; the original source is preserved and a transparent single-character derivative is rendered. Background trees and flower arch are decorative; interactive objects use HTML buttons for keyboard and screen-reader support, pointer drag and tap alternatives. Motion honors reduced-motion settings.

Canonical platform: tablet and desktop. Home/map may scroll; activity screens fit the viewport where practical. Mobile below 768 CSS pixels shows an unsupported-device page. The map guide now sits below the canvas, keeping the garden cluster visible.

Canonical navigation update: four region markers only. Every region opens a native dialog with twelve illustrated mission choices and independent progression states. No individual mission trail loops around the island. Region paths connect landmarks only. The dialog state uses wilayah=<regionId> in the home URL.

All four regions are now playable. Original SVG scene illustrations provide a forest with restoring lanterns, a workshop with restoring fabric flags that follow the rope curve and tangent, and a tower with restoring windows. Map markers show per-region completion; no future/placeholder destination dialog remains.

## Second island design (10 October 2026)

The user requested a separate second map. [Design brief](map-2-design.md) and [artwork](../public/art/numera-island-2.webp) define four large landmark clusters: measurement valley, data village, spatial building workshop, and shared adventure harbor. The first island remains the runtime map. Second-island labels, paths, HTML clusters, routes, mission manifest, and progression are not implemented. Art geometry is decorative; all mathematical interaction remains separate.

## Shape stage geometry (11 October 2026)

Assembly uses tight SVG frames and a fixed canvas aspect ratio; square/circle targets retain their proportions. On short tablet viewports, the picture and palette sit side by side. Boat and rocket silhouettes now form recognizable connected objects; tiling previews fill their geometry frames. Workshop decoration remains: fabric pennants have curved edges, folds, and placement/angle derived from their rope. See [map 1 requirements](../prds/24-map-1-reinforcement.md).
