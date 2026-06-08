<template>
  <section class="section-dark relative py-20 md:py-24 px-6 md:px-16 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-[#0a0900] via-[#080700] to-[#090800] pointer-events-none"></div>

    <div class="absolute inset-x-0 top-[18%] h-[62%] pointer-events-none" style="-webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%); mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%);">
      <img
        src="/images/bg-after.png"
        alt="Fundo da seção"
        class="w-full h-full object-cover object-center grayscale contrast-125 brightness-75"
        onerror="this.style.display='none'"
      />
    </div>

    <div class="max-w-[780px] mx-auto relative z-10">
      <div class="text-center mb-8 md:mb-10">
        <h2 class="reveal font-serif text-4xl md:text-5xl text-[#f0e5d2] leading-none">{{ t('tres_title1') }}</h2>
        <h3 class="reveal font-serif text-4xl md:text-5xl text-[#f0e5d2] leading-none">{{ t('tres_title2') }}</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <article
          v-for="(card, i) in cards"
          :key="i"
          class="reveal pillar-card px-5 py-4 md:px-6 md:py-5"
        >
          <div class="font-serif text-[52px] md:text-[100px] leading-[0.9] text-[#f0e5d2] text-center mb-2">{{ card.numeral }}</div>
          <h4 class="font-serif font-bold text-[#f4ead8] text-[34px] md:text-[32px] text-center leading-tight mb-3">
            <span>{{ card.title }}</span>
            <span v-if="card.titleGold" class="block text-gold">{{ card.titleGold }}</span>
          </h4>
          <p class="text-white reveal-text text-[11px] md:text-[18px] leading-relaxed">{{ card.description }}</p>
        </article>
      </div>

      <div class="reveal mt-10 md:mt-12">
        <div class="ecosystem-image-wrap w-full max-w-[860px] mx-auto rounded-[55px] border border-gold/45 bg-black/35 overflow-hidden">
          <img
            src="/images/ecossistema-hair-of-brasil.png"
            alt="Ecossistema Hair of Brasil"
            class="w-full h-auto object-cover"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
          />
          <div style="display:none" class="w-full min-h-[240px] md:min-h-[360px] flex items-center justify-center text-center px-6">
            <p class="text-gold/75 text-sm md:text-base">Adicione /public/images/ecossistema-hair-of-brasil.png</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import { useLocale } from '~/composables/useLocale'
import { computed } from 'vue'
const { t } = useLocale()
const cards = computed(() => [
  { numeral: 'I', title: t('tres_c1_title'), titleGold: t('tres_c1_gold'), description: t('tres_c1_desc') },
  { numeral: 'II', title: t('tres_c2_title'), titleGold: t('tres_c2_gold'), description: t('tres_c2_desc') },
  { numeral: 'III', title: t('tres_c3_title'), titleGold: t('tres_c3_gold'), description: t('tres_c3_desc') },
  { numeral: 'IV', title: t('tres_c4_title'), titleGold: t('tres_c4_gold'), description: t('tres_c4_desc') },
])
</script>

<style scoped>
.pillar-card {
  min-height: 260px;
  border: 2px solid rgba(201, 169, 110, 0.68);
  border-top-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background: transparent;
}

.ecosystem-image-wrap {
  position: relative;
  box-shadow:
    0 0 0 1px rgba(201, 169, 110, 0.22),
    0 0 30px rgba(201, 169, 110, 0.25),
    0 0 72px rgba(201, 169, 110, 0.18);
}

.ecosystem-image-wrap::before {
  content: '';
  position: absolute;
  inset: -18px;
  border-radius: inherit;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(201, 169, 110, 0.34) 0%,
    rgba(201, 169, 110, 0.18) 45%,
    rgba(201, 169, 110, 0) 78%
  );
  filter: blur(24px);
  z-index: -1;
  pointer-events: none;
}
</style>
