export function getFormattedDate(date){
    return date.toISOString().split("T")[0];
}

export function getDateMinusDays(date, days){
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}