<template>
    <FileUploader dropzone-input-name="fileList" @submit="onSubmit" />
</template>

<script setup lang="ts">
import { array, object } from "yup";
import { useToastStore } from "~~/stores/toast-store";
import type { Path, PathValue } from "vee-validate";

// Form
const {
    values: formValues,
    handleSubmit,
    setFieldValue,
} = useForm<FileUploadForm>({
    initialValues: {
        fileList: null,
        filesCustom: null,
    },
    validationSchema: {
        filesCustom: array(object().required()).required("Files are required to begin upload."),
    },
});

// State
const uploadState = useState<UploadState | null>("uploadState", () => null);

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

const setFieldCustom = <K extends keyof FileCustom>(
    file: FileCustom,
    fieldName: K,
    value: FileCustom[K],
): void => {
    const index = formValues.filesCustom?.findIndex((formFile) => file.name === formFile.name);
    if (index === undefined || index === -1) return;

    const fieldKey = `filesCustom[${index}].${fieldName}` as Path<FileUploadForm["filesCustom"]>;

    setFieldValue(fieldKey, value as PathValue<FileUploadForm["filesCustom"], typeof fieldKey>);
};

const mockUploadFiles = async (): Promise<void> => {
    const files = formValues.filesCustom;
    if (!files) return;

    for (const file of files) {
        setFieldCustom(file, "uploading", true);
        await sleep(3000);
        setFieldCustom(file, "uploading", false);
    }
};

const onSubmit = handleSubmit(async () => {
    uploadState.value = "uploading";
    const toastStore = useToastStore();
    toastStore.addToast(
        {
            text: "Upload started",
            icon: ["fas", "check"],
        },
        4000,
    );
    await mockUploadFiles();
    toastStore.addToast(
        {
            text: "Upload completed",
            icon: ["fas", "check"],
        },
        4000,
    );
    uploadState.value = "completed";
});
</script>
