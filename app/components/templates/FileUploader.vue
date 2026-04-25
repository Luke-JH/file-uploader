<template>
    <div class="flex flex-col items-center justify-center gap-10 w-[1500px] mx-auto">
        <h1 class="text-2xl font-bold">File Uploader</h1>
        <TechStackBadgeGroup />
        <p class="text-lg max-w-[1000px] text-center">
            This file uploader tool was built to demonstrate clean architecture for a
            production-grade file upload process. Thank you for trying it out!
        </p>
        <div class="grid grid-cols-3 gap-5 w-full min-h-[750px]">
            <form
                class="col-span-2 flex flex-col gap-5 items-center"
                @submit.prevent="emit('submit')"
            >
                <FileInputDropzone
                    class="max-h-[200px]"
                    :input-name="dropzoneInputName"
                    @files-dropped="onFilesDropped"
                />
                <BaseButton
                    text="Upload"
                    :icon="['fas', 'cloud-arrow-up']"
                    type="submit"
                    :disabled="
                        Boolean(
                            uploadState &&
                            ['parsing', 'uploading', 'completed'].includes(uploadState),
                        )
                    "
                />

                <UploadStepsSummary show-arrows class="mt-20" />
            </form>
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

type Emits = {
    submit: [];
};
const emit = defineEmits<Emits>();

const uploadState = useState<UploadState | null>("uploadState");

// Form
const formValues = useFormValues<FileUploadForm>();
const resetForm = useResetForm();

const onFilesDropped = (): void => {
    uploadState.value = "parsing";
    // Defer processing to allow the DOM to update
    setTimeout(() => {
        try {
            const files: File[] = formValues.value.fileList
                ? Array.from(formValues.value.fileList)
                : [];
            setFilesData(files); // TODO add toast if parsing fails
        } catch (e) {
            console.error("Error onFilesDropped:", e);
        }
        uploadState.value = "ready";
    }, 200);
};

const setFilesData = (files: File[]): void => {
    const formFiles: FileUploadForm["filesCustom"] = [];

    for (const file of files) {
        formFiles.push({
            file: file,
            name: file.name,
            selected: true,
            uploading: false,
        });
    }
    resetForm({ values: { filesCustom: formFiles } });
};
</script>
