<template>
  <section class="section-dark relative py-10 md:py-20 lg:py-24 px-6 md:px-16 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-[#0a0900] via-[#080700] to-[#090800] pointer-events-none"></div>

    <div class="max-w-4xl mx-auto relative z-10 text-center">

      <h2 class="reveal font-serif text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
        {{ t('nova_title') }}
        <br class="hidden md:block" />
        {{ t('nova_title2') }}
      </h2>

      <p class="reveal reveal-text text-white/70 text-sm md:text-base lg:text-[1.2rem] font-normal leading-relaxed max-w-5xl mx-auto mb-4">
        {{ t('nova_body1') }} <span class="font-bold">{{ t('nova_bold') }} </span>
      </p>

      <p class="reveal reveal-text text-white/70 text-sm md:text-base lg:text-[1.2rem] font-normal leading-relaxed max-w-3xl mx-auto mb-12">
        {{ t('nova_body2') }}
      </p>

      <h3 class="reveal font-bold text-2xl md:text-4xl lg:text-5xl text-white mb-4">
        {{ t('nova_access_title') }}
      </h3>
      <p class="reveal reveal-text text-white/80 text-sm md:text-base lg:text-[1.2rem] mb-8">
        {{ t('nova_access_sub') }}
      </p>

      <ul class="space-y-3 max-w-5xl mx-auto">
        <li
          v-for="(item, i) in features"
          :key="i"
          class="reveal reveal-text bg-gold text-dark-bg rounded-full px-5 py-2.5 text-left text-sm md:text-base lg:text-[1.2rem] leading-snug"
        >
          <strong>{{ item.title }}</strong>
          <span> | {{ item.desc }}</span>
        </li>
      </ul>

      <p class="reveal reveal-text text-white text-sm md:text-base lg:text-[1.2rem] mt-10">
        {{ t('nova_closing1') }}
      </p>
      <p class="reveal reveal-text text-red-500 text-sm md:text-base lg:text-[1.3rem] font-bold">
        {{ t('nova_closing2') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">

import { useLocale } from '~/composables/useLocale'
import { computed } from 'vue'
const { t } = useLocale()
const features = computed(() => [
  { title: t('nova_f1'), desc: t('nova_f1d') },
  { title: t('nova_f2'), desc: t('nova_f2d') },
  { title: t('nova_f3'), desc: t('nova_f3d') },
  { title: t('nova_f4'), desc: t('nova_f4d') },
  { title: t('nova_f5'), desc: t('nova_f5d') },
])
</script>
