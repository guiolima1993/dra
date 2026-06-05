<template>
  <section class="section-dark relative py-24 px-6 md:px-16 overflow-hidden">
    <div class="max-w-4xl mx-auto relative z-10">
      <!-- Para quem é -->
      <div class="mb-24">
        <div class="reveal text-center mb-12">
          <h2 class="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
            Essa imersão foi criada<br />
            <span class="italic text-gold">para médicos que</span>
          </h2>
          <div class="gold-divider mt-6"></div>
        </div>

        <ul class="space-y-4 max-w-2xl mx-auto stagger-children">
          <li
            v-for="(item, i) in forWho"
            :key="i"
            class="reveal flex items-start gap-4"
          >
            <div class="flex-shrink-0 mt-1">
              <svg class="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-white/80 text-sm md:text-base leading-relaxed font-light">{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Não é para você -->
      <div>
        <div class="reveal text-center mb-12">
          <h2 class="font-serif text-3xl md:text-5xl font-bold text-white">
            Não é para você se:
          </h2>
          <div class="gold-divider mt-6"></div>
        </div>

        <ul class="space-y-4 max-w-2xl mx-auto stagger-children">
          <li
            v-for="(item, i) in notForWho"
            :key="i"
            class="reveal flex items-start gap-4"
          >
            <div class="flex-shrink-0 mt-1">
              <svg class="w-5 h-5 text-red-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <span class="text-white/60 text-sm md:text-base leading-relaxed font-light">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const forWho = [
  'Já atuam na área de transplante capilar e querem elevar o padrão da sua clínica',
  'Querem ter transição de carreira e buscam reposicionamento profissional ao sucesso na área de transplante capilar',
  'Buscam a validação da técnica por quem já domina com autoridade real',
  'Querem aprender de alguém com experiência comprovada e autoridade real',
  'Desejam realizar alta cirurgia e posicionamento profissional, diferenciando-se com qualidade',
  'Estão comprometidos com a excelência e a ética no exercício da profissão',
]

const notForWho = [
  'Você que quer aprender a cirurgia sem ter o PERFIL DE MÉDICO FREELANCER',
  'Você que quer o que parece ser fácil mas não tem a consciência do nível de responsabilidade',
  'Você que não está comprometido com a excelência e a ética no exercício da profissão',
]
</script>
