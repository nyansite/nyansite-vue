<template>
  <input
    id="input"
    v-model="modelValue"
    :type="props.type || 'text'"
    v-bind="$attrs"
    p="x-4 y-2"
    w="250px"
    bg="transparent"
    border="~ rounded orange"
    outline="none active:none"
  >
</template>

<script setup lang="ts">
const modelValue = defineModel()
const props = defineProps<{
    type: string
}>()
</script>
