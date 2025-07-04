<template>
  <div class="mt-12 min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2 flex items-center justify-center gap-3">
          📜 Riwayat Transaksi
        </h1>
        <p class="text-gray-600">Lihat semua transaksi yang telah dilakukan</p>
      </div>

      <!-- Empty State -->
      <div v-if="transaksiStore.transaksiList.length === 0" class="text-center py-16">
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-white/20 max-w-md mx-auto">
          <div class="text-8xl mb-6 opacity-50">🧾</div>
          <h3 class="text-xl font-bold text-gray-700 mb-2">Belum Ada Transaksi</h3>
          <p class="text-gray-500 mb-6">Transaksi Anda akan muncul di sini setelah melakukan pemesanan</p>
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium">
            <span>💡</span>
            <span>Mulai pesan untuk melihat riwayat</span>
          </div>
        </div>
      </div>

      <!-- Transaction List -->
      <div v-else class="space-y-6">
        <div
          v-for="(trx, index) in transaksiStore.transaksiList"
          :key="index"
          class="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 overflow-hidden transform hover:-translate-y-1"
        >
          <!-- Transaction Header -->
          <div class="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">#{{ index + 1 }}</span>
                </div>
                <div>
                  <h2 class="text-xl font-bold text-white">Transaksi #{{ index + 1 }}</h2>
                  <p class="text-purple-100 text-sm">
                    {{ formatTanggal(trx.tanggal) }}
                  </p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-white/80 text-sm">Total Pembayaran</p>
                <p class="text-2xl font-bold text-white">
                  Rp {{ hitungTotal(trx.pesanan).toLocaleString() }}
                </p>
              </div>
            </div>
          </div>

          <!-- Transaction Content -->
          <div class="p-6">
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                Detail Pesanan
              </h3>
            </div>

            <div class="space-y-3">
              <div 
                v-for="item in trx.pesanan" 
                :key="item.id_menu" 
                class="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 hover:from-purple-50 hover:to-blue-50 transition-all duration-200"
              >
                <div class="flex justify-between items-center">
                  <div class="flex-1">
                    <p class="font-bold text-gray-800">{{ item.nama_menu }}</p>
                    <div class="flex items-center gap-4 mt-1">
                      <span class="text-sm text-gray-600">
                        Rp {{ item.harga.toLocaleString() }} × {{ item.jumlah }}
                      </span>
                      <div class="flex items-center gap-1">
                        <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span class="text-xs text-green-700 font-medium">{{ item.jumlah }} item</span>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-lg font-bold text-gray-800">
                      Rp {{ (item.harga * item.jumlah).toLocaleString() }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Summary -->
            <div class="mt-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-200">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span class="text-white text-sm font-bold">Σ</span>
                  </div>
                  <span class="text-lg font-bold text-gray-700">Total Transaksi</span>
                </div>
                <div class="text-right">
                  <p class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    Rp {{ hitungTotal(trx.pesanan).toLocaleString() }}
                  </p>
                  <p class="text-sm text-gray-500">
                    {{ trx.pesanan.length }} item{{ trx.pesanan.length > 1 ? 's' : '' }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Transaction Status -->
            <div class="mt-4 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-sm font-medium text-green-700">Transaksi Selesai</span>
              </div>
              <div class="flex items-center gap-2 text-gray-500 text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{{ formatTanggal(trx.tanggal) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Stats -->
      
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
</style>