export function extractTime(dateString){
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const mints = padZero(date.getMinutes());
    return `${hours} : ${mints}`;
}

function padZero(number){
    return number.toString().padStart(2, "0");
};
