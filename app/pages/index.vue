<script setup lang="ts">
import AnimatedGradient from "~/components/AnimatedGradient.vue";
import Insignia from "~/components/Insignia.vue";
import Login from "~/components/Login.vue";
</script>

<template>
  <AnimatedGradient class="max-h-screen place-content-center h-screen">
    <main
      class="place-self-center flex flex-col justify-center items-center gap-4"
    >
      <Insignia class="w-3/4 md:w-2/5 h-fit" />
      <h1 class="text-xl font-semibold">Bem vindo, Agente.</h1>
      <Login />
    </main>
  </AnimatedGradient>
</template>
