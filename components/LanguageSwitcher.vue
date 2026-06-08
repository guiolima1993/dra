<template>
  <div class="fixed bottom-6 right-6 z-[999]" ref="wrapperRef">
    <button
      @click="open = !open"
      class="flex items-center gap-1.5 bg-[#0e0c02]/90 border border-gold/40 backdrop-blur-sm px-3 py-2 text-white/70 hover:text-white text-xs tracking-widest uppercase font-sans transition-colors duration-200"
    >
      <svg class="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3M3.6 9h16.8M3.6 15h16.8" />
      </svg>
      {{ locale.toUpperCase() }}
      <svg class="w-3 h-3 opacity-50 transition-transform duration-200" :class="{ 'rotate-180': open }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-if="open"
      class="absolute bottom-full mb-2 right-0 bg-[#0e0c02] border border-gold/30 min-w-[90px] z-50"
    >
      <button
        v-for="lang in langs"
        :key="lang.code"
        @click="select(lang.code)"
        class="w-full text-left px-4 py-2 text-xs tracking-widest uppercase font-sans transition-colors duration-150"
        :class="locale === lang.code
          ? 'text-gold bg-gold/5'
          : 'text-white/50 hover:text-white hover:bg-white/5'"
      >
        {{ lang.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useLocale, type Locale } from '~/composables/useLocale'

const { locale, setLocale } = useLocale()
const open = ref(false)
const wrapperRef = ref<HTMLElement | null>(null)

const langs = [
  { code: 'pt' as Locale, label: 'Português' },
  { code: 'en' as Locale, label: 'English' },
  { code: 'es' as Locale, label: 'Español' },
]

function select(code: Locale) {
  setLocale(code)
  open.value = false
}

function handleOutside(e: MouseEvent) {
  if (wrapperRef.value && !wrapperRef.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', handleOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleOutside))
</script>
