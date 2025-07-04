# 🍽️ Aplikasi Kasir Rumah Makan (Vue + Pinia + JSON Server)

Aplikasi kasir sederhana untuk rumah makan seperti warung Padang, dibuat menggunakan Vue 3, Pinia untuk manajemen state, dan JSON Server sebagai backend penyimpanan transaksi.

---

## ✨ Fitur Aplikasi

- Menampilkan daftar menu makanan, pelengkap, dan minuman berdasarkan kategori.
- Keranjang pesanan dengan fitur tambah, kurang, dan hapus.
- Simpan transaksi ke server (JSON).
- Riwayat transaksi yang tersimpan.
- Laporan total pendapatan dan data transaksi.

---

## 📂 Struktur Menu

Menu dibagi menjadi 3 kategori:

| Kategori     | Contoh                            |
|--------------|------------------------------------|
| Lauk         | Ayam Goreng, Rendang, Dendeng      |
| Pelengkap    | Tempe, Tahu, Perkedel, Nasi Tambah |
| Minuman      | Teh Manis, Air Mineral, Jus        |

> Menu **tidak berasal dari database**, melainkan ditentukan langsung di dalam kode (`menuStore`).

---

## 🌐 Routingan Halaman

| Path          | Komponen      | Keterangan                        |
|---------------|---------------|-----------------------------------|
| `/`           | `Menu.vue`    | Halaman utama untuk memilih menu |
| `/riwayat`    | `Riwayat.vue` | Melihat semua transaksi          |
| `/laporan`    | `Laporan.vue` | Laporan total transaksi & data   |

---

## 📡 Endpoint Backend (JSON Server)

Pastikan JSON Server berjalan di: `http://localhost:3000`

### 📁 `transaksi` endpoint:

| Method | Endpoint               | Deskripsi                                |
|--------|------------------------|-------------------------------------------|
| `GET`  | `/transaksi`           | Mengambil semua transaksi                 |
| `POST` | `/transaksi`           | Menyimpan transaksi baru                  |
| `DELETE` | `/transaksi/:id`     | (Opsional) Menghapus transaksi tertentu   |

> Endpoint ini menyimpan data di `db.json` secara lokal.

Contoh format transaksi:
```json
{
  "id": 1,
  "tanggal": "2025-07-04T09:35:21.000Z",
  "pesanan": [
    {
      "id_menu": 1,
      "nama_menu": "Ayam Goreng",
      "harga": 15000,
      "jumlah": 2
    }
  ]
}
