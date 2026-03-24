<script setup lang="ts">
defineProps<{
  to: string;
  label: string;
  icon?: any;
}>();
</script>

<template>
  <li class="w-fit">
    <NuxtLink
      :to="`/ordem${to}`"
      class="place-content-center flex flex-col items-center max-w-16 gap-2 group"
    >
      <div
        class="aspect-square size-12 bg-accent group-hover:bg-accent-foreground rounded relative"
      >
        <component
          :is="icon"
          class="absolute right-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-accent"
        />
      </div>

      <p class="line-clamp-2 text-center text-sm group-hover:font-medium">
        {{ label }}
      </p>
    </NuxtLink>
  </li>
</template>
