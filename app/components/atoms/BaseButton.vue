<template>
    <button
        :class="[
            disabled
                ? 'opacity-50 cursor-not-allowed pointer-events-none'
                : 'hover:bg-primary hover:text-white',
            'p-4 rounded-lg border border-primary text-primary ',
        ]"
        :type
        :disabled
        @click="emit('click', $event)"
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
const {
    text = undefined,
    icon = undefined,
    type = "button",
    disabled = false,
} = defineProps<Props>();

type Emits = {
    click: [event: MouseEvent];
};
const emit = defineEmits<Emits>();
</script>
