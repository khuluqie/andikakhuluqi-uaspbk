<template>
  <nav class="fixed top-0 left-0 w-full bg-[#6610f2] text-white shadow z-50">
    <div class="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
      <div class="font-bold text-lg">Rumah Makan</div>
      <ul class="flex space-x-6">
        <li>
          <router-link 
            to="/" 
            class="hover:underline"
            :class="{ 'font-semibold border-b-2 border-white': $route.name === 'menu' }"
          >
            Menu
          </router-link>
        </li>
        <li>
          <router-link 
            to="/riwayat" 
            class="hover:underline"
            :class="{ 'font-semibold border-b-2 border-white': $route.name === 'profile' }"
          >
            Riwayat
          </router-link>
        </li>
        <li>
          <router-link 
            to="/laporan" 
            class="hover:underline"
            :class="{ 'font-semibold border-b-2 border-white': $route.name === 'laporan' }"
          >
            Laporan
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

