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
                <FileInputDropzone
                    class="max-h-[200px]"
                    :input-name="dropzoneInputName"
                    @files-dropped="onFilesDropped"
                />
                <BaseButton
                    text="Upload"
                    :icon="['fas', 'cloud-arrow-up']"
                    type="submit"
                    @click="console.log('clicked')"
                />
                <UploadStepsSummary show-arrows class="mt-20" />
            </div>
            <FileManager class="col-span-1" transparent />
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

// State
const loading = ref(false);

// Form
const form = useFormValues<FileUploadForm>();
const resetForm = useResetForm();

const onFilesDropped = (): void => {
    loading.value = true;
    // Defer processing to allow the DOM to update
    setTimeout(() => {
        try {
            const files: File[] = form.value.fileList ? Array.from(form.value.fileList) : [];
            setFilesData(files); // TODO add toast if parsing fails
        } catch (e) {
            console.error("Error onFilesDropped:", e);
        }
        loading.value = false;
    }, 200);
};

const setFilesData = (files: File[]): void => {
    const formFiles: FileUploadForm["filesCustom"] = [];

    for (const file of files) {
        formFiles.push({
            file: file,
            name: file.name,
            selected: true,
        });
    }
    resetForm({ values: { filesCustom: formFiles } });
};
</script>
