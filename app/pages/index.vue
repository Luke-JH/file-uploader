<template>
    <FileUploader dropzone-input-name="files" />
</template>
<script setup lang="ts">
type FileUploadForm = {
    files?: FileList;
};

useForm<FileUploadForm>();
</script>
