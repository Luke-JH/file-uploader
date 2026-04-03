<template>
    <div class="flex gap-3">
        <BaseBadge
            v-for="badge in badges"
            :key="`${badge.text}Badge`"
            :text="badge.text"
            :color-classes="{
                text: badge.colorClasses.text,
                background: badge.colorClasses.background,
            }"
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
