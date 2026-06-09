<template>
  <section id="inscricao" class="section-dark relative py-10 md:py-20 lg:py-24 px-6 md:px-16 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-[#0a0900] via-[#080700] to-[#090800] pointer-events-none"></div>

    <div class="max-w-[1100px] mx-auto relative z-10 text-center">

      <!-- Título -->
      <div class="reveal mb-10 md:mb-20">
        <h2 class="font-bold text-2xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
          {{ t('inv_title') }} <span class="text-red-500">{{ t('inv_title_red') }}</span><br />{{ t('inv_title2') }}
        </h2>
        <p class="text-white/80 reveal-text text-sm md:text-[18px] leading-relaxed mb-4" v-html="t('inv_body1')"></p>
        <p class="text-white/80 reveal-text text-sm md:text-[18px] leading-relaxed mb-2" v-html="t('inv_body2')"></p>
        <p class="text-white/80 reveal-text text-sm md:text-[18px] leading-relaxed" v-html="t('inv_body3')"></p>
      </div>

      <!-- CTA -->
      <div class="reveal mt-4">
        <a
          href="#"
          class="btn-shimmer btn-gold btn-hero animate-pulse-gold inline-block px-10 py-4 font-bold uppercase"
          @click.prevent="openModal"
        >
          {{ t('modal_title') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import { useLocale } from '~/composables/useLocale'
import { useModal } from '~/composables/useModal'
const { t } = useLocale()
const { openModal } = useModal()
</script>

<style scoped>
</style>
