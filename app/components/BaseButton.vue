<template>
    <button class="bg-light-2 hover:bg-light-3 p-4 rounded-lg" @click="emit('click', $event)">
        {{ text }}
        <font-awesome v-if="icon" :icon="icon" size="lg" />
    </button>
</template>
<script setup lang="ts">
type Props = {
    text?: string;
    icon?: [string, string];
};
defineProps<Props>();

type Emits = {
    click: [event: MouseEvent];
};
const emit = defineEmits<Emits>();
</script>
