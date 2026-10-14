# 🌊 Website Ucapan Selamat Ulang Tahun Bertema Samudera (Ocean Birthday Wishes)

Website ucapan selamat ulang tahun bertema **Ocean / Samudera** yang modern, elegan, kaya estetika (*glassmorphism*, bioluminesensi bawah laut, animasi partikel gelembung, dan transisi sapuan ombak lautan) serta **100% responsif** di seluruh perangkat (smartphone, tablet, laptop, dan desktop).

Dibuat menggunakan teknologi web murni: **HTML5**, **CSS3 (Vanilla)**, dan **JavaScript**.

---

## ✨ Fitur-Fitur & Pembaruan

1. **Cover / Landing Page Lautan**:
   - Ucapan megah *"Happy Birthday Adinda Cantik"* dengan mutiara bersinar dan tipografi elegan (*Playfair Display*, *Plus Jakarta Sans*, & *Caveat*).
   - Animasi botol kaca terapung (*message in a bottle*) berisikan gulungan surat rahasia.
   - Tombol utama **"Buka Surat Dari Lautan 🌊"** untuk membuka halaman utama.
   - Bersih dan elegan tanpa tombol edit nama.

2. **Animasi Transisi Sapuan Gelombang Laut (*Ocean Wave Surge Transition*)**:
   - Saat tombol *"Buka Surat"* diklik, gulungan ombak samudera naik menyapu layar ke kedalaman laut biru, lalu perlahan surut untuk membuka Halaman Utama (*Main Page*).

3. **Halaman Utama (*Main Page*)**:
   - **🌸 Pemutar Musik Lagu "Sakura" (Rossa)**:
     - Tombol pemutar musik hanya tampil di Halaman Utama (tidak ada di landing page).
     - Tombol ini **khusus mengatur pemutaran lagu Sakura milik penyanyi Rossa** (mendukung file lokal `sakura-rossa.mp3` dan streaming resmi YouTube di latar belakang).
     - **Efek Suara Notifikasi Lainnya Tetap Selalu Aktif**: Suara notifikasi (seperti saat menekan jawaban benar, salah, perayaan kasih sayang di Card Quiz, letusan gelembung, dan ombak) selalu aktif dan **tidak terpengaruh** oleh tombol melodi musik.
   - **💌 Kartu Ucapan Samudera (*Birthday Wish Card*)**: Desain kartu kaca (*glassmorphism*) berstempel lilin laut dengan kata-kata puitis, doa tulus, dan harapan terbaik.
   - **📸 Galeri Foto Abstrak (16 Foto Memori)**: 16 foto estetik kenangan tersusun dengan tata letak abstrak bergaya kolase polaroid (kemiringan sudut bergelombang dinamis, stiker selotip transparan, efek 3D tilt saat kursor melintas, serta modal pratinjau saat foto diklik).
   - **🎮 Kuis Kasih Sayang Interaktif**:
     - Menampilkan soal dengan pilihan ganda **A**, **B**, dan **C**.
     - **Jika Jawaban Salah**:
       - Border kartu soal dan tombol pilihan seketika berubah warna menjadi **MERAH** disertai efek getar (*shake*) dan suara notifikasi salah.
       - **Tombol "Lihat Jawaban Benar"**: **Hanya muncul ketika user memilih jawaban yang salah**.
     - **Animasi Perayaan Kasih Sayang**: Ketika tombol *"Lihat Jawaban Benar"* diklik, muncul kartu perayaan bertabur partikel hati cinta (💖, 💕, 🌸, 🫧), border berubah menjadi aura merah muda yang hangat, dan jawaban yang benar diungkapkan dengan pesan penuh kasih sayang.
     - **Jika Jawaban Benar**:
       - Border kartu soal dan jawaban langsung berubah menjadi **HIJAU** berkilau disertai suara sukacita.
       - Tombol "Lihat Jawaban Benar" **TIDAK** muncul.
     - **Tombol "Ulangi Kuis Dari Awal"**:
       - Saat kuis selesai, tombol ini akan me-redirect pengguna **kembali ke Soal Pertama** (tanpa reload halaman).
   - **💌 Tombol "Tutup Surat"**: Terletak di bagian paling bawah halaman. Ketika ditekan, animasi sapuan gelombang lautan kembali muncul dan mengantarkan pengguna kembali ke Landing Page.

---

## 🚀 Cara Menjalankan & Membuka

Cukup buka file [index.html](file:///d:/HappyTwenty/index.html) langsung di browser apa pun (Google Chrome, Edge, Safari, Firefox, dll), atau gunakan server lokal:

```bash
# Menggunakan Python
python -m http.server 3000

# Atau menggunakan Node.js npx serve
npx serve .
```

Kemudian buka alamat: `http://localhost:3000`

---

## 🎵 Lagu Sakura - Rossa

- **Mode Otomatis / Online**: Lagu *Sakura* oleh Rossa terintegrasi langsung via YouTube Audio Player resmi.
- **Mode File Lokal (Opsional)**: Anda juga bisa menaruh file MP3 lagu tersebut dengan nama `sakura-rossa.mp3` langsung di folder `d:\HappyTwenty` untuk pemutaran lokal secara instan.
