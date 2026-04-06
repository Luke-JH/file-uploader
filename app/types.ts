type FontAwesomeIcon = [string, string];

type FileCustom = {
    file: File;
    name: string;
    selected: boolean;
};

type FileUploadForm = {
    fileList: FileList | null;
    filesCustom: FileCustom[] | null;
};

export type { FontAwesomeIcon, FileCustom, FileUploadForm };
