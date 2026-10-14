# 🌊 Website Ucapan Selamat Ulang Tahun Bertema Samudera (Ocean Birthday Wishes)

Website ucapan selamat ulang tahun bertema **Ocean / Samudera** yang modern, elegan, kaya estetika (*glassmorphism*, bioluminesensi bawah laut, animasi partikel gelembung, dan transisi sapuan ombak lautan) serta **100% responsif** di seluruh perangkat (smartphone, tablet, laptop, dan desktop).

Dibuat menggunakan teknologi web murni: **HTML5**, **CSS3 (Vanilla)**, dan **JavaScript**.

---

## ✨ Fitur-Fitur Utama

1. **Cover / Landing Page Lautan**:
   - Ucapan megah *"Happy Birthday [Nama]"* dengan mutiara bersinar dan tipografi elegan (*Playfair Display*, *Plus Jakarta Sans*, & *Caveat*).
   - Animasi botol kaca terapung (*message in a bottle*) berisikan gulungan surat rahasia.
   - Tombol utama **"Buka Surat Dari Lautan 🌊"** untuk memulai petualangan.
   - Tombol cepat **"Ganti Nama"** (atau melalui URL parameter `?name=NamaKamu`) untuk menyesuaikan nama penerima ulang tahun secara instan.
   - Ambient Melodi Lautan (Synthesizer Web Audio API murni: deburan ombak lembut & denting nada manis tanpa perlu download MP3 eksternal).

2. **Animasi Transisi Sapuan Gelombang Laut (*Ocean Wave Surge Transition*)**:
   - Saat tombol *"Buka Surat"* diklik, gulungan ombak samudera naik menyapu layar ke kedalaman laut biru, lalu perlahan surut untuk membuka Halaman Utama (*Main Page*).

3. **Halaman Utama (*Main Page*)**:
   - **💌 Kartu Ucapan Samudera (*Birthday Wish Card*)**: Desain kartu kaca (*glassmorphism*) berstempel lilin laut dengan kata-kata puitis, doa tulus, dan harapan terbaik.
   - **📸 Galeri Foto Abstrak (16 Foto Memori)**: 16 foto estetik kenangan tersusun dengan tata letak abstrak bergaya kolase polaroid (kemiringan sudut bergelombang dinamis, stiker selotip transparan, efek 3D tilt saat kursor melintas, serta modal pratinjau saat foto diklik).
   - **🎮 Kuis Kasih Sayang Interaktif**:
     - Menampilkan soal dengan pilihan ganda **A**, **B**, dan **C**.
     - **Jika Jawaban Salah**: Border kartu soal dan tombol pilihan seketika berubah warna menjadi **MERAH** disertai efek getar (*shake*).
     - **Tombol "Lihat Jawaban Benar"**: Otomatis muncul ketika pilihan salah.
     - **Animasi Perayaan Kasih Sayang**: Ketika tombol *"Lihat Jawaban Benar"* diklik, muncul kartu perayaan bertabur partikel hati cinta (💖, 💕, 🌸, 🫧), border berubah menjadi aura merah muda yang hangat, dan jawaban yang benar diungkapkan dengan pesan penuh kasih sayang.
     - **Jika Jawaban Benar**: Border kartu soal dan jawaban langsung berubah menjadi **HIJAU** berkilau dengan efek sukacita.
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

## 🎨 Kustomisasi Mudah

1. **Mengganti Nama Penerima**:
   - Cukup klik tombol **"Ganti Nama"** di pojok kiri atas pada website, atau
   - Buka dengan tautan URL: `http://localhost:3000/?name=NamaPacarAtauSahabat&milestone=Happy+20th+Birthday`
2. **Mengganti Foto Galeri**:
   - Buka file [script.js](file:///d:/HappyTwenty/script.js)
   - Cari array `GALLERY_PHOTOS` dan ubah `url`, `title`, dan `caption` sesuai kenangan foto asli milik Anda.
3. **Mengganti Pertanyaan Kuis**:
   - Pada file [script.js](file:///d:/HappyTwenty/script.js), cari array `QUIZ_QUESTIONS` untuk menambahkan atau mengubah pertanyaan dan catatan kasih sayangnya.
