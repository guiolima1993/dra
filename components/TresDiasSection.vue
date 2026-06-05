<template>
  <section class="section-light relative py-24 px-6 md:px-16 overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute inset-0 pointer-events-none opacity-5">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23c9a96e\' fill-opacity=\'1\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E')]"></div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header -->
      <div class="reveal text-center mb-4">
        <p class="text-gold text-xs tracking-[0.3em] uppercase mb-6 font-sans font-light">Imersão Presencial</p>
        <h2 class="font-serif text-4xl md:text-5xl font-bold text-dark-bg leading-tight">
          3 dias,
        </h2>
        <h2 class="font-serif text-4xl md:text-5xl font-bold text-dark-bg leading-tight mb-4">
          Acesso total aos bastidores.
        </h2>
        <div class="w-16 h-px bg-gold mx-auto mb-12"></div>
      </div>

      <!-- 4 Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
        <div
          v-for="(card, i) in cards"
          :key="i"
          class="reveal group relative bg-white/60 backdrop-blur-sm border border-gold/20 p-8 hover:border-gold/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-default"
        >
          <!-- Roman numeral -->
          <div class="absolute top-0 right-6 -translate-y-1/2">
            <span class="font-serif text-5xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors duration-500 select-none">
              {{ card.numeral }}
            </span>
          </div>

          <!-- Card content -->
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 bg-dark-bg flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
              <span class="font-serif text-gold text-sm font-bold group-hover:text-dark-bg transition-colors duration-500">
                {{ card.numeral }}
              </span>
            </div>
            <div>
              <h3 class="font-serif text-lg font-bold text-dark-bg mb-3 leading-tight">{{ card.title }}</h3>
              <p class="text-dark-bg/60 text-sm leading-relaxed font-light">{{ card.description }}</p>
            </div>
          </div>

          <!-- Bottom accent line -->
          <div class="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-700"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    numeral: 'I',
    title: 'Acompanhamento da minha clínica',
    description:
      'Uma experiência única acompanhando uma consultoria platinum de alta excelência cirúrgica, o funcionamento da equipe, a organização da agenda e os bastidores reais da clínica da Dra. Araquele com padrões internacionais.',
  },
  {
    numeral: 'II',
    title: 'Consultoria estratégica com a Dra. Araquele',
    description:
      'Uma sessão única e aprofundada para estruturar seu plano de transplante capilar com excelência estratégica e posicionamento de mercado. Você sai com um plano claro, real e aplicável.',
  },
  {
    numeral: 'III',
    title: 'Cirurgia ao vivo com a Dra. Araquele',
    description:
      'Você acompanha de perto uma cirurgia real realizada pela Dra. A fase técnica é única, observando cada detalhe da última etapa e retirada. A fase técnica é aplicada com toda a equipe.',
  },
  {
    numeral: 'IV',
    title: 'Plano de ação para médicos que',
    description:
      'Você sai com um roteiro personalizado: metas, protocolos, plano de divulgação e estratégia de marketing médico ético para implementar ao voltar à sua cidade — com suporte posterior.',
  },
]
</script>
