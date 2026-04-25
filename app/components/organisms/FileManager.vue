<template>
    <PlaceholderCard
        v-if="!files"
        text="Files will appear here."
        :icon="['far', 'folder']"
        :transparent="transparent"
        :hide-border="hideBorder"
    />
    <BaseCard v-else :transparent="transparent" :hide-border="hideBorder">
        <div class="flex flex-col gap-3">
            <div
                v-for="(file, index) in files"
                :key="`${index}${file.name}Item`"
                class="flex items-center gap-10"
            >
                <p>{{ file.name }}</p>
                <font-awesome v-if="file.uploading" :icon="['fas', 'spinner']" spin />
            </div>
        </div>
    </BaseCard>
</template>
<script setup lang="ts">
type Props = {
    transparent?: boolean;
    hideBorder?: boolean;
};
defineProps<Props>();

const files = useFieldValue<FileCustom[]>("filesCustom");
</script>
