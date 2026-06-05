<template>
  <section class="bg-[#0d0c00] relative py-28 px-6 md:px-16 overflow-hidden">
    <div class="max-w-4xl mx-auto relative z-10">
      <!-- Header -->
      <div class="reveal text-center mb-16">
        <p class="text-gold/70 text-xs tracking-[0.4em] uppercase mb-4 font-sans font-light">Ecossistema</p>
        <h2 class="font-serif text-3xl md:text-4xl font-bold text-white mb-2">HAIR OF BRASIL</h2>
        <p class="font-serif text-xl italic text-gold">Dra. Araquele</p>
        <div class="gold-divider mt-6"></div>
      </div>

      <!-- Circular Infographic -->
      <div class="reveal relative flex items-center justify-center">
        <div class="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
          <!-- Outer ring -->
          <div class="absolute inset-0 rounded-full border border-gold/20 animate-spin-slow"></div>
          <!-- Middle ring -->
          <div class="absolute inset-8 rounded-full border border-gold/30"></div>
          <!-- Inner circle -->
          <div class="absolute inset-16 rounded-full bg-dark-card border border-gold/40 flex items-center justify-center flex-col gap-1">
            <div class="w-8 h-8 border border-gold rounded-full flex items-center justify-center mb-1">
              <span class="text-gold text-xs font-serif">H</span>
            </div>
            <p class="font-serif text-gold text-xs font-bold tracking-widest text-center">HAIR</p>
            <p class="text-white/40 text-[10px] tracking-widest text-center">OF BRASIL</p>
          </div>

          <!-- Orbit items -->
          <div
            v-for="(item, i) in orbitItems"
            :key="i"
            class="absolute"
            :style="getOrbitStyle(i, orbitItems.length)"
          >
            <div
              class="bg-dark-card border border-gold/30 px-3 py-2 text-center min-w-[100px] hover:border-gold/70 hover:bg-dark-bg transition-all duration-300 cursor-default group"
              style="transform: translate(-50%, -50%)"
            >
              <p class="text-gold text-[10px] font-bold tracking-wider uppercase group-hover:text-gold-light transition-colors">{{ item.title }}</p>
              <p v-if="item.sub" class="text-white/40 text-[9px] mt-0.5">{{ item.sub }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const orbitItems = [
  { title: 'Técnica FUE', sub: 'Implantação DirecF™' },
  { title: 'Protocolo Clínico', sub: 'Padrão Premium' },
  { title: 'Marketing Médico', sub: 'Autoridade Digital' },
  { title: 'Gestão de Clínica', sub: 'Alta Performance' },
  { title: 'Pós-operatório', sub: 'Resultados Reais' },
  { title: 'Ética Profissional', sub: 'CFM e Boas Práticas' },
]

function getOrbitStyle(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2
  const radius = 50 // percentage from center
  const x = 50 + radius * Math.cos(angle)
  const y = 50 + radius * Math.sin(angle)
  return {
    left: `${x}%`,
    top: `${y}%`,
  }
}
</script>
