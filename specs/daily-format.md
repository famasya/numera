# Numera — Daily Session Format Spec

_Bite-size math mental model learning · 5–7 menit/hari · Telegram & Web App_

---

## Arsitektur Satu Sesi Harian

Setiap sesi terdiri dari **4 blok berurutan**, total ~5–7 menit:

```
HOOK (30 detik)  →  CONCEPT (2 menit)  →  REAL WORLD (1.5 menit)  →  QUIZ (1–2 menit)
```

| Blok | Nama           | Durasi   | Tujuan                                                           |
| ---- | -------------- | -------- | ---------------------------------------------------------------- |
| 1    | **Hook**       | 30 dtk   | Pancing rasa ingin tahu dengan pertanyaan atau fakta mengejutkan |
| 2    | **Concept**    | ~2 mnt   | Satu ide inti — tidak lebih dari satu                            |
| 3    | **Real World** | ~1.5 mnt | Tunjukkan konsep itu hidup di mana dalam kehidupan mereka        |
| 4    | **Quiz**       | 1–2 mnt  | 1–2 soal untuk mengunci pemahaman, bukan menguji hafalan         |

> **Prinsip:** Satu sesi = satu insight. Lebih baik paham satu hal dalam daripada tahu lima hal di permukaan.

---

## Format Per Blok

### Blok 1 — Hook

**Tujuan:** Buat user berpikir _"hm, iya ya..."_ atau _"lho, kenapa bisa begitu?"_ sebelum penjelasan datang.

**Format Telegram:**

```
🔢 *Numera · Hari 12*

Kalau kamu menabung Rp1.000/hari selama 30 tahun,
total tabunganmu adalah Rp10,9 juta.

Tapi kalau kamu menabung Rp1.000/hari dan
bunganya 10%/tahun... hasilnya Rp2,1 *miliar*.

Kenapa bedanya bisa 200x lipat? 👇
```

**Aturan Hook:**

- Maksimal 3–4 baris
- Selalu ada angka konkret — bukan konsep abstrak
- Akhiri dengan pertanyaan atau cliffhanger, jangan langsung jawab

---

### Blok 2 — Concept

**Tujuan:** Jelaskan _satu_ ide inti dengan bahasa paling sederhana yang masih akurat.

**Format Telegram:**

```
💡 *Konsep: Pertumbuhan Eksponensial*

Pertumbuhan linear = setiap periode, kamu tambah jumlah yang sama.
Pertumbuhan eksponensial = setiap periode, kamu *kalikan* jumlah yang sama.

Rp1.000 + Rp1.000 + Rp1.000... → linear
Rp1.000 × 1,1 × 1,1 × 1,1... → eksponensial

Perbedaannya kecil di awal.
Tapi setelah 30 tahun? 200x lipat.

Ini disebut *compound effect* — dan ia bekerja untuk bunga bank,
pertumbuhan followers, penyebaran virus, dan banyak lagi.
```

**Aturan Concept:**

- Maksimal 6–8 baris
- Gunakan analogi sebelum istilah teknis
- Satu konsep, satu sudut pandang — jangan cabang ke konsep lain
- Boleh ada formula sederhana, tapi opsional dan selalu disertai penjelasan verbal

---

### Blok 3 — Real World

**Tujuan:** Tancapkan konsep ke konteks yang sudah user kenal — bukan contoh tekstbook.

**Format Telegram:**

```
🌍 *Ini ada di sekitarmu*

→ *Investasi reksa dana* — return 12%/tahun selama 20 tahun mengubah
  Rp500rb/bulan menjadi Rp499 juta. Bukan Rp120 juta.

→ *Followers medsos* — akun yang tumbuh 2% per hari akan punya
  followers 2x lipat dalam 35 hari. Bukan 50 hari.

→ *Pandemi* — kenapa kasus COVID meledak tiba-tiba setelah "lambat"
  selama 2 minggu? Karena eksponensial selalu terlihat lambat... sampai tidak.
```

**Aturan Real World:**

- 2–3 contoh, cukup
- Pilih konteks yang relevan untuk audiens Indonesia (keuangan, medsos, bisnis, kesehatan)
- Angka konkret selalu lebih kuat dari analogi umum
- Format: `→ *konteks* — penjelasan singkat`

---

### Blok 4 — Quiz

**Tujuan:** Bukan ujian — ini _retrieval practice_ untuk mengunci memori. User harus berpikir, bukan mengingat rumus.

**Format Telegram — Multiple Choice:**

```
🧩 *Quick Check*

Sebuah kota punya 1 juta penduduk.
Setiap tahun penduduknya bertambah 3%.

Setelah 10 tahun, kira-kira berapa penduduknya?

A) 1,3 juta
B) 1,34 juta
C) 2,1 juta  ← eksponensial terasa lebih besar dari dugaan
D) 1,03 juta

[ A ]  [ B ]  [ C ]  [ D ]
```

**Format setelah jawab — Feedback:**

```
✅ *Jawaban: B — 1,34 juta*

Cara pikirnya: 1.000.000 × (1,03)^10 ≈ 1.344.000

Intuisi yang sering salah: orang jawab A (1,3 juta)
karena berpikir 3% × 10 = 30% → linear thinking.

Kenyataannya 34% karena setiap tahun
kamu mendapat bunga *dari bunga sebelumnya*.

Ini bedanya linear vs eksponensial. 🎯
```

**Aturan Quiz:**

- 1 soal utama, boleh 1 soal bonus (opsional, untuk yang mau lebih)
- Soal selalu berbasis estimasi atau pemahaman — bukan perhitungan eksak
- Feedback harus menjelaskan _mengapa jawaban salah itu salah_ — bukan hanya mengumumkan jawaban benar
- Hindari soal yang bisa dijawab tanpa memahami konsep (pure calculation)

---

## Tipe Soal Quiz

| Tipe                    | Kapan Dipakai                    | Contoh                                        |
| ----------------------- | -------------------------------- | --------------------------------------------- |
| **Multiple choice**     | Konsep baru, hari pertama topik  | 4 pilihan, 1 benar                            |
| **Estimasi**            | Setelah 2–3 sesi topik yang sama | "Kira-kira berapa...?" tanpa pilihan          |
| **True/False + alasan** | Miskonsepsi umum                 | "Benar/Salah: korelasi = kausalitas"          |
| **Apply it**            | Akhir sebuah fase                | "Lihat grafik ini — apa yang bisa kamu baca?" |

---

## Struktur Mingguan (5 hari aktif)

```
Senin    → Concept Day    : Konsep baru diperkenalkan
Selasa   → Deepen Day     : Nuansa dan edge case dari konsep yang sama
Rabu     → Real World Day : 3 aplikasi nyata, quiz berbasis konteks
Kamis    → Challenge Day  : Soal estimasi / problem solving tanpa panduan
Jumat    → Reflect Day    : Ringkasan minggu + satu pertanyaan refleksi terbuka
```

**Sabtu–Minggu:** Opsional — "Weekend Bonus" berupa fun fact atau paradox matematika (tidak ada quiz, pure curiosity).

---

## Sistem Streak & Progression

```
Streak harian   → Notifikasi pengingat, visual progress
XP per sesi     → Concept: 10 XP · Real World: 5 XP · Quiz benar: 15 XP · Bonus: 5 XP
Level fase      → Setiap 30 sesi = naik fase, dapat "Mental Model Badge"
Weekly recap    → Jumat: ringkasan konsep minggu ini dalam 3 kalimat
```

---

## Contoh Satu Sesi Lengkap (Siap Kirim di Telegram)

> **Day 47 · Fase 3: Statistik · Topik: Mean vs Median**

---

**HOOK**

```
🔢 Numera · Hari 47

Rata-rata gaji karyawan di sebuah perusahaan adalah Rp15 juta/bulan.

Tapi 9 dari 10 karyawan digaji Rp5 juta.
Satu orang — sang CEO — digaji Rp105 juta.

Apakah "rata-rata Rp15 juta" itu jujur? 🤔
```

**CONCEPT**

```
💡 Mean vs Median

*Mean* (rata-rata) = jumlah semua ÷ banyak data
*Median* = nilai tengah kalau data diurutkan

Mean sangat sensitif terhadap *outlier* — satu angka ekstrem
bisa menarik mean jauh dari "tipikal".

Median lebih tahan: ia tidak peduli seberapa ekstrem outlier-nya,
ia hanya peduli posisi tengah.

Itulah kenapa laporan pendapatan nasional yang jujur
selalu pakai median, bukan mean.
```

**REAL WORLD**

```
🌍 Ini ada di sekitarmu

→ *Harga properti* — "rata-rata harga rumah di Jakarta" selalu
  lebih tinggi dari yang kebanyakan orang mampu beli.
  Karena beberapa rumah mewah mendongkrak mean.

→ *Rapor sekolah* — nilai rata-rata kelas bisa terlihat bagus
  padahal sebagian besar siswa di bawah rata-rata,
  karena beberapa siswa sangat tinggi nilainya.

→ *Review produk* — rating 4,2 bintang bisa berarti
  50% kasih 5 bintang dan 30% kasih 1 bintang.
  Mean menyembunyikan polarisasi ini.
```

**QUIZ**

```
🧩 Quick Check

Sebuah RT punya 10 rumah tangga dengan penghasilan bulanan:
5 rumah: Rp3 juta · 4 rumah: Rp5 juta · 1 rumah: Rp42 juta

Mana yang lebih akurat menggambarkan penghasilan "tipikal" warga RT ini?

A) Mean — karena menghitung semua data
B) Median — karena tidak dipengaruhi outlier
C) Keduanya sama akuratnya
D) Tidak bisa ditentukan tanpa info lebih

[ A ]  [ B ]  [ C ]  [ D ]
```

**FEEDBACK**

```
✅ Jawaban: B — Median

Mean RT ini = (5×3 + 4×5 + 42) ÷ 10 = Rp7,7 juta
Tapi 9 dari 10 rumah tangga punya penghasilan ≤ Rp5 juta.

Median = Rp5 juta → jauh lebih merepresentasikan kondisi nyata.

*Kapan pakai mean?* Kalau datamu simetris dan tidak ada outlier ekstrem —
misalnya tinggi badan, suhu harian.

*Kapan pakai median?* Pendapatan, harga properti, waktu pengiriman —
apapun yang berpotensi punya outlier besar. 🎯
```

---

## Panduan Tone of Voice

| ✅ Lakukan                                    | ❌ Hindari                                |
| --------------------------------------------- | ----------------------------------------- |
| Bicara seperti teman yang pintar              | Bicara seperti guru yang menggurui        |
| Mulai dari yang sudah user tahu               | Mulai dari definisi tekstbook             |
| Akui kalau konsep itu memang counterintuitive | Pura-pura semua konsep "mudah dan simpel" |
| Gunakan "kamu" bukan "Anda"                   | Bahasa formal yang menciptakan jarak      |
| Tunjukkan angka konkret Indonesia             | Contoh dolar atau konteks luar negeri     |
| Jelaskan _kenapa_ jawaban salah itu salah     | Hanya umumkan jawaban benar               |

---

_Format ini dirancang untuk Telegram Bot (Markdown mode) dan Web App dengan rendering yang sama._
_Setiap blok dipisah dengan jeda 1–2 detik untuk simulasi "unboxing" konten secara bertahap._
