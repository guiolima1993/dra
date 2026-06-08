<template>
  <section class="relative min-h-screen bg-dark-bg overflow-hidden">

    <!-- BG: imagem na proporção original, ancorada top-right -->
    <img
      src="~/assets/images/bg-hero.webp"
      alt=""
      class="absolute top-0 right-0 h-full w-auto pointer-events-none z-[0] select-none"
      style="max-width: none;"
    />

    <!-- Overlay mobile: cobre mais para garantir legibilidade -->
    <div class="absolute inset-0 z-[1] pointer-events-none">
      <!-- Mobile: cobre toda a tela com gradiente mais denso -->
      <div class="absolute inset-0 bg-dark-bg/80 md:hidden"></div>
      <!-- Desktop: gradiente horizontal clássico -->
      <div class="absolute inset-0 hidden md:block bg-gradient-to-r from-dark-bg from-35% via-dark-bg/20 via-50% to-transparent"></div>
      <div class="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </div>

    <!-- Layout: tudo junto, centralizado verticalmente -->
    <div class="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto w-full gap-4 md:gap-6 py-16 md:py-0">

      <!-- Logo centralizada -->
      <div class="flex justify-center mb-2 md:mb-6">
        <img
          src="~/assets/images/logo-anayene-craveiro.webp"
          alt="Dra. Anayene Craveiro"
          class="h-12 md:h-16 lg:h-20 w-auto object-contain"
        />
      </div>

      <!-- Textos -->
      <div class="reveal-left visible max-w-[620px] mx-auto md:mx-0 text-center md:text-left">
        <h1 class="font-serif text-3xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] mb-4 md:mb-5">
          {{ t('hero_title') }}
        </h1>

        <p class="font-serif text-white text-base md:text-xl lg:text-[1.8rem] font-bold leading-snug mb-3 md:mb-4">
          {{ t('hero_subtitle') }}
        </p>

        <p class="reveal-text text-white/90 text-sm md:text-base lg:text-[1.1rem] leading-relaxed mb-3 font-normal" v-html="t('hero_body')"></p>

        <p class="reveal-text text-red-500 text-sm md:text-base lg:text-[1.3rem] font-bold">
          {{ t('hero_urgency') }}
        </p>
      </div>

      <!-- Botão centralizado -->
      <div class="flex justify-center mt-2 md:mt-4">
        <a href="#" class="btn-shimmer font-bold btn-gold btn-hero animate-pulse-gold px-10 md:px-14 py-3 uppercase" @click.prevent="openModal">
          {{ t('hero_cta') }}
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
