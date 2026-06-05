<template>
  <section class="section-dark relative py-24 px-6 md:px-16 overflow-hidden">
    <!-- Subtle background texture -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left: Image placeholder -->
        <div class="reveal-left order-2 lg:order-1 relative flex justify-center">
          <div class="relative">
            <div class="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-gold/50"></div>
            <div class="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-gold/50"></div>
            <div class="w-full max-w-sm h-[480px] bg-gradient-to-b from-dark-card to-dark-bg overflow-hidden">
              <img
                :src="'/images/nova-geracao.jpg'"
                alt="Nova geração de transplante capilar"
                class="w-full h-full object-cover"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
              />
              <div style="display:none" class="w-full h-full items-center justify-center flex-col gap-4 bg-dark-card">
                <div class="w-16 h-16 border border-gold/40 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p class="text-gold/40 text-xs tracking-widest">IMAGEM DA SEÇÃO</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="order-1 lg:order-2">
          <p class="reveal text-gold text-xs tracking-[0.3em] uppercase mb-4 font-sans font-light">
            Imersão Exclusiva
          </p>
          <h2 class="reveal font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
            Faça parte da <span class="italic text-gold">nova geração</span>
          </h2>
          <h2 class="reveal font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            de transplante capilar!
          </h2>

          <p class="reveal text-white/70 text-sm md:text-base leading-relaxed mb-4 font-light">
            Muitos médicos tentam usar protocolos de alto faturamento, buscam formações técnicas, dependem de
            equipamentos caros. <strong class="text-white">Mas o transplante capilar de excelência real</strong> exige
            outro nível de domínio.
          </p>
          <p class="reveal text-white/60 text-sm leading-relaxed mb-10 font-light">
            O processo se constrói com uma alta responsabilidade técnica, equipe qualificada e acompanhamento ético.
          </p>

          <!-- Feature list -->
          <ul class="space-y-3 stagger-children">
            <li
              v-for="(item, i) in features"
              :key="i"
              class="reveal flex items-start gap-4 group"
            >
              <div class="mt-1 flex-shrink-0 w-5 h-5 border border-gold/60 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                <svg class="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span class="text-white/90 text-sm font-medium">{{ item.title }}</span>
                <span v-if="item.desc" class="text-white/50 text-sm"> — {{ item.desc }}</span>
              </div>
            </li>
          </ul>

          <div class="reveal mt-10 pt-6 border-t border-gold/20">
            <p class="text-gold/70 text-xs italic font-serif">
              A Dra. Araquele convida você para ser parte desta transformação.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  { title: 'Jornadas de pacientes', desc: 'Protocolos e padronização de qualidade' },
  { title: 'Formulários especializados', desc: 'Otimize seu fluxo de triagem e atendimento' },
  { title: 'Automações avançadas', desc: 'Ferramentas para escalar sua clínica com inteligência' },
  { title: 'Casos reais', desc: 'Análise cirúrgica de resultados reais' },
  { title: 'Construção de autoridade', desc: 'Como se posicionar como referência nacional' },
]
</script>
