<script setup lang="ts">
import { Search } from "lucide-vue-next";
</script>

<template>
  <Insignia
    class="absolute right-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/5 h-fit opacity-25"
  />
  <main class="relative max-h-screen h-screen justify-items-center">
    <header class="max-w-lg flex p-4 items-center justify-between">
      <h2 class="text-xl font-semibold">Rituais</h2>
      <Search />
    </header>
    <ul>
      <li>Terceiro Olho</li>
    </ul>
  </main>
</template>
