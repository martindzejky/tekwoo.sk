export function preloadImage(src: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = src;
    });
}
