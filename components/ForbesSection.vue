<template>
  <section class="section-dark relative py-20 md:py-24 px-6 md:px-16 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-[#0a0900] via-[#080700] to-[#090800] pointer-events-none"></div>

    <div class="max-w-[1320px] mx-auto relative z-10">
      <div class="text-center mb-12 md:mb-14">
        <h2 class="reveal font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-none mb-6">
          {{ t('forbes_title') }}
        </h2>
        <p class="reveal reveal-text text-white/80 text-[.7rem] md:text-4xl lg:text-[1.2rem] font-normal leading-relaxed max-w-4xl mx-auto">
          {{ t('forbes_body') }}
          <br />
          {{ t('forbes_years') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[1fr_620px] gap-8 lg:gap-10 items-center">
        <div>
          <ul class="space-y-2 mb-6">
            <li
              v-for="(item, i) in achievements"
              :key="i"
              class="reveal reveal-text text-white text-[.7rem] md:text-4xl lg:text-[1.2rem] leading-snug"
            >
              - {{ item }}
            </li>
          </ul>

          <blockquote class="reveal reveal-text bg-gold text-dark-bg rounded-none rounded-tr-[18px] rounded-bl-[18px] overflow-hidden px-4 py-3 md:px-5 md:py-4">
            <p class="italic font-semibelezabold text-[.7rem] md:text-4xl lg:text-[1.2rem] leading-snug">
              {{ t('forbes_quote') }}
            </p>
            <cite class="block mt-2 text-[.7rem] md:text-4xl lg:text-[1.2rem] italic font-bold">{{ t('forbes_author') }}</cite>
          </blockquote>
        </div>

        <div class="reveal-right relative flex justify-center lg:justify-end">
          <div class="forbes-image-wrap relative w-full max-w-[420px] lg:max-w-[600px]">
            <img
              src="/images/imagem-criativos-forbes.png"
              alt="Dra. Arayene em destaque na Forbes"
              class="forbes-image w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import { useLocale } from '~/composables/useLocale'
const { t } = useLocale()

const achievements = [
  'Criou o Método FUE + Implantação Direta e técnica própria com resultados documentados',
  'Foi pioneira na técnica Long Hair no Brasil',
  'Palestrou em congressos nacionais e internacionais',
  'Foi destaque da Forbes em 2025',
  'Construiu a Hair of Brasil como ecossistema de medicina capilar premium',
  'Formou profissionais e equipes de diferentes regiões do Brasil',
  'Já treinou redes de franquias no Brasil todo.',
]
</script>

<style scoped>
.forbes-image {
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 88%,
    rgba(0, 0, 0, 0.7) 94%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 88%,
    rgba(0, 0, 0, 0.7) 94%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>
