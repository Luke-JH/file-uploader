export function useFlowbite(callback: () => void): void {
    if (import.meta.client) {
        import("flowbite").then(() => {
            callback();
        });
    }
}
