<template>
  <!-- Bloco CTA com imagem de fundo -->
  <section class="relative py-28 px-6 md:px-16 overflow-hidden">
    <!-- Imagem de fundo -->
    <div class="absolute inset-0 z-0">
      <img src="/images/bg-cta.png" alt="" class="w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-black/65"></div>
    </div>

    <div class="max-w-3xl mx-auto relative z-10 text-center">
      <div class="reveal">
        <h2 class="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-2">
          {{ t('cta_title1') }} <span class="text-gold font-bold">{{ t('cta_title_gold') }}</span>
        </h2>
        <h2 class="text-4xl md:text-6xl font-bold text-white leading-tight mb-10">
          {{ t('cta_title2') }}
        </h2>

        <p class="text-white reveal-text text-sm md:text-[20px] leading-relaxed mb-12 mx-auto">
          {{ t('cta_body') }}
          <br><span class="font-bold text-gold">{{ t('cta_body_gold') }}</span>
        </p>

        <a href="#" class="btn-shimmer btn-gold btn-hero animate-pulse-gold inline-block px-14 py-4 font-bold uppercase" @click.prevent="openModal">
          {{ t('cta_btn') }}
        </a>
      </div>
    </div>
  </section>

  <!-- Footer separado, fundo escuro puro -->
  <footer class="bg-[#0a0900] py-8 px-6 md:px-16 border-t border-gold/10">
    <div class="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
      <div class="flex items-center gap-3">
        <img
          src="~/assets/images/logo-anayene-craveiro.webp"
          alt="Dra. Anayene Craveiro"
          class="h-8 w-auto object-contain opacity-60"
        />
      </div>
      <p class="text-white/20 text-xs font-sans font-light">
        © {{ new Date().getFullYear() }} {{ t('cta_copyright') }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">

import { useLocale } from '~/composables/useLocale'
import { useModal } from '~/composables/useModal'
const { t } = useLocale()
const { openModal } = useModal()
</script>
