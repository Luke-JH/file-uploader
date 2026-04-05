<template>
    <div
        :class="[
            `${colorClasses.background}`,
            'flex justify-center items-center w-14 h-14 rounded-full',
        ]"
    >
        <font-awesome :icon="icon" size="2xl" :class="`${colorClasses.icon}`" />
    </div>
</template>
<script setup lang="ts">
import type { FontAwesomeIcon } from "~/types";

type IconBubbleProps = {
    icon: FontAwesomeIcon;
    colorClasses: {
        icon: string; // font awesome expects a text class e.g. "text-blue-500"
        background: string;
    };
};

defineProps<IconBubbleProps>();

export type { IconBubbleProps };
</script>
