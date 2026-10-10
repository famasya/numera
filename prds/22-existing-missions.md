# Audit 48 misi terhadap LT dan NRICH

## Penempatan peta

**Peta 1:** Taman Angka, Hutan Pola, Pulau Bentuk, dan Menara Misteri. Status penguatan terbaru: [paket peta 1](24-map-1-reinforcement.md).

Audit kode diperbarui 11 Oktober 2026; hasil Chrome dan batas bukti ada dalam [paket penguatan](24-map-1-reinforcement.md). Sumber kode: [missions](../src/content/missions.ts), [new-missions](../src/content/new-missions.ts), [puzzles](../src/content/puzzles.ts), [validator taman](../src/pedagogy/concepts.ts), [validator puzzle](../src/pedagogy/puzzles.ts), [Counting](../src/activities/counting/Counting.tsx), [Placement](../src/activities/adventure/Placement.tsx), dan [PuzzleBoard](../src/activities/discovery/PuzzleBoard.tsx).

48 adalah jumlah konfigurasi misi, bukan jumlah level LT. Ada 35 goal level dengan dukungan parsial/konteks; tidak ada level yang dinyatakan tercakup penuh berdasarkan audit ini. Misi tanpa pasangan level tetap memiliki nilai problem solving; lihat PS-01–PS-06 dalam [PRD NRICH](21-problem-solving.md).

| ID misi | Dukungan goal LT | Perilaku kode | Batas dan kebutuhan tambahan |
| --- | --- | --- | --- |
| `counting` | [CNT-05](01-counting.md), [CNT-06](01-counting.md) | Lima bunga unik ke lima lubang; posisi berubah saat replay. | Tidak merekam kata bilangan atau jawaban jumlah total; target bisa diisi otomatis tanpa menghitung. |
| `composition` | [COM-03](05-composing-numbers.md), [COM-04](05-composing-numbers.md) | Lima bunga ke dua petak; enam partisi termasuk kosong, alternatif tersimpan. | Distribusi valid belum membuktikan anak mengetahui kombinasi bagian secara langsung. |
| `patterns` | [PAT-03](08-patterning.md), [PAT-04](08-patterning.md) | AB/BA dengan celah; variasi AAB setelah readiness. | PAT-04 hanya pada variasi AAB; tidak membuktikan semua unit kompleks. |
| `matching` | [CMP-02](03-comparing-number.md), [CNT-05](01-counting.md) | Empat buah untuk empat teman, satu per tempat. | Buah-teman adalah korespondensi; pasangan kata bilangan tidak diamati. |
| `compare` | [CMP-07](03-comparing-number.md), [CMP-08](03-comparing-number.md) | Enam batu dari 4/2 menjadi 3/3. | Tujuan kesetaraan bisa dicapai dengan mencoba; belum meminta pembandingan jumlah atau strategi. |
| `orders` | [CNT-08](01-counting.md), [SUB-03](02-subitizing.md), [SUB-04](02-subitizing.md) | Tujuh bunga tersedia; target titik 3/2 atau 2/1 saat replay, surplus tetap di keranjang. | Produksi jumlah dari surplus tersedia; menghitung/mencocokkan titik masih bisa dipakai, bukan bukti subitizing atau kardinalitas verbal. |
| `sorting` | [DAT-03](20-classification-data.md), [DAT-04](20-classification-data.md) | Enam daun/bunga dipilah menurut jenis. | Aturan diberikan; belum ada pilihan aturan atau pemilahan ulang. |
| `missing` | [ADD-05](04-adding-subtracting.md), [COM-04](05-composing-numbers.md) | Dua bunga awal, tambah tiga hingga lima. | Lubang kosong memberi scaffold; banyak perubahan tidak perlu ditentukan anak. |
| `growing` | [CMP-12](03-comparing-number.md) | Kelompok 1–4 disusun meningkat. | Baru sampai 4; bukan bukti ordinal verbal atau seriasi sampai 5 lengkap. |
| `repair` | [PAT-03](08-patterning.md) | Satu penyimpangan AB diganti. | Perbaikan lokal saja; belum ada generalisasi unit. |
| `sharing` | [MUL-02](06-multiplying-dividing.md), [MUL-03](06-multiplying-dividing.md), [CMP-07](03-comparing-number.md) | Empat buah ke dua teman, 2/2. | Satu total dan dua penerima; kesamaan numerik/strategi perlu diamati. |
| `free-pattern` | [PAT-03](08-patterning.md) | Unit pilihan AA/AB/BA/BB diulang dua kali. | AA/BB adalah pola konstan valid; tidak membuktikan unit terkecil dua. |
| `forest-copy` | [PAT-03](08-patterning.md) | Menyalin enam jamur AB dari model. | Belum menyalin jauh dari model atau pada bahan tujuan berbeda. |
| `forest-next` | [PAT-03](08-patterning.md) | Melanjutkan dua elemen sesudah ABAB. | Awal berhenti pada unit lengkap; belum melanjutkan unit parsial. |
| `forest-gap` | [PAT-03](08-patterning.md) | Dua celah di tengah pola AB. | Belum membuktikan anak mengidentifikasi unit minimal. |
| `forest-size` | [PAT-03](08-patterning.md) | AB menurut kecil/besar daun. | Mengganti atribut dalam soal belum menjadi transfer oleh anak. |
| `forest-transfer` | [PAT-03](08-patterning.md), [PAT-05](08-patterning.md) | Model lingkaran/persegi ditransfer ke daun/lentera; AB atau BA sah. | Transfer lintas bahan tersedia; identifikasi unit minimal belum menjadi tindakan tersendiri. |
| `forest-pairs` | [PAT-03](08-patterning.md), [PAT-04](08-patterning.md) | AB awal atau ABB setelah readiness. | Pemetaan PAT-04 bersyarat variasi ABB yang benar-benar dimainkan. |
| `forest-double` | [PAT-03](08-patterning.md), [PAT-04](08-patterning.md) | AB awal atau AAB setelah readiness. | Pemetaan PAT-04 bersyarat variasi AAB. |
| `forest-three` | [PAT-03](08-patterning.md), [PAT-04](08-patterning.md) | AB awal atau ABC setelah readiness. | Pemetaan PAT-04 bersyarat variasi ABC; belum AABC. |
| `forest-repair` | [PAT-03](08-patterning.md) | Memperbaiki penyimpangan AB jamur. | Belum perbaikan beberapa unit kompleks. |
| `forest-colors` | [DAT-03](20-classification-data.md), [DAT-04](20-classification-data.md) | Daun/jamur masuk kategori warna. | Belum memilih aturan sendiri atau mengumpulkan data kasus. |
| `forest-types` | [DAT-03](20-classification-data.md), [DAT-04](20-classification-data.md), [DAT-05](20-classification-data.md) | Koleksi empat daun/jamur dipilah warna lalu jenis; posisi tetap saat aturan berubah. | Reklasifikasi koleksi yang sama tersedia; pemilihan aturan bebas dan representasi kasus belum tersedia. |
| `forest-create` | [PAT-03](08-patterning.md) | Unit dua token bebas diulang tiga kali. | AA/BB diterima; belum membuat unit kompleks atau transfer. |
| `shape-shadows` | [S2D-02](09-2d-shapes.md), [S2D-04](09-2d-shapes.md) | Bentuk dicocokkan dengan target jenis/orientasi. | Jenis, orientasi, varian, refleksi dan ukuran token diperiksa; penamaan serta variasi seluruh keluarga bentuk belum tersedia. |
| `shape-sizes` | [DAT-03](20-classification-data.md), [DAT-04](20-classification-data.md) | Bentuk dipilah kecil/besar. | Bukan LEN atau ARE: tidak mengukur panjang atau luas. |
| `shape-turned` | [S2D-04](09-2d-shapes.md), [S2D-05](09-2d-shapes.md) | Segitiga tidak simetris/lebar dan persegi dipilah meski orientasi/warna berubah. | Variasi segitiga tersedia; belum semua keluarga persegi panjang, penjelasan sisi/sudut, atau substitusi. |
| `shape-house` | [C2D-02](10-composing-2d-shapes.md) | Potongan ke siluet atap, badan, pintu. | Slot tiap potongan sudah ditentukan; bukan konstruksi dari sisi atau Shape Composer. |
| `shape-boat` | [C2D-02](10-composing-2d-shapes.md) | Badan trapesium dan dua layar siku-siku membentuk perahu; tiang/air dekoratif. | Orientasi token sudah tersedia; anak tidak wajib merencanakan rotasi. |
| `shape-rocket` | [C2D-02](10-composing-2d-shapes.md), [DIS-03](11-disembedding-shapes.md) | Bagian roket termasuk jendela di dalam badan. | DIS-03 hanya konteks containment; tidak ada pencarian bentuk tersembunyi. |
| `shape-turn` | [VIS-03](14-spatial-visualization.md), [ANG-03](19-angle-turn.md) | Panah diputar per seperempat putaran sesuai model. | Meniru orientasi tidak membuktikan prediksi mental atau pemahaman sudut. |
| `shape-sails` | [VIS-03](14-spatial-visualization.md), [ANG-03](19-angle-turn.md) | Segitiga diputar sesuai orientasi target. | Belum flip, sudut kontinu, atau perbandingan besar sudut. |
| `shape-mirror` | [VIS-04](14-spatial-visualization.md), [VIS-05](14-spatial-visualization.md) | Urutan dan geometri daun/segitiga asimetris dipantulkan. | Refleksi geometri tersedia; belum prediksi mental atau sumbu miring. |
| `shape-window` | [VIS-04](14-spatial-visualization.md), [VIS-05](14-spatial-visualization.md) | Empat posisi mengikuti pantulan geometri dan urutan; termasuk daun yang diputar. | Transformasi bentuk tersedia; sumbu miring dan penjelasan mental belum diamati. |
| `shape-floor` | [C2D-05](10-composing-2d-shapes.md), [ARE-03](17-area.md), [ARE-04](17-area.md) | Tiga domino menutup grid 3×2 tanpa overlap. | Belum menghitung satuan persegi, membuat luas tujuan, atau prediksi komposisi. |
| `shape-bridge` | [C2D-05](10-composing-2d-shapes.md), [ARE-03](17-area.md), [ARE-04](17-area.md), [VIS-03](14-spatial-visualization.md) | Dua balok siku menutup grid 3×2; dapat diputar. | Masih 2D, bukan C3D; ukuran bidang dan balok tetap. |
| `tower-path` | [ORI-05](15-spatial-orientation.md), [ORI-06](15-spatial-orientation.md) | Lumi bergerak pada petak 3×3 menghindari batu. | Dukungan orientasi lokal saja; tidak mengubah sudut pandang atau menghubungkan peta dengan dunia. |
| `tower-detour` | [ORI-05](15-spatial-orientation.md), [ORI-06](15-spatial-orientation.md) | Jalur 4×3 dengan rintangan, boleh kembali. | Tidak menjadi bukti Map User atau koordinat. |
| `tower-key` | [ORI-05](15-spatial-orientation.md), [ORI-06](15-spatial-orientation.md) | Kunci harus dicapai sebelum pintu pada grid 4×3. | Konteks planning dua tujuan, bukan level LT baru. |
| `tower-even` | [CMP-07](03-comparing-number.md), [COM-03](05-composing-numbers.md) | Empat bintang berat satu dibagi seimbang 2/2. | Kesetaraan beban rekaan; tidak otomatis membuktikan perbandingan berat fisik. |
| `tower-weights` | [COM-04](05-composing-numbers.md), [ADD-03](04-adding-subtracting.md) | Bobot titik 1 dan 2 seimbang dengan 3. | Satu kombinasi; belum semua komposisi sampai 5 atau kemampuan menyebut hasil. |
| `tower-lights` | [CNT-08](01-counting.md), [COM-04](05-composing-numbers.md), [ADD-05](04-adding-subtracting.md) | Lentera bobot 1/1/2 memenuhi target tiga, sisa di rak kanan. | Target rekaan tetap; tidak membuktikan counting atau subitizing. |
| `tower-before` | PS-02 / PS-03, tanpa padanan LT langsung | Tiga bentuk, satu hubungan sebelum, beberapa urutan valid. | Problem solving NRICH/produk; tidak disamakan dengan Ordinal Counter LT. |
| `tower-between` | PS-02 / PS-03, tanpa padanan LT langsung | Tiga bentuk memenuhi dua hubungan sebelum. | Relasi urutan, bukan tugas posisi terhadap landmark atau level LT khusus. |
| `tower-chain` | PS-02 / PS-03, tanpa padanan LT langsung | Empat bentuk memenuhi tiga hubungan berantai. | Tidak ada trajectory logika tersendiri dalam PDF; gunakan PS-02. |
| `tower-grid` | PS-02 / PS-03, tanpa padanan LT langsung | Grid Latin 2×2; kategori tidak berulang per baris/kolom. | Bukan Data Classifier atau pembacaan koordinat; gunakan PS-03. |
| `tower-grid-three` | PS-02 / PS-03, tanpa padanan LT langsung | Grid Latin 2×2 awal, 3×3 setelah readiness. | Tambahan ukuran bukan bukti aljabar; gunakan PS-03/PS-04. |
| `tower-beacon` | [ORI-05](15-spatial-orientation.md), [ORI-06](15-spatial-orientation.md) | Grid 4×4 dengan kunci, pintu, dan rintangan. | Dukungan perjalanan lokal dan planning; Map User belum tersedia. |

## Penguatan dan kebutuhan berikutnya

Lima celah mekanik paket peta 1 sudah diperkuat: produksi dari surplus, transfer AB lintas bahan, variasi segitiga, refleksi geometri, dan reklasifikasi koleksi yang sama. [Kontrak kegiatan, migrasi, acceptance dan bukti](24-map-1-reinforcement.md).

Kebutuhan berikutnya tetap mencakup pengamatan kardinalitas/subitizing, unit minimal dan unit parsial, sifat/substitusi bentuk, representasi kasus/data, serta landmark/peta-ke-dunia. Pecahan, 3D, panjang dan volume direncanakan pada peta 2; sharing, shape-sizes dan shape-bridge tidak menjadi bukti pengganti. Kelima perbaikan tidak berarti seluruh goal section sudah tercakup.

## Kesiapan sekarang

[readiness](../src/pedagogy/mastery/readiness.ts) memakai dua replay `patterns` tanpa hint dan variasi berbeda; ini bukan bukti verbal atau strategi. Readiness wilayah baru berada dalam [Garden](../src/world/regions/Garden.tsx); dua misi berbeda tanpa bantuan dalam wilayah dapat membuka variasi kompleks, sehingga bukti sort bisa bercampur dengan pola. PRD F-06 meminta kesiapan per goal/per konsep; implementasi lama belum diubah.

[Progress](../src/world/progression/store.ts) menyimpan completion dan paling banyak 200 evidence berisi mission, attempts, hints, solutions, variant, completed. Belum ada level ID, jenis observasi orang tua, atau sumber bukti. Jangan mengonversi completion lama menjadi mastery; requirements migrasi ada pada F-07.

## NRICH pada misi sekarang

- Pola taman/hutan: Pattern Making; unit berulang, perbaikan, kreasi, pembicaraan aturan.
- Counting/orders/composition: Counting Collections, Show Me, Hidden Jewels; strategi dan representasi jumlah.
- Sorting dan siluet: Packing, Tidying; pemilahan dan kecocokan.
- Sharing: The Doorbell Rang; pemeriksaan bagian adil. Komposisi bebas tetap membolehkan bagian kosong.
- Tower weights: Presents sebagai saran pemeriksaan berat nyata, bukan bukti bahwa bobot titik adalah pengukuran fisik.
- Tower order: Calendar Muddle sebagai jembatan aktivitas sebelum/sesudah yang akrab, bukan klaim equivalence dengan relasi abstrak puzzle.
- Shape tiling/assembly: Packing dan Wrapping Parcels sebagai konteks fisik, bukan simulasi 3D yang sudah tersedia.

Semua pemetaan adalah interpretasi produk. Efektivitas pada anak usia 3–7 dan kenyamanan tablet fisik belum terverifikasi.
