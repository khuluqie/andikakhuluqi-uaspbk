<template>
    <div class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                    Restoran Nusantara
                </h1>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- === KIRI: Menu berdasarkan kategori === -->
                <div class="lg:col-span-2">
                    <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
                        <h2 class="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center gap-2">
                            🍽️ Daftar Menu
                        </h2>

                        <!-- LAUK -->
                        <div class="mb-10">
                            <h3 class="text-xl font-bold mb-4 text-purple-800 flex items-center gap-2 border-b-2 border-purple-200 pb-2">
                                🍛 Lauk / Makanan
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                <div v-for="item in menuStore.menuByKategori('Lauk')" :key="item.id"
                                    class="group bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 p-5 rounded-xl shadow-md hover:shadow-lg cursor-pointer border border-purple-200/50 transform hover:scale-105 hover:-translate-y-1"
                                    @click="transaksiStore.tambahPesanan(item)">
                                    <div class="flex items-center justify-between mb-2">
                                        <p class="font-bold text-purple-800 group-hover:text-purple-900">{{ item.nama }}</p>
                                        <div class="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center group-hover:bg-purple-300 transition-colors">
                                            <span class="text-purple-700 font-bold text-sm">+</span>
                                        </div>
                                    </div>
                                    <p class="text-sm text-purple-600 font-semibold">Rp {{ item.harga.toLocaleString() }}</p>
                                    <div class="mt-3 h-1 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                        </div>

                        <!-- PELENGKAP -->
                        <div class="mb-10">
                            <h3 class="text-xl font-bold mb-4 text-teal-800 flex items-center gap-2 border-b-2 border-teal-200 pb-2">
                                🍚 Pelengkap
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                <div v-for="item in menuStore.menuByKategori('Pelengkap')" :key="item.id"
                                    class="group bg-gradient-to-br from-teal-50 to-teal-100 hover:from-teal-100 hover:to-teal-200 transition-all duration-300 p-5 rounded-xl shadow-md hover:shadow-lg cursor-pointer border border-teal-200/50 transform hover:scale-105 hover:-translate-y-1"
                                    @click="transaksiStore.tambahPesanan(item)">
                                    <div class="flex items-center justify-between mb-2">
                                        <p class="font-bold text-teal-800 group-hover:text-teal-900">{{ item.nama }}</p>
                                        <div class="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center group-hover:bg-teal-300 transition-colors">
                                            <span class="text-teal-700 font-bold text-sm">+</span>
                                        </div>
                                    </div>
                                    <p class="text-sm text-teal-600 font-semibold">Rp {{ item.harga.toLocaleString() }}</p>
                                    <div class="mt-3 h-1 bg-gradient-to-r from-teal-300 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                        </div>

                        <!-- MINUMAN -->
                        <div class="mb-8">
                            <h3 class="text-xl font-bold mb-4 text-blue-800 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
                                🥤 Minuman
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                <div v-for="item in menuStore.menuByKategori('Minuman')" :key="item.id"
                                    class="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 p-5 rounded-xl shadow-md hover:shadow-lg cursor-pointer border border-blue-200/50 transform hover:scale-105 hover:-translate-y-1"
                                    @click="transaksiStore.tambahPesanan(item)">
                                    <div class="flex items-center justify-between mb-2">
                                        <p class="font-bold text-blue-800 group-hover:text-blue-900">{{ item.nama }}</p>
                                        <div class="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center group-hover:bg-blue-300 transition-colors">
                                            <span class="text-blue-700 font-bold text-sm">+</span>
                                        </div>
                                    </div>
                                    <p class="text-sm text-blue-600 font-semibold">Rp {{ item.harga.toLocaleString() }}</p>
                                    <div class="mt-3 h-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- === KANAN: Keranjang Pesanan === -->
                <div class="lg:col-span-1">
                    <div class="sticky top-10">
                        <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
                            <h2 class="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 flex items-center gap-2">
                                🧾 Keranjang
                            </h2>

                            <div v-if="transaksiStore.pesanan.length === 0" class="text-center py-8">
                                <div class="text-6xl mb-4 opacity-50">🛒</div>
                                <p class="text-gray-500 text-sm">Belum ada pesanan</p>
                                <p class="text-gray-400 text-xs mt-1">Pilih menu untuk menambah pesanan</p>
                            </div>

                            <div v-else class="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                                <div v-for="item in transaksiStore.pesanan" :key="item.id_menu"
                                    class="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                                    <div class="flex items-start justify-between mb-3">
                                        <div class="flex-1">
                                            <p class="font-bold text-gray-800 text-sm">{{ item.nama_menu }}</p>
                                            <p class="text-gray-500 text-xs mt-1">Rp {{ item.harga.toLocaleString() }} × {{ item.jumlah }}</p>
                                        </div>
                                        <button @click="transaksiStore.hapusPesanan(item.id_menu)"
                                            class="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">
                                            <button @click="transaksiStore.kurangiPesanan(item.id_menu)"
                                                class="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
                                                <span class="text-sm font-bold">−</span>
                                            </button>
                                            <span class="w-8 text-center font-bold text-gray-700">{{ item.jumlah }}</span>
                                            <button
                                                @click="transaksiStore.tambahPesanan({ id: item.id_menu, nama: item.nama_menu, harga: item.harga })"
                                                class="w-8 h-8 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
                                                <span class="text-sm font-bold">+</span>
                                            </button>
                                        </div>
                                        <div class="text-right">
                                            <p class="font-bold text-gray-800 text-sm">Rp {{ (item.harga * item.jumlah).toLocaleString() }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Total dan tombol selesai -->
                            <div v-if="transaksiStore.pesanan.length > 0" class="mt-6 border-t border-gray-200 pt-4">
                                <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 mb-4">
                                    <div class="flex justify-between items-center">
                                        <span class="text-lg font-bold text-gray-700">Total:</span>
                                        <span class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                            Rp {{ transaksiStore.totalPesanan.toLocaleString() }}
                                        </span>
                                    </div>
                                </div>
                                <button @click="simpanTransaksi"
                                    class="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    ✨ Selesai Pesan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMenuStore } from '@/stores/menuStore'
import { useTransaksiStore } from '@/stores/transaksiStore'

const menuStore = useMenuStore()
const transaksiStore = useTransaksiStore()

const simpanTransaksi = async () => {
    await transaksiStore.simpanTransaksi()
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #8b5cf6, #3b82f6);
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #7c3aed, #2563eb);
}
</style>