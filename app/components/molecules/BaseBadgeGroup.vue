<template>
    <div class="flex gap-3">
        <BaseBadge
            v-for="(badge, index) in badges"
            :key="`${index}${badge.text}Badge`"
            v-bind="badge"
        />
    </div>
</template>
<script setup lang="ts">
import type { BaseBadgeProps } from "../atoms/BaseBadge.vue";

type Props = {
    badges: BaseBadgeProps[];
};

defineProps<Props>();
</script>
