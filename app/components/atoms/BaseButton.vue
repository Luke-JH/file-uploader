<template>
    <button
        class="p-4 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white"
        :type="type ?? 'button'"
        @click="emit('click', $event)"
    >
        {{ text }}
        <font-awesome v-if="icon" :icon="icon" size="lg" />
    </button>
</template>
<script setup lang="ts">
import type { FontAwesomeIcon } from "~~/types/common";

type Props = {
    text?: string;
    icon?: FontAwesomeIcon;
    type?: "button" | "reset" | "submit";
};
defineProps<Props>();

type Emits = {
    click: [event: MouseEvent];
};
const emit = defineEmits<Emits>();
</script>
