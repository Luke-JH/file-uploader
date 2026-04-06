<template>
    <div class="flex flex-col items-center justify-center gap-10 w-[1500px] mx-auto">
        <h1 class="text-2xl font-bold">File Uploader</h1>
        <TechStackBadgeGroup />
        <p class="text-lg max-w-[1000px] text-center">
            This file uploader tool was built to demonstrate clean architecture for a
            production-grade file upload process. Thank you for trying it out!
        </p>
        <div class="grid grid-cols-3 gap-5 w-full min-h-[750px]">
            <div class="col-span-2 flex flex-col gap-5 items-center">
                <FileInputDropzone class="max-h-[200px]" :input-name="dropzoneInputName" />
                <BaseButton
                    text="Upload"
                    :icon="['fas', 'cloud-arrow-up']"
                    type="submit"
                    @click="console.log('clicked')"
                />
                <UploadStepsSummary show-arrows class="mt-20" />
            </div>
            <PlaceholderCard
                class="col-span-1"
                text="Files will appear here."
                :icon="['far', 'folder']"
                transparent
            />
        </div>
        <FeaturesText class="max-w-[1000px]" />
    </div>
</template>
<script setup lang="ts">
import UploadStepsSummary from "../organisms/UploadStepsSummary.vue";

type Props = {
    dropzoneInputName: string;
};
defineProps<Props>();
</script>
