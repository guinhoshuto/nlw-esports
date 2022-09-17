export function convertHourStringToMinutes(hourSring: string) {
    const [hour, minutes] = hourSring.split(':').map(Number)
    const minuteAmount = (hour * 60) + minutes;

    return minuteAmount
}