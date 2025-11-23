# react-kfa

Aplikasi React dengan routing menggunakan React Router DOM dan authentication context.

## Fitur

- Routing dengan React Router DOM
- Authentication Context
- Protected Routes
- Login/Logout functionality
- Product listing dan detail pages
- Responsive navigation

## Tech Stack

- React 19.2.0
- React Router DOM 7.9.6
- Vite 7.2.2

## Instalasi Lokal

```bash
# Clone repository
git clone https://github.com/githubna-ilham/react-kfa.git

# Masuk ke direktori project
cd react-kfa

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview build
npm run preview
```

## Deployment

### Platform Hosting untuk React

Ada banyak platform yang bisa digunakan untuk deploy aplikasi React, antara lain:

#### 1. **Vercel** ⭐ (Pilihan Kami)
- Gratis untuk personal projects
- Auto deployment dari Git
- CDN global yang cepat
- Zero configuration untuk Vite/React
- Preview deployment untuk setiap PR
- Custom domain gratis dengan SSL
- Analytics dan monitoring bawaan

#### 2. **Netlify**
- Gratis tier yang generous
- Continuous deployment dari Git
- Form handling dan serverless functions
- Split testing bawaan
- CDN global

#### 3. **GitHub Pages**
- Gratis untuk repository public
- Terintegrasi dengan GitHub
- Cocok untuk static sites sederhana
- Perlu konfigurasi manual untuk routing

#### 4. **Railway / Render**
- Full-stack deployment
- Database hosting
- Auto-scaling
- Cocok untuk aplikasi dengan backend

#### 5. **AWS Amplify / Google Firebase**
- Full backend as a service
- Authentication, database, storage
- Lebih kompleks untuk setup
- Cocok untuk aplikasi enterprise

### Kenapa Memilih Vercel?

Untuk project React dengan Vite seperti ini, **Vercel adalah pilihan terbaik** karena:

✅ **Zero Configuration**
   - Otomatis mendeteksi Vite dan mengatur build settings
   - Tidak perlu konfigurasi routing manual untuk SPA
   - Deploy dalam hitungan menit tanpa setup rumit

✅ **Developer Experience**
   - UI dashboard yang intuitif dan mudah digunakan
   - Deployment logs yang jelas dan mudah di-debug
   - Preview deployment otomatis untuk setiap push/PR

✅ **Performance**
   - CDN Edge Network di 70+ lokasi global
   - Asset optimization otomatis (image, CSS, JS)
   - Response time yang sangat cepat (<100ms)

✅ **Free Tier yang Generous**
   - Unlimited projects
   - 100GB bandwidth per bulan
   - Custom domain dengan SSL gratis
   - Cocok untuk portfolio dan learning projects

✅ **Integration dengan Git**
   - Auto deploy setiap push ke main branch
   - Rollback mudah ke versi sebelumnya
   - Environment variables management

✅ **Dibuat oleh Pembuat Next.js**
   - Vercel adalah perusahaan di balik Next.js dan Turbopack
   - Expertise dalam React ecosystem
   - Support terbaik untuk React dan Vite

### Perbandingan Quick Comparison

| Fitur | Vercel | Netlify | GitHub Pages | Railway |
|-------|--------|---------|--------------|---------|
| **Setup** | ⭐⭐⭐⭐⭐ Sangat Mudah | ⭐⭐⭐⭐ Mudah | ⭐⭐⭐ Perlu Config | ⭐⭐⭐ Medium |
| **Auto Deploy** | ✅ Ya | ✅ Ya | ✅ Ya | ✅ Ya |
| **Free Bandwidth** | 100GB | 100GB | Unlimited | 5GB |
| **Build Time** | Cepat | Cepat | Medium | Medium |
| **SPA Routing** | ✅ Auto | ✅ Auto | ⚠️ Manual Config | ✅ Auto |
| **Custom Domain** | ✅ Free SSL | ✅ Free SSL | ✅ Free SSL | ⚠️ Paid |
| **Edge Network** | 70+ lokasi | 190+ lokasi | Via GitHub CDN | Limited |
| **Best For** | React/Next.js | JAMstack | Static Sites | Full-stack |

## Deploy ke Vercel

### Langkah 1: Persiapan Repository GitHub

Pastikan project sudah di-push ke GitHub repository:

```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit perubahan
git commit -m "first commit"

# Set branch ke main
git branch -M main

# Tambahkan remote origin
git remote add origin https://github.com/githubna-ilham/react-kfa.git

# Push ke GitHub
git push -u origin main
```

### Langkah 2: Deploy di Vercel

1. **Login ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Login menggunakan akun GitHub Anda

2. **Import Repository**
   - Klik tombol "Add New Project" atau "Import Project"
   - Pilih repository `react-kfa` dari daftar repository GitHub Anda
   - Klik "Import"

3. **Konfigurasi Project**
   - **Project Name**: Masukkan nama project (akan menjadi subdomain: `nama-project.vercel.app`)
   - **Framework Preset**: Vercel akan otomatis mendeteksi Vite
   - **Build Settings**:
     - **Build Command**: `npm run build` (atau `vite build`)
     - **Output Directory**: `dist` (default untuk Vite)
     - **Install Command**: `npm install`

4. **Deploy**
   - Klik tombol "Deploy"
   - Tunggu proses build dan deployment selesai (biasanya 1-3 menit)

5. **Selesai**
   - Jika berhasil, akan muncul notifikasi "Congratulations"
   - Project Anda sudah live di `https://nama-project.vercel.app`

### Auto Deployment

Setelah setup awal, setiap kali Anda push ke branch `main`, Vercel akan otomatis:
- Pull perubahan terbaru
- Build project
- Deploy ke production

```bash
# Workflow untuk update
git add .
git commit -m "description of changes"
git push
```

## Troubleshooting

### Error: "Could not resolve" CSS file

Jika terjadi error seperti `Could not resolve "./pages.css"`:

**Penyebab**: Case sensitivity pada nama file. Vercel menggunakan Linux (case-sensitive), sedangkan macOS/Windows tidak (case-insensitive).

**Solusi**: Pastikan import CSS menggunakan nama file yang tepat:
```javascript
// ❌ Salah (jika file bernama Pages.css)
import './pages.css';

// ✅ Benar
import './Pages.css';
```

### Build Gagal

1. Test build secara lokal terlebih dahulu:
   ```bash
   npm run build
   ```

2. Periksa error message di Vercel deployment logs

3. Pastikan semua dependencies sudah terinstall dengan benar

4. Pastikan tidak ada import path yang salah atau file yang hilang

## Demo Login

Untuk testing halaman login:
- Username: `admin`
- Password: `123456`

## Scripts

- `npm run dev` - Jalankan development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview production build
- `npm run lint` - Jalankan ESLint

## License

Private project untuk keperluan pelatihan React.
