# Tinjauan gerak — 10 Oktober 2026

Gerak interaktif memakai Motion; orientasi, posisi logis dan jawaban tetap deterministik. `src/styles/movement.ts` menyimpan token spring, durasi putaran, ambang seret dan transisi instan. Token dekoratif CSS ada di `tokens.css`.

| Gerak | Hasil tinjauan dan perubahan |
| --- | --- |
| Timbangan | Model lengan sama panjang: sisi lebih berat turun, berat sama mendatar. Jawaban tidak berasal dari animasi. Motion spring, kemiringan dibatasi. |
| Panah dan layar | Putaran seperempat searah jarum jam. Peralihan orientasi 3 → 0 berlanjut ke 360°, bukan berbalik 270°. |
| Balok lantai | Animasi putaran memakai mekanik yang sama. Gambar balok tetap menunjukkan orientasi tersimpan setelah placement/reload. Gambar dipusatkan sebelum diputar. |
| Seret semua manipulatif | Benda mengikuti pointer langsung. Pelepasan memakai spring teredam untuk kembali bila benda tetap berada di tempat asal. Pointer cancel/lost capture membersihkan state; pointer tambahan/tombol mouse lain diabaikan. |
| Penempatan balok melalui seret | Orientasi berasal dari balok yang diseret, bukan balok lain yang sedang dipilih. Validasi batas dan overlap tetap berlaku. |
| Pantulan perayaan Lumi | Dua lompatan ringan lalu berhenti; tidak lagi berulang terus menerus. |
| Bunga tertanam | Gerak ayun dekoratif diperkecil. Tidak memindahkan hitbox. |
| Petunjuk dan salah susun | Glow dan wiggle lembut tetap berupa bantuan visual; tidak mengubah jawaban atau memindahkan target. |
| Peta, awan, bloom, transisi scene | Tetap CSS untuk atmosfer. Pan peta mengikuti input dan tidak memakai momentum fisika tambahan. |
| Reduced motion | Motion menggunakan transisi instan; media query mematikan animasi/transisi CSS. Belum diuji dengan pengaturan OS aktif pada sesi ini. |

## Bukti

97 tes matematika/progres/arah gerak lulus; typecheck dan produksi build lulus. Chrome memverifikasi panah berputar hingga 360° dan orientasi balok 90° tetap setelah penempatan serta refresh. Tidak ada error runtime pada alur tersebut. Timbangan sudah diuji pada tablet viewport 1024×768 sebelumnya tanpa scroll vertikal.

## Batas

Ini bukan simulasi benda bebas dengan gravitasi dan tumbukan. Tidak ada kebutuhan tersebut pada kegiatan sekarang. Interaksi seret ditinjau pada kode bersama; sesi browser ini menguji penempatan melalui tap, bukan gesture drag fisik. Belum ada uji tablet fisik/anak. Jangan menyebut hasil ini sebagai validasi seluruh 48 misi.
