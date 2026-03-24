<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
</script>

<template>
  <form class="flex flex-col gap-2.5 md:w-2/5">
    <!-- Agente -->
    <FormField v-slot="{ componentField }" name="agente">
      <FormItem>
        <FormLabel>Agente</FormLabel>
        <FormControl>
          <Input
            type="password"
            placeholder="*************"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <!-- Senha -->
    <FormField v-slot="{ componentField }" name="senha">
      <FormItem>
        <FormLabel>Senha</FormLabel>
        <FormControl>
          <Input
            type="password"
            placeholder="*************"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit"> Confirmar </Button>
  </form>
</template>
