type FileCustom = {
    file: File;
    name: string;
    selected: boolean;
    uploading: boolean;
};

type FileUploadForm = {
    fileList: FileList | null;
    filesCustom: FileCustom[] | null;
};

type UploadState = "parsing" | "ready" | "uploading" | "completed";

export type { FileCustom, FileUploadForm, UploadState };
