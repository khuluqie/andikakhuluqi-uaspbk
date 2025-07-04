<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-6 text-[#6610f2]">📜 Riwayat Transaksi</h1>

    <div v-if="transaksiStore.transaksiList.length === 0" class="text-gray-500">
      Tidak ada transaksi yang tercatat.
    </div>

    <div v-else class="space-y-6">
      <div
        v-for="(trx, index) in transaksiStore.transaksiList"
        :key="index"
        class="bg-white rounded shadow p-4 border-l-4 border-[#6610f2]"
      >
        <div class="flex justify-between items-center mb-3">
          <h2 class="text-lg font-semibold text-[#6610f2]">Transaksi #{{ index + 1 }}</h2>
          <p class="text-sm text-gray-500">
            {{ formatTanggal(trx.tanggal) }}
          </p>
        </div>

        <ul class="space-y-1 text-sm">
          <li v-for="item in trx.pesanan" :key="item.id_menu" class="flex justify-between">
            <span>{{ item.nama_menu }} (x{{ item.jumlah }})</span>
            <span>Rp {{ (item.harga * item.jumlah).toLocaleString() }}</span>
          </li>
        </ul>

        <div class="text-right font-semibold mt-3 border-t pt-2 text-sm">
          Total: Rp {{ hitungTotal(trx.pesanan).toLocaleString() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTransaksiStore } from '@/stores/transaksiStore'

const transaksiStore = useTransaksiStore()

// Ambil data transaksi saat halaman dibuka
onMounted(() => {
  transaksiStore.fetchTransaksi()
})

// Format tanggal jadi lebih manusiawi
function formatTanggal(iso) {
  const tgl = new Date(iso)
  return tgl.toLocaleString('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })
}

// Hitung total harga dari pesanan dalam satu transaksi
function hitungTotal(pesanan) {
  return pesanan.reduce((total, item) => total + item.harga * item.jumlah, 0)
}
</script>
