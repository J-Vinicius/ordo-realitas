<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const elementos = ["Morte", "Sangue", "Energia", "Medo", "Conhecimento"];
</script>

<template>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Selecione um elemento" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Elementos</SelectLabel>
        <SelectItem v-for="elemento in elementos" :value="elemento">
          {{ elemento }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
