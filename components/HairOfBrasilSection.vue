<template>
  <section class="section-dark relative py-10 md:py-20 lg:py-24 px-6 md:px-16 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-[#0a0900] via-[#080700] to-[#090800] pointer-events-none"></div>

    <div class="max-w-[840px] mx-auto relative z-10">

      <div class="reveal text-center mb-10">
        <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
          {{ t('paraquem_title1') }}
        </h2>
        <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl text-gold font-bold leading-tight">
          {{ t('paraquem_title2') }}
        </h2>
      </div>

      <ul class="mb-14">
        <li
          v-for="(item, i) in forWho"
          :key="'for-' + i"
          class="reveal check-item flex items-center gap-4 px-2 py-3"
          :class="{ 'first-item': i === 0 }"
        >
          <span class="check-icon flex-shrink-0 text-green-400 text-2xl font-bold w-7 text-center leading-none">✓</span>
          <span class="text-white reveal-text text-[17px] md:text-[19px] leading-snug" v-html="item"></span>
        </li>
      </ul>

      <div class="reveal text-center mb-10">
        <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          <span class="text-gold font-bold">{{ t('paraquem_not_title').split(' ')[0] }} </span> {{ t('paraquem_not_title').split(' ').slice(1).join(' ') }}
        </h2>
      </div>

      <ul>
        <li
          v-for="(item, i) in notForWho"
          :key="'not-' + i"
          class="reveal cross-item flex items-center gap-4 px-2 py-3"
          :class="{ 'first-item': i === 0 }"
        >
          <span class="cross-icon flex-shrink-0 text-red-500 text-2xl font-bold w-7 text-center leading-none">✕</span>
          <span class="text-white text-[17px] reveal-text md:text-[19px] leading-snug" v-html="item"></span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">

import { useLocale } from '~/composables/useLocale'
const { t } = useLocale()

const forWho = [
  'Já realizam ou querem iniciar na cirurgia capilar com posicionamento high ticket',
  'Estão cansados de competir por preço e querem construir percepção de valor real',
  'Querem fazer transição de carreira e se tornarem empresários de sucesso na área de transplante capilar',
  'Liderar time técnico de sucesso e ecossistema',
  'Querem entender o modelo de operação por trás de uma empresa admirada',
  'Desejam reduzir anos de tentativa e erro aprendendo diretamente com quem já construiu e realmente sabe realizar um transplante capilar',
]

const notForWho = [
  'Você quer apenas assistir a uma cirurgia (existem cursos para isso)',
  'Você que quer ir para o caminho mais fácil: <strong>FICAR NA MÃO DE FREELANCER</strong>',
  'Você busca um protocolo para copiar, aqui você aprende a construir o seu',
  'Você não está comprometido com posicionamento high ticket',
]
</script>

<style scoped>
.check-item {
  border-bottom: 2px solid rgba(201, 169, 110, 0.35);
}

.check-item.first-item {
  border-top: 2px solid rgba(201, 169, 110, 0.35);
}

.check-icon {
  text-shadow: 0 0 8px rgba(74, 222, 128, 0.9), 0 0 18px rgba(74, 222, 128, 0.6);
}

.cross-item {
  border-bottom: 2px solid rgba(201, 169, 110, 0.35);
}

.cross-item.first-item {
  border-top: 2px solid rgba(201, 169, 110, 0.35);
}

.cross-icon {
  text-shadow: 0 0 8px rgba(239, 68, 68, 0.9), 0 0 18px rgba(239, 68, 68, 0.6);
}
</style>
