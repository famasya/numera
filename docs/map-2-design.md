Status 11 Oktober 2026: artwork terhubung ke runtime, selector peta, empat cluster, dan 12 misi awal. [Brief implementasi](../prds/25-map-2-first-adventures.md). Label serta panel Lumi memakai ruang terpisah.

# Desain peta kedua: Pulau Para Pembuat

Dibuat 10 Oktober 2026 memakai built-in imagegen. Nama pulau adalah usulan; pengguna meminta desain peta kedua dengan mempertahankan pulau sekarang. Ini aset/desain visual, belum integrasi navigasi atau gameplay.

## Aset

- [Master PNG](../design/maps/numera-island-2.png), 1536×1024, rasio 3:2.
- [WebP untuk aplikasi](../public/art/numera-island-2.webp), kompresi Sharp quality 86.
- Referensi gaya: [pulau pertama](../public/art/numera-island.webp). Referensi digunakan untuk palet, medium, skala landmark, dan sudut pandang; peta kedua memiliki landmark dan coastline baru.

## Empat wilayah

| ID usulan | Wilayah | Landmark | Fokus | Pusat visual x/y |
| --- | --- | --- | --- | --- |
| lembah-ukuran | Lembah Ukuran | Kincir air dan dua kolam | LEN, ARE, VOL, ANG; membandingkan dan mengukur | 30% / 26% |
| desa-data | Desa Data | Balai pasar dengan tiga keranjang buah | DAT; klasifikasi, pencatatan kasus, keputusan | 75% / 28% |
| bengkel-ruang | Bengkel Bangun Ruang | Bengkel kayu, lengkungan balok, bola/kubus/silinder | S3D, C3D, C2D, DIS, VIS | 29% / 59% |
| pelabuhan-petualangan | Pelabuhan Petualangan | Paviliun kompas, dermaga, perahu | PS dan misi gabungan bilangan/pola/ruang | 79% / 65% |

Posisi adalah perkiraan setelah inspeksi ilustrasi, bukan koordinat gameplay yang sudah diuji. Peta mengundang eksplorasi; tidak diberi label usia atau syarat menamatkan pulau pertama. Bilangan, pola, dan problem solving NRICH muncul lintas wilayah. Lihat [requirements](../prds/README.md).

## Lapisan navigasi berikutnya

Gunakan artwork sebagai latar rasio 3:2 dengan koordinat normalized/viewBox 1200×800 yang sama untuk semua lapisan. Tambahkan satu cluster HTML per wilayah, label Indonesia, path penghubung, state progres, dan modal misi melalui kode. Jangan menambahkan 12 titik individual per wilayah. Jumlah misi pulau kedua mengikuti activity briefs, bukan kuota otomatis.

Area kandidat cluster di rumput dekat landmark: lembah 31%/39%; desa 73%/42%; bengkel 30%/75%; pelabuhan 67%/79%. Kandidat ini perlu uji Chrome pada tablet sebelum final; letak dermaga/air bukan tempat meletakkan kontrol. Pertahankan target ≥48 CSS pixel serta ukuran teks melalui token, pan/zoom dan unsupported viewport di bawah 768 CSS pixel.

Artwork tidak mengandung label, UI, node, atau path navigasi. Jembatan/dermaga adalah bagian lingkungan. Balok, buah, dan kolam dalam artwork bersifat dekoratif; manipulatives dan validator matematika harus menjadi lapisan deterministik terpisah. Bentuk ilustrasi tidak digunakan sebagai ukuran matematika.

## Pemeriksaan visual

Empat landmark terbaca dan terpisah, warna/gaya selaras dengan pulau pertama, ruang rumput tersedia di sekitar destinasi, rasio 3:2, dan tidak ada teks/watermark/karakter. Sungai membagi daratan dengan jembatan penghubung. Pelabuhan berada dekat pantai. WebP diperiksa setelah kompresi. Belum ada pengujian Chrome, sentuh tablet fisik, atau anak untuk aset ini; belum ada route, mission manifest, atau progres peta kedua.

## Prompt final

Tool: built-in imagegen. Input image: pulau pertama sebagai style reference, bukan edit target.

```text
Create a NEW original background illustration for Numera's SECOND adventure island map, landscape 1536x1024, 3:2. The provided island is STYLE REFERENCE ONLY; create a different coastline and new landmarks, do not edit or repeat its cottage, mushrooms, towers, or castle. Match its premium softly painted gouache children's storybook art, gently elevated slightly isometric overview, warm sage/lime greens, turquoise sea, cream sandy shore, rounded friendly forms and soft light. Audience ages 3–7 on tablet. One coherent connected island fills about 85 percent of frame, entire coastline visible with ocean margin. Exactly FOUR very large instantly distinct landmark clusters with substantial open grass around each for later HTML navigation overlays: upper left around x28% y29%, MEASUREMENT VALLEY: a broad low aqua-and-cream watermill beside a calm pond, one large wooden waterwheel, two simple open water basins at different heights and a short straight footbridge, gentle rolling valley; upper right around x73% y28%, DATA VILLAGE: a welcoming village plaza with one prominent coral-roof market hall and two smaller rounded cottages, exactly three large shallow sorting baskets holding groups of colorful fruits on the plaza, no chart bars or letters; lower left around x28% y68%, SPATIAL BUILDING WORKSHOP: a large ochre-roof open timber workshop surrounded by a very simple monumental arch made of chunky cube blocks, a few large sphere/cylinder/cube building pieces, clearly recognizable 3D forms, no tiny tools or clutter; lower right around x74% y68%, SHARED ADVENTURE HARBOR: a large teal-roof exploration pavilion with a circular golden compass motif without writing, a simple broad wooden dock on the shore and one small friendly sailboat, a sense of experimenting and traveling together. Gentle stream bends through center with ONE simple bridge linking island halves. Calm readable terrain, limited trees grouped near shoreline, broad green negative spaces separating four destinations. Four landmark silhouettes comparable in size and readability to reference. No characters. Very little fine detail. No baked-in navigation paths, no dotted trails, no labels, text, letters, digits, measuring marks, logos, watermark, HUD, buttons, pins, circles for nodes or UI. Artwork is background only; mathematical manipulatives and interactive overlays will be separate code layers. Beautiful cohesive cheerful world, painterly polish, practical game-map composition.
```

