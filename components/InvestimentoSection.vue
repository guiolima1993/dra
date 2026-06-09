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

      <!-- Card investimento -->
      <div class="reveal investimento-card relative mx-auto max-w-[800px] rounded-tr-[22px] rounded-bl-[22px] border border-gold/40 overflow-hidden">
        <img src="/images/bg-inv.webp" alt="" class="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" aria-hidden="true" />
        <div class="absolute inset-0 bg-black/60 z-[1] pointer-events-none"></div>
      <div class="relative z-10 p-6 md:p-10 lg:p-14 text-center">
        <!-- Corner ribbon -->
        <div class="corner-ribbon"></div>

        <p class="font-bold text-xl md:text-3xl lg:text-6xl text-white mb-5">{{ t('inv_card_title') }}</p>

        <div class="inline-block border border-gold/90 rounded-full px-6 md:px-8 pt-3 pb-5 mb-6 md:mb-8">
          <p class="font-semibold reveal-text text-2xl md:text-4xl lg:text-6xl text-[#f0e5d2]">R$ 50.000,00</p>
        </div>

        <p class="text-white reveal-text text-sm md:text-base lg:text-[22px] leading-relaxed mb-6 mx-auto">
          {{ t('inv_return1') }}<br />
          {{ t('inv_return2') }}
        </p>

        <p class="text-white font-bold reveal-text text-base md:text-xl tracking-widest uppercase mb-6 md:mb-8 mt-6 md:mt-8">{{ t('inv_incluso') }}</p>

        <ul class="text-left space-y-2 mb-8">
          <li
            v-for="(item, i) in inclusions"
            :key="i"
            class="text-white reveal-text text-sm md:text-base lg:text-[22px] leading-snug"
            v-html="'&bull; ' + item"
          ></li>
        </ul>

        <a
          href="#"
          class="btn-shimmer btn-gold btn-hero animate-pulse-gold inline-block px-10 py-4 font-bold uppercase"
          @click.prevent="openModal"
        >
          {{ t('inv_cta') }}
        </a>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import { useLocale } from '~/composables/useLocale'
import { useModal } from '~/composables/useModal'
import { computed } from 'vue'
const { t } = useLocale()
const { openModal } = useModal()

const inclusions = computed(() => [
  t('inv_inc1'), t('inv_inc2'), t('inv_inc3'),
  t('inv_inc4'), t('inv_inc5'), t('inv_inc6'), t('inv_inc7'),
])
</script>

<style scoped>
.corner-ribbon {
  position: absolute;
  top: 0;
  right: 0;
  width: 70px;
  height: 70px;
  overflow: hidden;
  z-index: 10;
}

.corner-ribbon::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 70px 70px 0;
  border-color: transparent rgba(201, 169, 110, 0.75) transparent transparent;
  filter: drop-shadow(-2px 2px 3px rgba(0,0,0,0.4));
}

.investimento-card {
  box-shadow:
    0 0 0 1px rgba(201, 169, 110, 0.12),
    0 0 40px rgba(201, 169, 110, 0.08);
}
</style>
