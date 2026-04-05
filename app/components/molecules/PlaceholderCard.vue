<template>
    <BaseCard :transparent="transparent" :hide-border="hideBorder">
        <div class="flex flex-col items-center justify-center h-full gap-2">
            <font-awesome v-if="icon" :icon="icon" size="2xl" />
            <p v-if="text" class="text-center">{{ text }}</p>
        </div>
    </BaseCard>
</template>
<script setup lang="ts">
import type { FontAwesomeIcon } from "~/types";

type Props = {
    text?: string;
    icon?: FontAwesomeIcon;
    transparent?: boolean;
    hideBorder?: boolean;
};
defineProps<Props>();
</script>
