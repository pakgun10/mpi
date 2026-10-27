# MPI Matematika SMP

Media Pembelajaran Interaktif Matematika SMP Kelas 7, 8, dan 9.
Kurikulum Merdeka, pendekatan Pembelajaran Mendalam (Memahami – Mengaplikasi – Merefleksi).
Sumber ATP: ATP Matematika Fase D, MGMP Matematika SMP Kabupaten Lampung Tengah, 2026/2027.

## Menjalankan di GitHub Pages

- Branch: `main`, folder: root (`/`).
- Sertakan `.nojekyll` di root supaya Pages tidak memproses situs sebagai Jekyll.
- Alamat default: `https://pakgun10.github.io/mpi/`

## Struktur

- `index.html` — portal (pilih kelas).
- `kelas-7/`, `kelas-8/`, `kelas-9/` — halaman kelas dan semester.
- `kelas-X/semester-Y/<nama-materi>/index.html` — satu MPI per materi.
- `atp/` — ATP Fase D per kelas, plus tautan unduh berkas asli.
- `assets/css/style.css` — CSS responsif bersama (HP, tablet, laptop, PID/TV).
- `assets/js/common.js` — JS bersama: menyuntikkan footer global dan tombol pembahasan.
- `ATP_Matematika_Fase_D_MGMP-1.docx` — berkas asli MGMP.

## Footer global

Footer di semua halaman adalah:

```
@mpi-mtk-smp-pakgun-2026
```

Teks ini juga ditulis di tiap halaman sebagai cadangan, dan `assets/js/common.js`
menulis ulang teks yang sama saat halaman dimuat. Mengubah footer berarti
mengubah teks tersebut di `common.js` dan di halaman-halaman yang ada.

## Menambah MPI baru

1. Salin folder `kelas-7/semester-1/bilangan-bulat/` ke semester yang sesuai,
   ganti nama foldernya menjadi slug materi baru.
2. Ganti judul, TP, isi tahap Memahami–Mengaplikasi–Merefleksi, dan skrip
   interaktif khas materi itu. Pertahankan `id="mpi-footer"` dan pemuatan
   `assets/js/common.js` dengan jumlah `../` yang sesuai kedalaman folder.
3. Tambahkan kartu materi di `index.html` semesternya, dan ubah statusnya
   dari “Segera Hadir” menjadi tautan aktif.
4. Perbarui tabel ATP bila ada koreksi dokumen, dan catat koreksinya di
   halaman `atp/index.html`.

## Koreksi dokumen yang sudah diterapkan

1. Garis dan Sudut menjadi bab sendiri di Kelas 7 Semester 2.
2. Peluang Kelas 9 Semester 2 memuat D.5 dan D.6 (16 JP).
3. Total distribusi Kelas 8 Semester 2 adalah 54 JP.
