<template>
  <div class="mt-12 min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2 flex items-center justify-center gap-3">
          📊 Laporan Penjualan
        </h1>
        <p class="text-gray-600">Analisis performa penjualan dan statistik bisnis</p>
      </div>

      <!-- Ringkasan Laporan -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- Total Pendapatan -->
        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 overflow-hidden transform hover:-translate-y-1">
          <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white/80 text-sm font-medium">Total Pendapatan</h3>
                  <p class="text-white text-xs">Keseluruhan penjualan</p>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4">
            <p class="text-3xl font-bold text-blue-700 mb-2">
              Rp {{ totalPendapatan.toLocaleString() }}
            </p>
            <div class="flex items-center gap-2 text-sm text-green-600">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              <span>Akumulasi penjualan</span>
            </div>
          </div>
        </div>

        <!-- Jumlah Transaksi -->
        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 overflow-hidden transform hover:-translate-y-1">
          <div class="bg-gradient-to-r from-purple-500 to-purple-600 p-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white/80 text-sm font-medium">Jumlah Transaksi</h3>
                  <p class="text-white text-xs">Total pesanan masuk</p>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4">
            <p class="text-3xl font-bold text-purple-700 mb-2">{{ transaksiStore.transaksiList.length }}</p>
            <div class="flex items-center gap-2 text-sm text-purple-600">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              <span>Transaksi tercatat</span>
            </div>
          </div>
        </div>

        <!-- Tanggal Terakhir -->
        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 overflow-hidden transform hover:-translate-y-1">
          <div class="bg-gradient-to-r from-teal-500 to-teal-600 p-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white/80 text-sm font-medium">Transaksi Terakhir</h3>
                  <p class="text-white text-xs">Aktivitas terbaru</p>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4">
            <p class="text-lg font-bold text-teal-700 mb-2">
              {{ transaksiStore.transaksiList.length > 0 ? formatTanggal(transaksiStore.transaksiList.at(-1).tanggal) : '-' }}
            </p>
            <div class="flex items-center gap-2 text-sm text-teal-600">
              <div class="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
              <span>{{ transaksiStore.transaksiList.length > 0 ? 'Aktif' : 'Tidak ada data' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Ringkasan Daftar Transaksi -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
        <div class="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
          <h2 class="text-2xl font-bold text-white flex items-center gap-2">
            🗂️ Ringkasan Transaksi
          </h2>
          <p class="text-purple-100 text-sm mt-1">Detail semua transaksi yang telah dilakukan</p>
        </div>

        <div class="p-6">
          <div v-if="transaksiStore.transaksiList.length === 0" class="text-center py-12">
            <div class="text-6xl mb-4 opacity-50">📋</div>
            <h3 class="text-xl font-bold text-gray-700 mb-2">Belum Ada Data Transaksi</h3>
            <p class="text-gray-500">Data transaksi akan muncul di sini setelah ada pemesanan</p>
          </div>

          <div v-else class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-gradient-to-r from-purple-500 to-blue-500">
                  <th class="text-left py-4 px-6 text-white font-semibold rounded-l-lg">
                    <div class="flex items-center gap-2">
                      <span class="w-2 h-2 bg-white rounded-full"></span>
                      No.
                    </div>
                  </th>
                  <th class="text-left py-4 px-6 text-white font-semibold">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      Tanggal & Waktu
                    </div>
                  </th>
                  <th class="text-left py-4 px-6 text-white font-semibold">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                      </svg>
                      Total Pembayaran
                    </div>
                  </th>
                  <th class="text-left py-4 px-6 text-white font-semibold rounded-r-lg">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                      </svg>
                      Jumlah Item
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr
                  v-for="(trx, index) in transaksiStore.transaksiList"
                  :key="index"
                  class="hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-200 group"
                >
                  <td class="py-4 px-6">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span class="text-white font-bold text-sm">{{ index + 1 }}</span>
                      </div>
                    </div>
                  </td>
                  <td class="py-4 px-6">
                    <div class="flex flex-col">
                      <span class="font-semibold text-gray-800">{{ formatTanggal(trx.tanggal) }}</span>
                      <span class="text-sm text-gray-500">{{ formatWaktu(trx.tanggal) }}</span>
                    </div>
                  </td>
                  <td class="py-4 px-6">
                    <div class="flex items-center gap-2">
                      <span class="text-lg font-bold text-green-600">
                        Rp {{ hitungTotal(trx.pesanan).toLocaleString() }}
                      </span>
                      <div class="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </td>
                  <td class="py-4 px-6">
                    <div class="flex items-center gap-2">
                      <div class="bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 rounded-full">
                        <span class="text-sm font-bold text-blue-700">{{ hitungJumlahItem(trx.pesanan) }} item</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Additional Analytics -->
      <div v-if="transaksiStore.transaksiList.length > 0" class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Rata-rata per transaksi -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
          <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            📈 Analisis Performa
          </h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
              <span class="text-sm font-medium text-green-700">Rata-rata per Transaksi</span>
              <span class="text-lg font-bold text-green-800">
                Rp {{ Math.round(totalPendapatan / transaksiStore.transaksiList.length).toLocaleString() }}
              </span>
            </div>
            <div class="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
              <span class="text-sm font-medium text-blue-700">Rata-rata Item per Transaksi</span>
              <span class="text-lg font-bold text-blue-800">
                {{ Math.round(transaksiStore.transaksiList.reduce((sum, trx) => sum + hitungJumlahItem(trx.pesanan), 0) / transaksiStore.transaksiList.length) }} item
              </span>
            </div>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
          <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            ⚡ Statistik Cepat
          </h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
              <span class="text-sm font-medium text-purple-700">Transaksi Tertinggi</span>
              <span class="text-lg font-bold text-purple-800">
                Rp {{ Math.max(...transaksiStore.transaksiList.map(trx => hitungTotal(trx.pesanan))).toLocaleString() }}
              </span>
            </div>
            <div class="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
              <span class="text-sm font-medium text-orange-700">Total Item Terjual</span>
              <span class="text-lg font-bold text-orange-800">
                {{ transaksiStore.transaksiList.reduce((sum, trx) => sum + hitungJumlahItem(trx.pesanan), 0) }} item
              </span>
            </div>
          </div>
        </div>
      </div>
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
  return tgl.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function formatWaktu(iso) {
  const tgl = new Date(iso)
  return tgl.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

function hitungTotal(pesanan) {
  return pesanan.reduce((total, item) => total + item.harga * item.jumlah, 0)
}

function hitungJumlahItem(pesanan) {
  return pesanan.reduce((total, item) => total + item.jumlah, 0)
}
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group {
  animation: fadeInUp 0.6s ease-out;
}

/* Custom scrollbar for table */
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: linear-gradient(to right, #8b5cf6, #3b82f6);
  border-radius: 10px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to right, #7c3aed, #2563eb);
}
</style>