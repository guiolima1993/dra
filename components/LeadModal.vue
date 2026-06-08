<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[9999] flex items-center justify-center px-4"
        @click.self="$emit('update:modelValue', false)"
      >
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>

        <!-- Modal -->
        <div class="relative w-full max-w-[480px] bg-[#0e0c02] border border-gold/40 rounded-tr-[22px] rounded-bl-[22px] p-8 md:p-10 z-10">

          <!-- Fechar -->
          <button
            @click="$emit('update:modelValue', false)"
            class="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Header -->
          <div class="text-center mb-7">
            <h3 class="font-bold text-2xl md:text-3xl text-white mb-2">{{ t('modal_title') }}</h3>
            <p class="text-white/50 text-sm">{{ t('modal_subtitle') }}</p>
          </div>

          <!-- Sucesso -->
          <div v-if="success" class="text-center py-6">
            <div class="w-14 h-14 border border-gold/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-white text-lg font-semibold mb-1">{{ t('modal_success_title') }}</p>
            <p class="text-white/50 text-sm">{{ t('modal_success_body') }}</p>
          </div>

          <!-- Formulário -->
          <form v-else @submit.prevent="submit" class="space-y-4">
            <div>
              <label class="block text-white/60 text-xs tracking-widest uppercase mb-1">{{ t('modal_label_name') }}</label>
              <input
                v-model="form.name"
                type="text"
                required
                :placeholder="t('modal_placeholder_name')"
                class="w-full bg-black/30 border border-gold/25 focus:border-gold/60 outline-none px-4 py-3 text-white text-sm placeholder-white/20 transition-colors rounded-none"
              />
            </div>

            <div>
              <label class="block text-white/60 text-xs tracking-widest uppercase mb-1">{{ t('modal_label_phone') }}</label>
              <input
                v-model="form.phone"
                type="tel"
                required
                placeholder="(11) 99999-9999"
                maxlength="15"
                @input="maskPhone"
                class="w-full bg-black/30 border border-gold/25 focus:border-gold/60 outline-none px-4 py-3 text-white text-sm placeholder-white/20 transition-colors rounded-none"
              />
            </div>

            <div>
              <label class="block text-white/60 text-xs tracking-widest uppercase mb-1">{{ t('modal_label_email') }}</label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="seu@email.com"
                class="w-full bg-black/30 border border-gold/25 focus:border-gold/60 outline-none px-4 py-3 text-white text-sm placeholder-white/20 transition-colors rounded-none"
              />
            </div>

            <div>
              <label class="block text-white/60 text-xs tracking-widest uppercase mb-1">{{ t('modal_label_crm') }}</label>
              <input
                v-model="form.crm"
                type="text"
                required
                :placeholder="t('modal_placeholder_crm')"
                class="w-full bg-black/30 border border-gold/25 focus:border-gold/60 outline-none px-4 py-3 text-white text-sm placeholder-white/20 transition-colors rounded-none"
              />
            </div>

            <p v-if="error" class="text-red-400 text-xs text-center">{{ error }}</p>

            <button
              type="submit"
              :disabled="loading"
              class="btn-shimmer btn-gold btn-hero animate-pulse-gold w-full py-4 font-bold uppercase tracking-widest text-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading">{{ t('modal_sending') }}</span>
              <span v-else>{{ t('modal_submit') }}</span>
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useLocale } from '~/composables/useLocale'

defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])
const { t } = useLocale()

const WEBHOOK_URL = 'https://core.emfy.com/widgets/webhooks/?module=site_integration&amo_account_id=33568291&hook_id=29fd9d74-b41a-476c-b70d-3f6bd68ce478'

const form = reactive({ name: '', phone: '', email: '', crm: '' })

function maskPhone(e: Event) {
  const input = e.target as HTMLInputElement
  const digits = input.value.replace(/\D/g, '').slice(0, 11)
  let masked = ''
  if (digits.length === 0) {
    masked = ''
  } else if (digits.length <= 2) {
    masked = `(${digits}`
  } else if (digits.length <= 6) {
    masked = `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  } else if (digits.length <= 10) {
    masked = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  } else {
    masked = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }
  form.phone = masked
}
const loading = ref(false)
const success = ref(false)
const error = ref('')

async function submit() {
  loading.value = true
  error.value = ''

  try {
    const payload = new URLSearchParams({
      'name': form.name,
      'phone': form.phone,
      'email': form.email,
      'crm': form.crm,
    })

    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: payload.toString(),
      mode: 'no-cors',
    })

    success.value = true
    setTimeout(() => {
      emit('update:modelValue', false)
      success.value = false
      Object.assign(form, { name: '', phone: '', email: '', crm: '' })
    }, 3000)
  } catch {
    error.value = 'Erro ao enviar. Tente novamente.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
