<template>
    <div
        :class="[
            transparent ? 'bg-transparent' : 'bg-zinc-300',
            { 'border border-gray-100 rounded-2xl shadow-xl': !hideBorder },
            ' w-full justify-center  p-8  ',
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
