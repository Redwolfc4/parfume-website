# Aura Parfume

Aura Parfume adalah aplikasi web e-commerce parfum yang dibangun menggunakan React, Vite, dan Contentful sebagai Headless CMS.

## Fitur Utama

- **Katalog Produk:** Menampilkan daftar parfum langsung dari Contentful.
- **Detail Produk:** Melihat informasi lengkap parfum (harga, kategori, volume, dll).
- **Keranjang & Wishlist:** Menyimpan parfum ke keranjang atau wishlist (menggunakan Zustand untuk penyimpanan state lokal).
- **Featured Toggle:** Fitur "Like" yang dapat mengubah status produk di Contentful menggunakan interaksi API langsung.

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + Lucide React (untuk ikon)
- **State Management:** Zustand (Global State) & TanStack React Query (Server State)
- **CMS (Content Management System):** Contentful
- **Routing:** React Router DOM

## ⚙️ Persyaratan (Prerequisites)

Pastikan Anda telah menginstal ini di perangkat Anda:

- [Node.js](https://nodejs.org/) (direkomendasikan versi 18 ke atas)
- [pnpm](https://pnpm.io/) (direkomendasikan), atau npm / yarn
- Akun [Contentful](https://www.contentful.com/)

## 🚀 Instalasi & Menjalankan Aplikasi di Lokal

1. **Clone repository ini:**

   ```bash
   git clone <URL_REPO_ANDA>
   cd parfume-website
   ```

2. **Install dependensi:**

   ```bash
   pnpm install
   ```

3. **Konfigurasi Environment Variables (Kredensial):**
   Buat file bernama `.env` di direktori root aplikasi (di sebelah file `package.json`).
   **⚠️ PENTING: JANGAN PERNAH MENG-COMMIT FILE `.env` KE DALAM GIT! Pastikan file ini ada di dalam `.gitignore`.**

   Isi file `.env` dengan format berikut, lalu ganti teks `<ISI_...>` dengan kredensial dari dashboard Contentful Anda (di menu **Settings > API keys**):

   ```env
   VITE_CONTENTFUL_SPACE_ID=<ISI_SPACE_ID_ANDA>
   VITE_CONTENTFUL_ACCESS_TOKEN=<ISI_CONTENT_DELIVERY_API_ACCESS_TOKEN_ANDA>
   VITE_CONTENTFUL_HOST=cdn.contentful.com
   ```

4. **Jalankan Development Server:**
   ```bash
   pnpm dev
   ```
   Aplikasi akan berjalan di browser pada `http://localhost:5173`.

## 📦 Script yang Tersedia

- `pnpm dev` : Menjalankan server development dengan hot-reload.
- `pnpm build` : Membangun aplikasi TypeScript dan Vite untuk keperluan _production_ ke folder `dist`.
- `pnpm preview` : Menjalankan preview lokal dari hasil build _production_.
- `pnpm lint` : Menjalankan ESLint untuk mengecek standar kode program.

## 📂 Struktur Direktori Utama (`/src`)

- `components/` : Komponen antarmuka yang dapat dignakan berulang (Navbar, ProductCard, Layout, dll).
- `hooks/` : Custom React Hooks (contoh: `useProducts` dengan implementasi React Query).
- `lib/` : Utilitas dan file konfigurasi pustaka (contoh: setup Contentful API di `contentful.ts` dan global state Zustand di `store.ts`).
- `pages/` : Komponen tingkat halaman yang terhubung dengan React Router.
- `types/` : Definisi tipe data TypeScript/interface.

## 🔒 Catatan Keamanan

Kredensial seperti _Active Access Token_ dan _Space ID_ disimpan dengan prefix `VITE_` karena Vite membutuhkan prefix tersebut agar variabel dapat dibaca di sisi klien (frontend). Variabel-variabel tersebut akan disisipkan dalam kode hasil _build_.

**Peringatan Tambahan untuk Token Management (CMA):**
Jika di kemudian hari token yang Anda gunakan memiliki akses tulis penuh (_Content Management/Write Access_)—seperti yang digunakan untuk update _Featured_—**sangat tidak disarankan menggunakan token tersebut di sisi frontend pada production**, karena siapa saja bisa melihat token tersebut dan memodifikasi data CMS Anda. Disarankan untuk memindahkan proses update/write tersebut ke dalam Backend atau Serverless Functions (seperti Vercel Functions / Netlify Functions) agar kredensial terjaga dengan aman.
