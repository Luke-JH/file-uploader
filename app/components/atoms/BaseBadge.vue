<template>
    <span
        :class="[
            `${colorClasses.text} ${colorClasses.background}`,
            'text-xs font-bold px-1.5 py-1 rounded',
        ]"
        >{{ text }}</span
    >
</template>
<script setup lang="ts">
type BaseBadgeProps = {
    text: string;
    colorClasses: {
        text: string;
        background: string;
    };
};
defineProps<BaseBadgeProps>();

export type { BaseBadgeProps };
</script>
