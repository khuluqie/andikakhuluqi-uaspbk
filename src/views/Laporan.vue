<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold text-[#6610f2] mb-6">📊 Laporan Penjualan</h1>

    <!-- Ringkasan Laporan -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div class="bg-[#e3f2fd] p-4 rounded shadow">
        <h3 class="text-sm text-gray-600">Total Pendapatan</h3>
        <p class="text-xl font-bold text-blue-700">
          Rp {{ totalPendapatan.toLocaleString() }}
        </p>
      </div>
      <div class="bg-[#f3e8ff] p-4 rounded shadow">
        <h3 class="text-sm text-gray-600">Jumlah Transaksi</h3>
        <p class="text-xl font-bold text-purple-700">{{ transaksiStore.transaksiList.length }}</p>
      </div>
      <div class="bg-[#e0f7fa] p-4 rounded shadow">
        <h3 class="text-sm text-gray-600">Tanggal Terakhir</h3>
        <p class="text-xl font-bold text-teal-700">
          {{ transaksiStore.transaksiList.length > 0 ? formatTanggal(transaksiStore.transaksiList.at(-1).tanggal) : '-' }}
        </p>
      </div>
    </div>

    <!-- Ringkasan Daftar Transaksi -->
    <div class="bg-white rounded shadow p-4">
      <h2 class="text-lg font-bold mb-4 text-[#6610f2]">🗂️ Ringkasan Transaksi</h2>
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-[#6610f2] text-white">
            <th class="text-left py-2 px-3">#</th>
            <th class="text-left py-2 px-3">Tanggal</th>
            <th class="text-left py-2 px-3">Total</th>
            <th class="text-left py-2 px-3">Jumlah Item</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(trx, index) in transaksiStore.transaksiList"
            :key="index"
            class="even:bg-gray-50"
          >
            <td class="py-2 px-3">{{ index + 1 }}</td>
            <td class="py-2 px-3">{{ formatTanggal(trx.tanggal) }}</td>
            <td class="py-2 px-3">Rp {{ hitungTotal(trx.pesanan).toLocaleString() }}</td>
            <td class="py-2 px-3">{{ hitungJumlahItem(trx.pesanan) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useTransaksiStore } from '@/stores/transaksiStore'

const transaksiStore = useTransaksiStore()

onMounted(() => {
  transaksiStore.fetchTransaksi()
})

// Hitung total pendapatan dari seluruh transaksi
const totalPendapatan = computed(() => {
  return transaksiStore.transaksiList.reduce((total, trx) => {
    return total + trx.pesanan.reduce((sum, item) => sum + item.harga * item.jumlah, 0)
  }, 0)
})

// Format tanggal tampil lokal
function formatTanggal(iso) {
  const tgl = new Date(iso)
  return tgl.toLocaleString('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })
}

function hitungTotal(pesanan) {
  return pesanan.reduce((total, item) => total + item.harga * item.jumlah, 0)
}

function hitungJumlahItem(pesanan) {
  return pesanan.reduce((total, item) => total + item.jumlah, 0)
}
</script>
