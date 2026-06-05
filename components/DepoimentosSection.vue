<template>
  <section class="bg-[#0d0c00] relative py-24 px-6 md:px-16 overflow-hidden">
    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header -->
      <div class="reveal text-center mb-16">
        <p class="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-sans font-light">Resultados Reais</p>
        <h2 class="font-serif text-3xl md:text-4xl font-bold text-white">
          O que médicos dizem depois<br />
          <span class="italic text-gold">da imersão</span>
        </h2>
        <div class="gold-divider mt-6"></div>
      </div>

      <!-- Video Testimonials Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
        <div
          v-for="i in 4"
          :key="i"
          class="reveal group relative bg-dark-card border border-gold/20 aspect-video flex items-center justify-center cursor-pointer hover:border-gold/60 transition-all duration-500 overflow-hidden"
        >
          <!-- Video thumbnail placeholder -->
          <div class="absolute inset-0 bg-gradient-to-br from-dark-card to-black/80"></div>
          <img
            :src="`/images/depoimento-${i}.jpg`"
            :alt="`Depoimento ${i}`"
            class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            onerror="this.style.display='none'"
          />

          <!-- Play button -->
          <div class="relative z-10 w-14 h-14 border-2 border-gold/60 rounded-full flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500">
            <svg class="w-6 h-6 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <!-- Hover overlay text -->
          <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <p class="text-white/80 text-xs text-center font-sans font-light">Ver depoimento</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
