# Skenario QA — kerusakan visual

Daftar skenario yang berpeluang merusak tampilan game: bug visual, kontrol tidak terjangkau, dan soft-lock tanpa error. Digrounded pada `src/styles/game.css`, `src/world/map/WorldMap.tsx`, `src/components/Manipulative.tsx`, `src/activities/discovery/PuzzleBoard.tsx`, `src/activities/map-two/MapTwoBoard.tsx`, dan komponen terkait.

## A. Viewport & breakpoint (paling berbahaya)

| ID | Skenario | Cara me-break | Dampak yang terlihat |
|---|---|---|---|
| V-01 | Boundary 767/768px | Resize ke 767.5px, atau zoom browser 125–150% pada lebar ~1024px sehingga lebar efektif <768 CSS px | `.app-shell` hilang, layar "Perangkat belum didukung" muncul di tengah misi; anak mengira game hilang |
| V-02 | Landscape pendek | 768–1100px lebar × ≤560px tinggi (split-screen tablet, toolbar besar) | `height:100dvh` + grid row tetap (68+68+82px) memeras `.garden-play`; `overflow:hidden` di `.garden-scene` memotong palette/tombol "Periksa" → soft-lock tanpa scroll, terlihat "rapi" |
| V-03 | Potret 768px | Buka `latin` 3×3, `measure-track` (`repeat(length,52px)`), `repair-path` 6 kolom, `discovery-palette{flex-wrap:nowrap}` pada lebar 768 | Grid/palette overflow horizontal, terpotong `overflow:hidden` → token di ujung kanan tidak terlihat & tidak bisa dipilih |
| V-04 | `100dvh` berubah | Safari iOS: toolbar collapse/expand, atau rotasi tablet saat drag | Tinggi scene berubah mendadak; area play resize saat jari masih menahan piece |
| V-05 | ≥1550px | Desktop sangat lebar | Rule `@media(min-width:1550px)` mati (ditimpa rule `min-width:1101` yang muncul lebih akhir) — `.map-viewport` height auto, map lebih tinggi dari desain; verifikasi tak ada regresi |

## B. Peta dunia

| ID | Skenario | Cara me-break | Dampak |
|---|---|---|---|
| M-01 | Node/label vs artwork | Semua zoom (1–2) & lebar 768–1500 pada kedua pulau | Koordinat node/label hardcode; label "Pelabuhan Petualangan" (`white-space:nowrap`, posisi 79%/91%) bisa keluar tepi canvas atau menutupi node |
| M-02 | `map-bloom` pulau salah | Selesaikan misi di lembah-ukuran, buka Pulau Pembuat | Bunga progres digambar di koordinat Taman Angka (`x=210+i*25`) → bunga mengambang di laut/langit peta 2; 12 bunga × 25px bisa melewati tepi |
| M-03 | Art gagal/lambat | Throttle network / block `numera-island-2.webp` (354KB) | Node + path melayang di atas `color-ocean` polos; terlihat seperti tombol tanpa konteks |
| M-04 | Zoom melompat | Klik zoom-in berulang lalu zoom-out | `scrollLeft` tersimpan dalam px, bukan proporsi → viewport melompat dari node yang sedang dilihat; deteksi zoom via `:has(style*="125"/"150"/"175"/"200")` fragile — uji tiap langkah 0.25 |
| M-05 | Centering awal | Buka `/` pada lebar 1100–1101px, atau setelah rotasi | Auto-scroll ke node pertama hanya saat `innerWidth<1100`; cluster bisa di luar viewport, scrollbar disembunyikan → map tampak seperti gambar statis |
| M-05b | Pan-note mati | Lebar 768–1100 | `.pan-note{display:none}` (block min-width:768) menimpa `display:flex` (max-width:1100) → "Geser untuk menjelajah" tidak pernah tampil di device yang didukung — affordance pan hilang |
| M-06 | Node flag terpotong | Node di y≈10% canvas (atas) | `.node-flag "Ayo!"` di atas node terpotong tepi viewport saat scroll 0; label region bisa menumpuk flag |
| M-07 | Pan vs tap | Drag canvas berakhir di atas node; drag mulai di node | Guard `closest("button")` mencegah pan dari node — tapi drag panjang dari canvas ke node bisa terasa "nyangkut"; `focusGarden()` smooth-scroll vs drag manual berbarengan → jitter |
| M-08 | `map-prompt` menutupi node | Viewport pendek + map-prompt aktif | Prompt card bottom-left bisa menutup node bawah (pulau-bentuk 68%, pelabuhan 79%) — verifikasi node masih bisa di-tap |

## C. Scene misi

| ID | Skenario | Cara me-break | Dampak |
|---|---|---|---|
| S-01 | Art ter-crop | Scene sempit/tinggi | `garden-art` `slice` viewBox 1200×720 — dekorasi tepi (kincir x=45/1050 di MapTwoArt) terpotong setengah |
| S-02 | scaffold-3 redup | Miss ≥4 | `garden-art{opacity:.4}` membuat seluruh latar pudar — bisa terlihat seperti layar mati/loading |
| S-03 | Instruksi terpotong | Instruksi terpanjang ("Bagikan buah agar kedua teman mendapat jumlah yang sama.") di baris 68px | Wrap 2 baris terpotong atau menimpa area play; pesan `gentle-message` panjang mendorong board keluar |
| S-04 | Mission-leaves palsu | Misi index 0–3 region manapun | `i <= floor(localIndex/4)` → daun pertama sudah "lit" sebelum apa pun dikerjakan; indikator tak berubah dalam grup 4 misi → tampak macet |
| S-05 | demo-hand menutupi target | Hint ≥2 di counting pada lebar kecil | Panel demo (top:185px, pointer-events none) menutupi visual lubang tanam yang didemokan |
| S-06 | Banner terpotong | `completion-banner` `max-height:82px`, konten medallion+judul+2 tombol (state `last`) | Tombol "Main lagi"/"Kembali ke peta" terpotong pada lebar 768 saat wrap |
| S-07 | garden-tools menumpuk | Board lebar penuh (palette/basket sampai kanan) | Tombol hint+reset menutup token terakhir palette atau tombol "Periksa pesanan" → kontrol tertutup tombol lain |
| S-08 | Lubang tanam bertumpuk | Counting variasi `scattered` pada planting-area sempit (~570px) | Posisi % hardcode: spot 98px pada selisih ~8% ≈ 45px → lubang bertumpuk; bunga tertanam menutup tombol spot kosong tetangga; spot kanan (73%+50%) bisa keluar tepi |
| S-09 | Drag ghost terpotong | Drag piece ke basket di tepi bawah | `overflow:hidden` memotong piece yang didrag → bunga "menghilang" saat melewati batas scene walau drop masih tercatat |
| S-10 | elementFromPoint vs visual | Drop di atas area yang ditumpuk elemen non-`pointer-events:none` (spot yang overlap, `.cross-target` transparan inset-0, `.measure-tool` z-index 2 di atas block) | Drop mendarat di target berbeda dari yang terlihat jari — "saya taruh di sini tapi masuk ke situ" |
| S-11 | Tombol check terpotong | latin/route/tiling pada 800×600 | Grid 3×76 + palette 86 + feedback mendorong "Periksa susunan" keluar clip → misi tak bisa diselesaikan, tanpa indikasi |
| S-12 | Timbangan ekstrem | Semua bintang di satu piring | Rotasi beam maksimum + translateY bin: piring bisa terlepas visual dari beam, menumpuk `.balance-clue`, atau token keluar scene |
| S-13 | Balok rotasi terpotong | Tiling: pilih balok 1×3, putar 90° | Preview dalam tombol 68px terpotong/menonjol; uji juga spin 270°→0 tidak berputar balik |
| S-14 | Sort fase 2 ganti ikon | Selesaikan fase warna → fase jenis | Bin berganti gambar sementara benda tetap di bin lama → tampak salah tempat; restore session mid-phase menampilkan state campuran |
| S-15 | Route cell bertumpuk | Path melewati kunci lalu pintu | Lumi + footstep + ikon pintu/kunci berbagi sel; `visited` styling bisa menyembunyikan pintu — anak tak tahu harus ke mana |
| S-16 | measure-track (peta 2) | Track panjang × `--map2-unit` 52px | `.measure-tool` z-index 2 selalu di atas `.measure-block` z-index 1 → balok yang diletakkan tertutup penggaris; track bisa overflow board di lebar kecil |
| S-17 | cross-grid (peta 2) | Drop benda di atas ikon yang sudah ada di bin | `.cross-target` transparan `inset:0` menangkap `elementFromPoint` lebih dulu → masuk ke target baris, bukan bin yang terlihat; `.cross-bin{overflow:hidden}` memotong objek saat bin penuh → benda "menghilang" |
| S-18 | Ghost tertinggal | `cross-drag-ghost`/`measure-drag-ghost` `position:fixed` z-100 | iPad gesture (swipe home) membatalkan pointer → ghost melayang permanen di atas UI, termasuk di atas dialog |
| S-19 | Outline seleksi terpotong | Pilih piece di tepi scene | `outline-offset` terpotong `overflow:hidden` → state terpilih tak terlihat; tap berikutnya terasa "tidak merespons" |

## D. Dialog & overlay

| ID | Skenario | Dampak |
|---|---|---|
| D-01 | MissionPicker di 768×500 | `max-height:100dvh-8`; verifikasi area scroll internal & tombol tutup tetap terjangkau; dibuka saat map zoom 2 → posisi tetap benar |
| D-02 | Concept dialog di 768×500 | Grid `minmax(0,1fr) minmax(260px,300px)` + `height:min(85dvh,690)` → body ~300px; concept-map ter-remas, node bertumpuk |
| D-03 | Parent dialog pendek | Heading+`primary` flex-shrink:0, `.parent-content` scroll — uji di tinggi ~400px: tombol tutup tetap terlihat, scroll sentuh bekerja (`overscroll-behavior:contain`) |
| D-04 | Overlay bertumpuk | URL `?wilayah=hutan-pola&konsep=true&orangtua=true` → cek prioritas render; tutup parent → picker/konsep kembali konsisten; dua backdrop `z-index:100` tidak saling menutup permanen |
| D-05 | Backdrop blur | `backdrop-filter:blur` di tablet low-end → frame drop saat dialog terbuka di atas animasi map |

## E. Motion & state visual

| ID | Skenario | Dampak |
|---|---|---|
| E-01 | Reduced motion OS | `@media(reduce){*{animation:none!important}}` membunuh `hint-glow` → hint level ≥1 kehilangan isyarat visualnya (glow adalah satu-satunya affordance); `breathe`, `bloom-in`, demo-pulse juga hilang — verifikasi masih ada penanda statis |
| E-02 | Tap/drag cepat berulang | Release di luar elemen, pointercancel vs lostpointercapture, spam select→drag → piece nyangkut dengan class `dragging` (z-index 20, pointer-events none) → melayang & tak bisa disentuh; offset spring belum selesai saat unmount |
| E-03 | MotionTurn 270°→0 | Rotasi lanjutan harus searah (bukan mundur 270°); restore `turn` dari session saat refresh mid-animasi |
| E-04 | Transisi `done` | `finish()` → `.restored` `visibility:hidden` mendadak pada lumi-guide+tools; `GardenArt bloom` meloncat `Math.max(localIndex+1,completed)` → jump cut |
| E-05 | `key={round}` remount | Reset misi → board remount; cek tidak ada flash posisi default sebelum session hydrate (khususnya `order-targets` yang bergantung `session.values.places`) |

## F. Tipografi & kontras

| ID | Skenario | Dampak |
|---|---|---|
| T-01 | Teks terpanjang di 768px | `region-label small`, guide-bubble, `region.restored` ("Gerbang bengkel sudah berdiri!"), pesan `gentle-message` → wrap/clip; `region-label` nowrap bisa lebih lebar dari pulau |
| T-02 | Isyarat warna-saja | `hint-glow` = filter drop-shadow saja; `ghost-token` opacity .35 di atas art ramai; `locked` vs `completed` beda warna tipis — anak tak bisa bedakan tanpa bentuk |
| T-03 | Teks kecil pembawa info | `region-label small`, `map-prompt p`, `pan-note` (yang malah hidden) — cek aturan "small decorative text tidak membawa info wajib" |
| T-04 | Font OS besar / zoom teks | Semua token px tetap — instruksi meluber dari baris 68px, banner/picker overflow |

## G. Visual dari persistensi

| ID | Skenario | Dampak |
|---|---|---|
| P-01 | Refresh mid-drag / mid-animasi | Piece kembali ke slot tersimpan, `scene-in` replay; `done` restore → banner + Lumi happy instan tanpa chime — cek tidak bertumpuk |
| P-02 | Session sort lama | Snapshot fase warna dibuka setelah rules berganti → bin menampilkan ikon aturan baru dengan isi aturan lama |
| P-03 | Restore `measure-selected` | Index terpilih tersimpan tapi `places` beda → outline seleksi di piece salah |
| P-04 | Map2 `runs`/`rich` hydrate | Variasi `(runs+round)%2` menentukan layout — setelah replay, scene tiba-tiba beda susunan tanpa penjelasan visual |

## Prioritas eksekusi (P0 dulu)

1. **V-02 / S-11 / V-03** — kontrol selesai terpotong `overflow:hidden` = soft-lock invisible. Uji 800×600 & 768×500 pada misi grid (latin, route, tiling, repair, measure).
2. **S-08 / S-10 / S-17** — target drop yang tertumpuk/tertutup = anak taruh benar tapi masuk salah.
3. **M-02 / M-05b** — bug nyata yang sudah terlihat di kode: bloom peta 2 di koordinat peta 1; `pan-note` tidak pernah tampil di rentang yang didukung.
4. **E-01** — reduced motion mematikan affordance hint.
5. **V-01** — zoom browser memicu layar "tidak didukung" di tengah sesi.

## Checklist pemeriksaan

Isi tanggal saat skenario diperiksa, hasil (Lulus / Gagal / Terblokir), dan catatan bukti (screenshot, viewport, perangkat). Baris bertanda **P0** diperiksa lebih dulu.

**Aturan re-check:** setiap perubahan pada file di kolom "Sumber terdampak" membatalkan hasil sebelumnya — kosongkan tanggal/hasil dan periksa ulang skenarionya. Perubahan pada `src/styles/game.css` atau `src/styles/tokens.css` memicu re-check seluruh skenario dalam kategori yang menyebut file itu; perubahan token visual global (warna, ukuran kontrol, font) memicu re-check semua kategori.

### A. Viewport & breakpoint

| ID | P0 | Status | Tanggal | Hasil | Catatan | Sumber terdampak |
|----|----|--------|---------|-------|---------|------------------|
| V-01 | P0 | [ ] | | | | `game.css` (media 767/768, `.unsupported-device`), `Game.tsx` |
| V-02 | P0 | [ ] | | | | `game.css` (grid `min-width:768`, `.garden-scene`), `tokens.css` (tablet-*) |
| V-03 | P0 | [ ] | | | | `game.css` (grid/palette/board), `PuzzleBoard.tsx`, `MapTwoBoard.tsx`, `CreativePattern.tsx` |
| V-04 | | [ ] | | | | `game.css` (`100dvh`, `.garden-scene`), `Manipulative.tsx` |
| V-05 | | [ ] | | | | `game.css` (media 1550/1101, `.map-viewport`) |

### B. Peta dunia

| ID | P0 | Status | Tanggal | Hasil | Catatan | Sumber terdampak |
|----|----|--------|---------|-------|---------|------------------|
| M-01 | | [ ] | | | | `WorldMap.tsx` (nodes/labels), `regions.ts`, `public/art/numera-island*.webp` |
| M-02 | P0 | [ ] | | | | `WorldMap.tsx` (`.map-bloom`, `gardenCompleted`) |
| M-03 | | [ ] | | | | `WorldMap.tsx`, `game.css` (`.island-art`, `.map-canvas`), `public/art/*` |
| M-04 | | [ ] | | | | `WorldMap.tsx` (zoom state), `game.css` (`:has(style*=...)`, `.map-canvas`) |
| M-05 | | [ ] | | | | `WorldMap.tsx` (useEffect scrollTo, `innerWidth<1100`) |
| M-05b | P0 | [ ] | | | | `game.css` (`.pan-note` di dua blok media), `WorldMap.tsx` |
| M-06 | | [ ] | | | | `WorldMap.tsx`, `game.css` (`.map-node`, `.node-flag`, `.region-label`) |
| M-07 | | [ ] | | | | `WorldMap.tsx` (pan handlers, `focusGarden`) |
| M-08 | | [ ] | | | | `game.css` (`.map-prompt`), `WorldMap.tsx` |

### C. Scene misi

| ID | P0 | Status | Tanggal | Hasil | Catatan | Sumber terdampak |
|----|----|--------|---------|-------|---------|------------------|
| S-01 | | [ ] | | | | `Art.tsx`, `RegionArt.tsx`, `MapTwoArt.tsx`, `game.css` (`.garden-art`) |
| S-02 | | [ ] | | | | `game.css` (`.scaffold-3`), `Garden.tsx` (level), `hints.ts` |
| S-03 | | [ ] | | | | `missions.ts`, `new-missions.ts`, `map-two-missions.ts` (instruksi), `game.css` (`.instruction`) |
| S-04 | | [ ] | | | | `Garden.tsx` (`.mission-leaves`, `localIndex`) |
| S-05 | | [ ] | | | | `game.css` (`.demo-hand`), `Counting.tsx`, `hints.ts` |
| S-06 | | [ ] | | | | `Garden.tsx` (banner, `last`), `game.css` (`.completion-banner`), `regions.ts` (`restored`) |
| S-07 | | [ ] | | | | `game.css` (`.garden-tools`), `Garden.tsx`, semua aktivitas (lebar board) |
| S-08 | P0 | [ ] | | | | `Counting.tsx` (`positions`), `game.css` (`.plant-spot`, `.planting-area`) |
| S-09 | | [ ] | | | | `game.css` (`.garden-scene` overflow), `Manipulative.tsx` (offset) |
| S-10 | P0 | [ ] | | | | `Manipulative.tsx` (`elementFromPoint`), `MapTwoBoard.tsx` (`data-cross-target`, `data-measure-position`), CSS semua board (`[data-drop]`) |
| S-11 | P0 | [ ] | | | | `game.css` (`.garden-play`, `--puzzle-cell`), `PuzzleBoard.tsx`, `MapTwoBoard.tsx` |
| S-12 | | [ ] | | | | `balance.ts`, `PuzzleBoard.tsx` (weighing), `game.css` (`.scale-*`) |
| S-13 | | [ ] | | | | `PuzzleBoard.tsx` (TilingBoard), `MotionTurn.tsx`, `game.css` (`.tile-*`) |
| S-14 | | [ ] | | | | `PuzzleBoard.tsx` (`sort-phase`, `firstRule`), `puzzles.ts` (konten sort) |
| S-15 | | [ ] | | | | `PuzzleBoard.tsx` (RouteBoard), `game.css` (`.route-*`), `puzzles.ts` |
| S-16 | | [ ] | | | | `MapTwoBoard.tsx` (measure), `game.css` (`.measure-*`), `tokens.css` (`--map2-unit`) |
| S-17 | P0 | [ ] | | | | `MapTwoBoard.tsx` (cross), `game.css` (`.cross-*`) |
| S-18 | | [ ] | | | | `MapTwoBoard.tsx` (drag ghost), `game.css` (`*-drag-ghost`) |
| S-19 | | [ ] | | | | `game.css` (`.selected`, outline), `Manipulative.tsx` |

### D. Dialog & overlay

| ID | P0 | Status | Tanggal | Hasil | Catatan | Sumber terdampak |
|----|----|--------|---------|-------|---------|------------------|
| D-01 | | [ ] | | | | `MissionPicker.tsx`, `game.css` (`.mission-picker`) |
| D-02 | | [ ] | | | | `ConceptTree.tsx`, `game.css` (`.concept-*`), `learning-purpose.ts` |
| D-03 | | [ ] | | | | `ParentMode.tsx`, `game.css` (`.parent-*`), `parent-guides.ts` |
| D-04 | | [ ] | | | | `Game.tsx` (guard `parent`/`concept`/`cluster`), `regions.ts` (`gameSearch`), `game.css` (z-index, `.future-backdrop`) |
| D-05 | | [ ] | | | | `game.css` (`backdrop-filter`) |

### E. Motion & state visual

| ID | P0 | Status | Tanggal | Hasil | Catatan | Sumber terdampak |
|----|----|--------|---------|-------|---------|------------------|
| E-01 | P0 | [ ] | | | | `game.css` (`prefers-reduced-motion`, `hint-glow`, keyframes), `movement.ts`, `Manipulative.tsx` |
| E-02 | | [ ] | | | | `Manipulative.tsx` (pointer lifecycle), `movement.ts` |
| E-03 | | [ ] | | | | `MotionTurn.tsx`, `movement.ts`, `PuzzleBoard.tsx` (rotation/tiling) |
| E-04 | | [ ] | | | | `Garden.tsx` (`done`, `finish`), `game.css` (`.restored`), `Art.tsx` (`bloom`) |
| E-05 | | [ ] | | | | `Garden.tsx` (`key={round}`), `session.tsx`, `Placement.tsx` (`order-targets`) |

### F. Tipografi & kontras

| ID | P0 | Status | Tanggal | Hasil | Catatan | Sumber terdampak |
|----|----|--------|---------|-------|---------|------------------|
| T-01 | | [ ] | | | | `missions.ts`, `new-missions.ts`, `map-two-missions.ts`, `regions.ts`, `puzzles.ts`, `parent-guides.ts` (semua string), `game.css` |
| T-02 | | [ ] | | | | `tokens.css` (palet), `game.css` (`hint-glow`, `ghost-token`, `map-node.*`) |
| T-03 | | [ ] | | | | `game.css` (`font-caption`), `WorldMap.tsx` (`region-label small`, `pan-note`) |
| T-04 | | [ ] | | | | `tokens.css` (font sizes), `game.css` (semua row tetap) |

### G. Visual dari persistensi

| ID | P0 | Status | Tanggal | Hasil | Catatan | Sumber terdampak |
|----|----|--------|---------|-------|---------|------------------|
| P-01 | | [ ] | | | | `session.tsx` (`useSessionValue`, hydrate), `Manipulative.tsx`, `Garden.tsx` |
| P-02 | | [ ] | | | | `session.tsx`, `PuzzleBoard.tsx` (`sort-phase`), `puzzles.ts` |
| P-03 | | [ ] | | | | `MapTwoBoard.tsx` (`measure-selected`, `places`) |
| P-04 | | [ ] | | | | `Garden.tsx` (`runs`, `rich`, `variant`), `readiness.ts`, `session.tsx` |
