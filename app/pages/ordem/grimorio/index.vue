<script setup lang="ts">
import { Search } from "lucide-vue-next";

useHead({
  title: "Rituais",
});
</script>

<template>
  <NuxtLayout>
    <div class="max-w-5xl mx-auto">
      <header class="w-full flex p-4 items-center justify-between">
        <h2 class="text-xl font-semibold">Rituais</h2>
        <div class="relative">
          <Search class="absolute top-1.5 left-2 text-accent size-6" />
          <Input type="text" placeholder="Procurar..." class="pl-10" />
        </div>
      </header>
      <section class="px-4">
        <ElementalFilter />
        <ul class="grid">
          <li></li>
        </ul>
      </section>
    </div>
  </NuxtLayout>
</template>
