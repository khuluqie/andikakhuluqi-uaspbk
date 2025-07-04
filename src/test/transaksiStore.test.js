import { setActivePinia, createPinia } from 'pinia'
import { useTransaksiStore } from '@/stores/transaksiStore'
import axios from 'axios'
import { vi, describe, it, expect, beforeEach } from 'vitest'

vi.mock('axios')

describe('transaksiStore', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useTransaksiStore()
    store.pesanan = []
    store.transaksiList = []
  })

  it('menambahkan pesanan baru', () => {
    const item = { id: 1, nama: 'Ayam Goreng', harga: 15000 }
    store.tambahPesanan(item)

    expect(store.pesanan.length).toBe(1)
    expect(store.pesanan[0].jumlah).toBe(1)
    expect(store.pesanan[0].nama_menu).toBe('Ayam Goreng')
  })

  it('menambahkan item yang sama menambah jumlah', () => {
    const item = { id: 1, nama: 'Ayam Goreng', harga: 15000 }
    store.tambahPesanan(item)
    store.tambahPesanan(item)

    expect(store.pesanan.length).toBe(1)
    expect(store.pesanan[0].jumlah).toBe(2)
  })

  it('mengurangi jumlah pesanan', () => {
    const item = { id: 1, nama: 'Ayam Goreng', harga: 15000 }
    store.tambahPesanan(item)
    store.tambahPesanan(item)

    store.kurangiPesanan(1)
    expect(store.pesanan[0].jumlah).toBe(1)
  })

  it('menghapus pesanan jika jumlah tinggal 1 dan dikurangi', () => {
    const item = { id: 1, nama: 'Ayam Goreng', harga: 15000 }
    store.tambahPesanan(item)

    store.kurangiPesanan(1)
    expect(store.pesanan.length).toBe(0)
  })

  it('menghapus pesanan langsung', () => {
    const item = { id: 1, nama: 'Ayam Goreng', harga: 15000 }
    store.tambahPesanan(item)

    store.hapusPesanan(1)
    expect(store.pesanan.length).toBe(0)
  })

  it('menghitung total pesanan', () => {
    const item1 = { id: 1, nama: 'Ayam Goreng', harga: 15000 }
    const item2 = { id: 2, nama: 'Rendang', harga: 20000 }

    store.tambahPesanan(item1)
    store.tambahPesanan(item2)
    store.tambahPesanan(item2)

    // 15000 + (2 x 20000) = 55000
    expect(store.totalPesanan).toBe(55000)
  })

  it('menyimpan transaksi ke server dan mereset pesanan', async () => {
    const item = { id: 1, nama: 'Ayam Goreng', harga: 15000 }
    store.tambahPesanan(item)

    axios.post.mockResolvedValue({ status: 201 })
    axios.get.mockResolvedValue({ data: [{ id: 1, pesanan: [], tanggal: '2024-01-01' }] })

    await store.simpanTransaksi()

    expect(axios.post).toHaveBeenCalled()
    expect(store.pesanan.length).toBe(0)
    expect(store.transaksiList.length).toBe(1)
  })
})
