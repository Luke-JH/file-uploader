export function useFlowbite(callback: Function): void {
    if (import.meta.client) {
        import("flowbite").then((flowbite) => {
            callback(flowbite);
        });
    }
}
