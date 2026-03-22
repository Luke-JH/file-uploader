<template>
    <button
        @click="emit('click', $event)"
        class="bg-primary hover:bg-primary-hover text-white p-4 rounded-lg"
    >
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
