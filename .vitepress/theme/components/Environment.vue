<script setup lang="ts">
defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
<<<<<<< HEAD
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      Ambiente:
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
=======
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      Environment:
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83
    </summary>

    <div class="pt2 opacity-75">
      <span v-if="type === 'node'">
        Esta função de configuração só será executada no ambiente Node.js, você pode ter acesso a API do Node.
      </span>
      <span v-else>
        Esta função de configuração só será executada no lado do cliente. Verifique a compatibilidade do navegador quando importar pacotes.
      </span>
    </div>
  </details>
</template>
