<template>
  <section class="relative h-screen bg-dark-bg overflow-hidden">

    <!-- BG: imagem na proporção original, ancorada top-right -->
    <img
      src="~/assets/images/bg-hero.webp"
      alt=""
      class="absolute top-0 right-0 h-full w-auto pointer-events-none z-9 select-none"
      style="max-width: none;"
    />

    <!-- Overlay esquerda + fundo inferior -->
    <div class="absolute inset-0 z-[1] pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-r from-dark-bg from-35% via-dark-bg/20 via-50% to-transparent"></div>
      <div class="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </div>

    <!-- Layout: tudo junto, centralizado verticalmente -->
    <div class="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto w-full gap-6">

      <!-- Logo centralizada -->
      <div class="flex justify-center mb-6">
        <img
          src="~/assets/images/logo-anayene-craveiro.webp"
          alt="Dra. Anayene Craveiro"
          class="h-16 md:h-20 w-auto object-contain"
        />
      </div>

      <!-- Textos -->
      <div class="reveal-left visible max-w-[620px]">
        <h1 class="font-serif text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.05] mb-5">
          {{ t('hero_title') }}
        </h1>

        <p class="text-white lg:text-[1.8rem] font-bold leading-snug mb-4">
          {{ t('hero_subtitle') }}
        </p>

        <p class=" reveal-text text-white/90 lg:text-[1.1rem] text-sm leading-relaxed mb-3 font-normal">
          {{ t('hero_body') }}
        </p>

        <p class="reveal-text text-red-500 lg:text-[1.3rem] font-bold">
          {{ t('hero_urgency') }}
        </p>
      </div>

      <!-- Botão centralizado -->
      <div class="flex justify-center mt-4">
        <a href="#" class="btn-shimmer font-bold btn-gold btn-hero animate-pulse-gold px-14 py-3 uppercase" @click.prevent="openModal">
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
