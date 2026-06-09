<template>
  <section class="relative bg-dark-bg overflow-hidden">

    <!-- BG: imagem na proporção original, ancorada top-right — DESKTOP ONLY -->
    <img
      src="~/assets/images/bg-hero.webp"
      alt=""
      class="hidden md:block absolute top-0 right-0 h-full w-auto pointer-events-none z-[0] select-none"
      style="max-width: none;"
      fetchpriority="high"
    />

    <!-- Overlay desktop -->
    <div class="hidden md:block absolute inset-0 z-[1] pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-r from-dark-bg from-35% via-dark-bg/20 via-50% to-transparent"></div>
      <div class="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </div>

    <!-- MOBILE -->
    <div class="md:hidden flex flex-col w-full">
      <!-- Logo acima da imagem -->
      <div class="flex justify-center pt-16 pb-4">
        <img
          src="~/assets/images/logo-anayene-craveiro.webp"
          alt="Dra. Anayene Craveiro"
          class="h-12 w-auto object-contain"
        />
      </div>

      <!-- Imagem em fluxo -->
      <div class="relative w-full">
        <img
          src="/images/img-mob.webp"
          alt=""
          class="w-full object-contain select-none"
          style="max-height: 48vh;"
          fetchpriority="high"
        />
        <!-- Fade forte na base da imagem -->
        <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent" style="height: 55%;"></div>
      </div>

      <!-- Textos surgindo no fade da imagem -->
      <div class="relative z-10 -mt-40 flex flex-col items-center text-center px-6 pb-12 gap-3">
        <h1 class="font-serif text-3xl font-bold text-white leading-[1.1]">
          {{ t('hero_title') }}
        </h1>
        <p class="font-serif text-white text-base font-bold leading-snug">
          {{ t('hero_subtitle') }}
        </p>
        <p class="reveal-text text-white/90 text-sm leading-relaxed font-normal" v-html="t('hero_body')"></p>
        <p class="reveal-text text-red-500 text-sm font-bold">
          {{ t('hero_urgency') }}
        </p>
        <a href="#" class="btn-shimmer font-bold btn-gold btn-hero animate-pulse-gold px-10 py-3 uppercase mt-2" @click.prevent="openModal">
          {{ t('hero_cta') }}
        </a>
      </div>
    </div>

    <!-- DESKTOP: layout original com imagem de fundo -->
    <div class="hidden md:flex relative z-10 min-h-screen flex-col justify-center px-16 max-w-7xl mx-auto w-full gap-6">
      <div class="flex justify-center mb-6">
        <img
          src="~/assets/images/logo-anayene-craveiro.webp"
          alt="Dra. Anayene Craveiro"
          class="h-16 lg:h-20 w-auto object-contain"
        />
      </div>
      <div class="reveal-left visible max-w-[620px]">
        <h1 class="font-serif text-5xl lg:text-[4rem] font-bold text-white leading-[1.05] mb-5">
          {{ t('hero_title') }}
        </h1>
        <p class="font-serif text-white text-xl lg:text-[1.8rem] font-bold leading-snug mb-4">
          {{ t('hero_subtitle') }}
        </p>
        <p class="reveal-text text-white/90 text-base lg:text-[1.1rem] leading-relaxed mb-3 font-normal" v-html="t('hero_body')"></p>
        <p class="reveal-text text-red-500 text-base lg:text-[1.3rem] font-bold">
          {{ t('hero_urgency') }}
        </p>
      </div>
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

<style scoped>
.hero-img {
  -webkit-mask-image: linear-gradient(to bottom, black 65%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 65%, transparent 100%);
}

.hero-img-mobile {
  -webkit-mask-image: linear-gradient(to bottom, black 50%, rgba(0,0,0,0.3) 80%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 50%, rgba(0,0,0,0.3) 80%, transparent 100%);
}

/* Posição da imagem no mobile: ancorada direita e subida */
.hero-img-pos {
  object-position: right -68px;
}
</style>
