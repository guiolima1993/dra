<template>
  <section class="bg-[#0d0c00] relative py-24 px-6 md:px-16 overflow-hidden">
    <!-- Gold accent lines -->
    <div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent"></div>
    <div class="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header -->
      <div class="reveal text-center mb-16">
        <p class="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-sans font-light">
          Reconhecimento Internacional
        </p>
        <h2 class="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
          Destaque na <span class="italic text-gold">Forbes</span>
        </h2>
        <div class="gold-divider"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Bullet points -->
        <div class="space-y-4">
          <p class="reveal text-white/60 text-sm leading-relaxed mb-8 font-light">
            A Dra. Araquele é apenas uma das poucas que se tornou um
            modelo de operação que alcança excelentes clínicas com
            padrão de atendimento de nível premium internacionalmente.
            Em mais de 3 anos exclusivos na área do.
          </p>

          <ul class="space-y-4">
            <li
              v-for="(item, i) in achievements"
              :key="i"
              class="reveal flex items-start gap-4"
            >
              <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></div>
              <span class="text-white/80 text-sm leading-relaxed font-light">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Right: Image + Forbes badge -->
        <div class="reveal-right relative flex justify-center lg:justify-end">
          <div class="relative">
            <div class="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-gold/50"></div>
            <div class="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-gold/50"></div>

            <div class="w-full max-w-sm h-[460px] bg-gradient-to-b from-dark-card to-dark-bg overflow-hidden">
              <img
                :src="'/images/forbes.jpg'"
                alt="Dra. Araquele Coelho Forbes"
                class="w-full h-full object-cover object-top"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
              />
              <div style="display:none" class="w-full h-full items-center justify-center flex-col gap-4 bg-dark-card">
                <svg class="w-12 h-12 text-gold/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p class="text-gold/40 text-xs tracking-widest">FOTO FORBES</p>
              </div>
            </div>

            <!-- Forbes badge overlay -->
            <div class="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-gold/40 px-4 py-2">
              <p class="text-gold text-xs tracking-widest uppercase font-serif italic">Forbes Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const achievements = [
  'Criou o Método FUE + Implantação DirecF™ com resultados internacionais',
  'Ex-professora de Medicina (cirg.) (long) no Brasil',
  'Palestrante em 50+ congressos nacionais e internacionais',
  'No destaque da Forbes em 2023',
  'Capacitou profissionais a top/nivel alcançando o padrão de medicina premium',
  'Forma profissionais de diferentes regiões do Brasil',
  'Em mais de todos os clínicos de francesas na Real Espanha',
]
</script>
