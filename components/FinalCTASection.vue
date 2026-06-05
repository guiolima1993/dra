<template>
  <section class="bg-[#0d0c00] relative py-28 px-6 md:px-16 overflow-hidden">
    <!-- Gold glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gold/8 blur-[80px] pointer-events-none rounded-full"></div>

    <div class="max-w-3xl mx-auto relative z-10 text-center">
      <div class="reveal">
        <p class="text-gold text-xs tracking-[0.4em] uppercase mb-6 font-sans font-light">Aprendizado Sem Fronteiras</p>
        <h2 class="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Você pode <span class="italic">aprender técnica</span>
        </h2>
        <h2 class="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-10">
          em qualquer lugar.
        </h2>

        <div class="gold-divider mb-8"></div>

        <p class="text-white/60 text-sm md:text-base leading-relaxed font-light mb-12 max-w-lg mx-auto">
          Mas quando você vem ao Brasil, você aprende com <strong class="text-white">a cirurgiã que criou a técnica</strong>. 
          A presença ao lado da Dra. Araquele transforma a forma como você enxerga a medicina capilar.
        </p>

        <a href="#inscricao" class="btn-shimmer btn-gold inline-block animate-pulse-gold text-base px-12 py-5">
          APLICAR PARA A IMERSÃO
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-20 pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 border border-gold/40 rounded-full flex items-center justify-center">
          <span class="text-gold text-xs font-serif">DA</span>
        </div>
        <span class="text-white/40 text-xs tracking-widest uppercase font-sans font-light">Dra. Araquele Coelho</span>
      </div>
      <p class="text-white/20 text-xs font-sans font-light">
        © {{ new Date().getFullYear() }} Todos os direitos reservados.
      </p>
    </div>
  </section>
</template>
