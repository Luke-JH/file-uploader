<template>
    <div class="w-full flex flex-col items-center justify-center gap-5">
        <p class="text-2xl font-bold">File Uploader</p>
        <FileInputDropzone class="max-w-[1000px] max-h-[250px]" input-name="testInput" />
        <BaseButton
            text="Upload"
            :icon="['fas', 'cloud-arrow-up']"
            type="submit"
            @click="console.log('clicked')"
        />
    </div>
</template>
<script setup lang="ts">
type FileUploadForm = {
    files?: FileList;
};

useForm<FileUploadForm>();
</script>
