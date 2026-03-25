<script setup lang="ts">
import Insignia from "@/components/Insignia.vue";
import NavItem from "@/components/NavItem.vue";
import { Eye, Feather, Folders, Users } from "lucide-vue-next";

const apps = [
  {
    href: "/grimorio",
    label: "Grimório",
    icon: Feather,
  },
  {
    href: "/bestiario",
    label: "Bestiário",
    icon: Eye,
  },
  {
    href: "/agentes",
    label: "Agentes",
    icon: Users,
  },
  {
    href: "/arquivos",
    label: "Arquivos",
    icon: Folders,
  },
];
</script>

<template>
  <NuxtLayout>
    <ul class="p-4 flex md:flex-col gap-4">
      <NavItem
        v-for="app in apps"
        :to="app.href"
        :label="app.label"
        :icon="app.icon"
      />
    </ul>
  </NuxtLayout>
</template>
