export default function formatDateRange(dateStart: string | Date, dateEnd: string | Date) {
    const start = new Date(dateStart);
    const end = new Date(dateEnd);

    const startDay = start.getDate();
    const endDay = end.getDate();

    const month = start.toLocaleString('en-US', { month: 'short' }).toLowerCase();

    return `${startDay} - ${endDay} ${month}`;
}
