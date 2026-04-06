<template>
    <div
        :class="[
            { 'rounded-xl border border-primary-text': border },
            'flex items-center justify-between gap-10 p-10',
        ]"
    >
        <template v-for="(icon, index) in icons" :key="`${index}Group`">
            <div class="flex flex-col items-center justify-center gap-4 font-bold">
                <IconBubble v-bind="icon" />
                <p class="text-lg">{{ icon.text }}</p>
            </div>

            <font-awesome
                v-if="showArrows && !isFinalItem(index)"
                :icon="['fas', 'arrow-right']"
                class="mx-4 shrink-0"
            />
        </template>
    </div>
</template>
<script setup lang="ts">
import type { IconBubbleProps } from "../atoms/IconBubble.vue";

interface GroupIcon extends IconBubbleProps {
    text: string;
}

type Props = {
    icons: GroupIcon[];
    border?: boolean;
    showArrows?: boolean;
};

const props = defineProps<Props>();

const isFinalItem = (index: number): boolean => index === props.icons.length - 1;

export type { GroupIcon };
</script>
