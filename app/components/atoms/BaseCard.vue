<template>
    <div
        :class="[
            transparent ? 'bg-transparent' : 'bg-secondary',
            { 'border border-primary rounded-2xl shadow-xl': !hideBorder },
            ' w-full justify-center  p-8',
        ]"
    >
        <slot />
    </div>
</template>
<script setup lang="ts">
type Props = {
    transparent?: boolean;
    hideBorder?: boolean;
};
defineProps<Props>();
</script>
