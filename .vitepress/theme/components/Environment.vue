<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      Ambiente:
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="mt-2 opacity-75">
      <span v-if="type === 'node'">
        Esta função de configuração só será executada no ambiente Node.js, você pode ter acesso a API do Node.
      </span>
      <span v-else>
        Esta função de configuração só será executada no lado do cliente. Verifique a compatibilidade do navegador quando importar pacotes.
      </span>
    </div>
  </details>
</template>
