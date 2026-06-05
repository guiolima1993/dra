<template>
  <section class="relative h-screen bg-dark-bg overflow-hidden">

    <!-- BG: imagem na proporção original, ancorada top-right -->
    <img
      src="~/assets/images/bg-hero.webp"
      alt=""
      class="absolute top-0 right-0 h-full w-auto pointer-events-none z-9 select-none"
      style="max-width: none;"
    />

    <!-- Overlay esquerda + fundo inferior -->
    <div class="absolute inset-0 z-[1] pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-r from-dark-bg from-35% via-dark-bg/20 via-50% to-transparent"></div>
      <div class="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </div>

    <!-- Layout: tudo junto, centralizado verticalmente -->
    <div class="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto w-full gap-6">

      <!-- Logo centralizada -->
      <div class="flex justify-center mb-6">
        <img
          src="~/assets/images/logo-anayene-craveiro.webp"
          alt="Dra. Anayene Craveiro"
          class="h-16 md:h-20 w-auto object-contain"
        />
      </div>

      <!-- Textos -->
      <div class="reveal-left visible max-w-[620px]">
        <h1 class="font-serif text-5xl md:text-6xl lg:text-[3rem] font-bold text-white leading-[1.05] mb-5">
          Domine o método de transplante capilar que se tornou destaque internacionalmente.
        </h1>

        <p class="text-white lg:text-[1.5rem] font-bold leading-snug mb-4">
          Experiência presencial de 3 dias para médicos que querem 
          elevar o padrão técnico e construir uma clínica previsível, 
          valorizada e com resultados. 
        </p>

        <p class="text-white/90 lg:text-[1.2rem] text-sm leading-relaxed mb-3 font-normal">
          Conheça o <span class="font-bold">Método FUE + Implantação Direta®</span> em uma imersão exclusiva dentro da Hair of Brasil <i>(uma das operações de medicina capilar brasileiras com maior reconhecimento global.)</i>
        </p>

        <p class="text-red-500 text-lg font-bold">
          Experiência exclusiva. Vagas limitadas.
        </p>
      </div>

      <!-- Botão centralizado -->
      <div class="flex justify-center mt-6">
        <a href="#inscricao" class="btn-shimmer font-bold btn-gold btn-hero animate-pulse-gold px-14 py-3">
          Quero Participar!
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>
