<template>
  <div>
    <NuxtPage />
    <LanguageSwitcher />
    <LeadModal v-model="isOpen" />
  </div>
</template>

<script setup lang="ts">
import { useModal } from '~/composables/useModal'
const { isOpen } = useModal()
</script>
