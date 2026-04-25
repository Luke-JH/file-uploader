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

export type { FileCustom, FileUploadForm };
