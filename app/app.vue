<script setup lang="ts">
import Insignia from "@/components/Insignia.vue";

useHead({
  title: "Ordo Realitas",
});
</script>

<template>
  <AnimatedGradient class="max-h-screen place-content-center h-screen">
    <main
      class="place-self-center flex flex-col justify-center items-center gap-4"
    >
      <Insignia class="w-3/4 md:w-2/5 h-fit" />
      <Login />
    </main>
  </AnimatedGradient>
</template>
