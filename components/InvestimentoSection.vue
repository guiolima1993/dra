<template>
  <section id="inscricao" class="section-dark relative py-28 px-6 md:px-16 overflow-hidden">
    <!-- Gold glow background -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[100px] pointer-events-none"></div>

    <div class="max-w-3xl mx-auto relative z-10 text-center">
      <!-- Header -->
      <div class="reveal mb-16">
        <p class="text-gold text-xs tracking-[0.4em] uppercase mb-6 font-sans font-light">Vagas Limitadas</p>
        <h2 class="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
          Por que as vagas <span class="italic text-gold underline decoration-gold/40">são limitadas</span><br />
          de verdade.
        </h2>
        <div class="gold-divider mt-6 mb-8"></div>
        <p class="text-white/60 text-sm md:text-base leading-relaxed font-light max-w-xl mx-auto">
          A Dra. Araquele conduz pessoalmente todos os dias. Por isso a profundidade e a
          qualidade do ensino se mantém em altíssimo nível. Cada médico recebe toda a atenção,
          todos os anos ago colaborar sobre o nível de treinamento. Quando as vagas fecham, a
          turma não abre mais.
        </p>
      </div>

      <!-- Price box -->
      <div class="reveal-scale relative inline-block w-full max-w-lg">
        <!-- Decorative corners -->
        <div class="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-gold/60"></div>
        <div class="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-gold/60"></div>
        <div class="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-gold/60"></div>
        <div class="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-gold/60"></div>

        <div class="bg-dark-card border border-gold/30 p-10">
          <p class="text-white/50 text-xs tracking-widest uppercase mb-2 font-sans font-light">Investimento</p>
          <div class="bg-gold/10 border border-gold/30 px-8 py-4 mb-6 inline-block w-full">
            <p class="font-serif text-3xl md:text-4xl font-bold text-gold">R$ 50.000,00</p>
          </div>

          <!-- Inclusions list -->
          <ul class="text-left space-y-3 mb-8">
            <li
              v-for="(item, i) in inclusions"
              :key="i"
              class="flex items-start gap-3 text-sm text-white/70 font-light"
            >
              <svg class="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ item }}
            </li>
          </ul>

          <!-- CTA Button -->
          <a
            href="#"
            class="btn-shimmer btn-gold block text-center w-full animate-pulse-gold"
          >
            QUERO PARTICIPAR / VER AS POSSIBILIDADES
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const inclusions = [
  'Imersão presencial de 3 dias no Brasil',
  'Acesso aos bastidores reais da Clínica da Dra. Araquele',
  'Cirurgia ao vivo com a Dra. Araquele',
  'Plano de ação personalizado para sua clínica',
  'Consultoria estratégica com a Dra. Araquele',
  'Certificação de participação',
  'Suporte pós-imersão por 30 dias',
]
</script>
