export function getHeatColor(count: number, maxCount: number): string {
    if (maxCount === 0) return "rgba(0,0,0,0.05)";

    const intensity = Math.min(count / maxCount, 1); // 0..1
    const r = Math.round(255 * intensity);
    const g = 50;
    const b = 50;
    return `rgb(${r}, ${g}, ${b})`; // darker red as count goes up
}
