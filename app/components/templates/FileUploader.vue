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
            </div>
            <PlaceholderCard
                class="col-span-1"
                text="Files will appear here."
                :icon="['far', 'folder']"
            />
        </div>
        <h2 class="font-bold">Features</h2>
        <p class="max-w-[1000px]">
            The file uploader comes with several unique features. The first of which is the file
            validation. This utilizes a vee-validate schema to ensure the file list is in the
            correct input format before allowing submit and parsing the data.
        </p>
    </div>
</template>
<script setup lang="ts">
type Props = {
    dropzoneInputName: string;
};
defineProps<Props>();
</script>
