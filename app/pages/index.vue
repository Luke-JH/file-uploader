<template>
    <FileUploader dropzone-input-name="fileList" />
</template>

<script setup lang="ts">
import { array, object } from "yup";
import type { FileUploadForm } from "~~/types/files";

useForm<FileUploadForm>({
    initialValues: {
        fileList: null,
        filesCustom: null,
    },
    validationSchema: {
        filesCustom: array(object().required()).required("Files are required to begin upload."),
    },
});
</script>
