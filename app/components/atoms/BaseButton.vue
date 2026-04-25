<template>
    <button
        :class="[
            disabled
                ? 'opacity-50 cursor-not-allowed pointer-events-none'
                : 'hover:bg-primary hover:text-white',
            'p-4 rounded-lg border border-primary text-primary ',
        ]"
        @click="emit('click', $event)"
        :type
        :disabled
    >
        {{ text }}
        <font-awesome v-if="icon" :icon="icon" size="lg" />
    </button>
</template>
<script setup lang="ts">
type Props = {
    text?: string;
    icon?: FontAwesomeIcon;
    type?: "button" | "reset" | "submit";
    disabled?: boolean;
};
const { text, icon, type = "button", disabled = false } = defineProps<Props>();

type Emits = {
    click: [event: MouseEvent];
};
const emit = defineEmits<Emits>();
</script>
