<template>
    <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- === KIRI: Menu berdasarkan kategori === -->
        <div class="w-200">
            <h2 class="text-2xl font-bold mb-4 text-[#6610f2]">🍽️ Daftar Menu</h2>

            <!-- LAUK -->
            <div class="mb-8">
                <h3 class="text-lg font-semibold mb-2 text-[#4b0082]">🍛 Lauk / Makanan</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div v-for="item in menuStore.menuByKategori('Lauk')" :key="item.id"
                        class="bg-[#f3e8ff] hover:bg-[#e9d8fd] transition p-4 rounded shadow cursor-pointer"
                        @click="transaksiStore.tambahPesanan(item)">
                        <p class="font-semibold">{{ item.nama }}</p>
                        <p class="text-sm text-gray-700">Rp {{ item.harga.toLocaleString() }}</p>
                    </div>
                </div>
            </div>

            <!-- PELENGKAP -->
            <div class="mb-8">
                <h3 class="text-lg font-semibold mb-2 text-[#008080]">🍚 Pelengkap</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div v-for="item in menuStore.menuByKategori('Pelengkap')" :key="item.id"
                        class="bg-[#e0f2f1] hover:bg-[#b2dfdb] transition p-4 rounded shadow cursor-pointer"
                        @click="transaksiStore.tambahPesanan(item)">
                        <p class="font-semibold">{{ item.nama }}</p>
                        <p class="text-sm text-gray-700">Rp {{ item.harga.toLocaleString() }}</p>
                    </div>
                </div>
            </div>

            <!-- MINUMAN -->
            <div class="mb-8">
                <h3 class="text-lg font-semibold mb-2 text-[#007BFF]">🥤 Minuman</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div v-for="item in menuStore.menuByKategori('Minuman')" :key="item.id"
                        class="bg-[#e3f2fd] hover:bg-[#bbdefb] transition p-4 rounded shadow cursor-pointer"
                        @click="transaksiStore.tambahPesanan(item)">
                        <p class="font-semibold">{{ item.nama }}</p>
                        <p class="text-sm text-gray-700">Rp {{ item.harga.toLocaleString() }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- === KANAN: Keranjang Pesanan === -->
        <div class="md:fixed md:right-6 md:top-20 w-full md:w-[350px]">
            <div class="bg-[#f5f5f5] rounded-xl shadow-lg p-4 h-full">
                <h2 class="text-xl font-bold mb-3 text-[#6610f2]">🧾 Keranjang</h2>

                <div v-if="transaksiStore.pesanan.length === 0" class="text-gray-500 text-sm">
                    Belum ada pesanan.
                </div>

                <ul v-else class="space-y-3 text-sm h-60 overflow-y-auto">
                    <li v-for="item in transaksiStore.pesanan" :key="item.id_menu"
                        class="flex items-center justify-between bg-white p-2 rounded shadow-sm">
                        <div>
                            <p class="font-medium">{{ item.nama_menu }}</p>
                            <p class="text-gray-500 text-xs">Rp {{ item.harga.toLocaleString() }} × {{ item.jumlah }}
                            </p>
                        </div>
                        <div class="flex items-center gap-1">
                            <button @click="transaksiStore.kurangiPesanan(item.id_menu)"
                                class="px-2 py-1 bg-red-500 text-white rounded text-xs">-</button>
                            <button
                                @click="transaksiStore.tambahPesanan({ id: item.id_menu, nama: item.nama_menu, harga: item.harga })"
                                class="px-2 py-1 bg-green-500 text-white rounded text-xs">+</button>
                            <button @click="transaksiStore.hapusPesanan(item.id_menu)"
                                class="text-gray-400 hover:text-red-500 text-xs">x</button>
                        </div>
                    </li>
                </ul>

                <!-- Total dan tombol selesai -->
                <div v-if="transaksiStore.pesanan.length > 0" class="mt-5 border-t pt-3">
                    <p class="text-right font-bold text-base text-gray-700">Total: Rp {{
                        transaksiStore.totalPesanan.toLocaleString() }}</p>
                    <button @click="simpanTransaksi"
                        class="mt-3 w-full bg-[#6610f2] hover:bg-[#4b00d1] text-white py-2 rounded text-sm font-medium">
                        Selesai
                    </button>
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
