import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menuList: [
      // Lauk utama
      { id: 1, nama: 'Rendang', harga: 20000, kategori: 'Lauk' },
      { id: 2, nama: 'Ayam Goreng', harga: 15000, kategori: 'Lauk' },
      { id: 3, nama: 'Ayam Bakar', harga: 16000, kategori: 'Lauk' },
      { id: 4, nama: 'Ikan Goreng', harga: 14000, kategori: 'Lauk' },
      { id: 5, nama: 'Telur Balado', harga: 8000, kategori: 'Lauk' },

      // Pelengkap
      { id: 6, nama: 'Tempe', harga: 3000, kategori: 'Pelengkap' },
      { id: 7, nama: 'Tahu', harga: 3000, kategori: 'Pelengkap' },
      { id: 8, nama: 'Perkedel', harga: 4000, kategori: 'Pelengkap' },
      { id: 9, nama: 'Sambal Tambahan', harga: 1000, kategori: 'Pelengkap' },
      { id: 10, nama: 'Nasi Tambah', harga: 2000, kategori: 'Pelengkap' },

      // Minuman
      { id: 11, nama: 'Es Teh', harga: 5000, kategori: 'Minuman' },
      { id: 12, nama: 'Es Jeruk', harga: 6000, kategori: 'Minuman' },
      { id: 13, nama: 'Air Mineral', harga: 4000, kategori: 'Minuman' }
    ]
  }),
  getters: {
    getMenuById: (state) => (id) => {
      return state.menuList.find((item) => item.id === id)
    },
    menuByKategori: (state) => {
      return (kategori) => state.menuList.filter(item => item.kategori === kategori)
    }
  }
})
