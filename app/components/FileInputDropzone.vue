<template>
    <div
        class="w-full h-full"
        @dragover.prevent="onDragOver"
        @drop.prevent="onDrop"
        @dragleave="onDragLeave"
    >
        <label
            :for="inputName"
            :class="[
                isDragging ? 'bg-light-3' : 'bg-light-2',
                'hover:bg-light-3 flex flex-col items-center justify-center w-full h-full border-2 border-main-text border-dashed rounded-xl cursor-pointer',
            ]"
        >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <font-awesome :icon="['fas', 'file-arrow-up']" class="mb-4" size="2xl" />
                <p class="mb-2 text-md">
                    <span class="font-semibold">Click to upload</span> or drag and drop
                </p>

                <p class="mt-2 text-red-500">{{ errorMessage }}</p>
            </div>

            <input
                :id="inputName"
                type="file"
                class="hidden"
                :accept="accept || '*/*'"
                :multiple="true"
                @change="onChange"
            />
        </label>
    </div>
</template>

<script setup lang="ts">
// Props
type Props = {
    inputName: string;
    accept?: string;
};
const props = defineProps<Props>();

// Emits
type Emits = {
    (e: "filesDropped"): void;
};
const emit = defineEmits<Emits>();

// Form
const { value: files, errorMessage } = useField<FileList | undefined>(props.inputName);

// Events
const isDragging = ref<boolean>(false);

const onDragOver = (): void => {
    isDragging.value = true;
};

const onDragLeave = (event: DragEvent): void => {
    const related = event.relatedTarget as HTMLElement | null;
    const currentTarget = event.currentTarget as HTMLElement | null;
    if (!related || !currentTarget?.contains(related)) isDragging.value = false;
};

const onDrop = (event: DragEvent): void => {
    isDragging.value = false;
    const droppedFiles = event.dataTransfer?.files;
    if (droppedFiles) {
        files.value = droppedFiles;
        emit("filesDropped");
    }
};

const onChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
        files.value = target.files;
        emit("filesDropped");
    }
};
</script>
