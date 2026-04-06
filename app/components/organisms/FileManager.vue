<template>
    <PlaceholderCard
        v-if="!files"
        text="Files will appear here."
        :icon="['far', 'folder']"
        :transparent="transparent"
        :hide-border="hideBorder"
    />
    <BaseCard v-else :transparent="transparent" :hide-border="hideBorder">
        <div class="flex flex-col">
            <div v-for="(file, index) in files" :key="`${index}${file.name}Item`">
                <p>{{ file.name }}</p>
            </div>
        </div>
    </BaseCard>
</template>
<script setup lang="ts">
import type { FileCustom } from "~/types";

type Props = {
    transparent?: boolean;
    hideBorder?: boolean;
};
defineProps<Props>();

const files = useFieldValue<FileCustom[]>("filesCustom");
</script>
