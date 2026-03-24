<script setup lang="ts">
import Insignia from "@/components/Insignia.vue";
import { Eye } from "lucide-vue-next";
import NavItem from "@/components/NavItem.vue";
</script>

<template>
  <main class="relative max-h-screen h-screen">
    <Insignia
      class="absolute right-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/5 h-fit opacity-25"
    />
    <ul class="p-4">
      <NavItem to="/criaturas" label="Criaturas Paranomais" :icon="Eye" />
    </ul>
  </main>
</template>
