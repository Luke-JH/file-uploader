<template>
    <span
        :class="[
            `${colorClasses.text} ${colorClasses.background}`,
            'text-xs font-medium px-1.5 py-0.5 rounded',
        ]"
        >{{ text }}</span
    >
</template>
<script setup lang="ts">
type BaseBadgeProps = {
    text: string;
    // color: "green" | "blue";
    colorClasses: {
        text: string;
        background: string;
    };
};
defineProps<BaseBadgeProps>();

export type { BaseBadgeProps };
</script>
