<template>
    <div
        :class="[
            { 'rounded-xl border border-primary-text': border },
            'flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-10 p-6 ',
        ]"
    >
        <template v-for="(icon, index) in icons" :key="`${index}Group`">
            <div
                class="flex flex-col items-center gap-4 font-bold w-full lg:w-auto text-center min-w-[100px]"
            >
                <IconBubble v-bind="icon" />
                <p class="text-lg">{{ icon.text }}</p>
            </div>

            <template v-if="showArrows && !isFinalItem(index)">
                <!-- Desktop arrow -->
                <font-awesome
                    :icon="['fas', 'arrow-right']"
                    class="hidden lg:block mx-4 shrink-0"
                />
                <!-- Mobile vertical connector -->
                <div class="flex lg:hidden flex-col items-center py-2 gap-1">
                    <div class="w-0.5 h-8 bg-primary-text opacity-40" />
                    <font-awesome :icon="['fas', 'chevron-down']" class="opacity-60" />
                </div>
            </template>
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
