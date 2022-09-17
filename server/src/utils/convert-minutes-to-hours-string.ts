export function convertMinutesToHourString(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60

    return `${String(hours).padStart(2, '0')}:${String(min).padStart(2, '0')}`
}