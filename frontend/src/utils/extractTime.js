// export function extractTime(dateString){
//     const date = new Date(dateString);
//     const hours = padZero(date.getHours());
//     const mints = padZero(date.getMinutes());
//     return `${hours} : ${mints}`;
// }

// function padZero(number){
//     return number.toString().padStart(2, "0");
// };


export function extractDateTime(dateString) {
    const date = new Date(dateString);
  
    // Convert to local time zone (Pakistan Standard Time)
    const options = { timeZone: 'Asia/Karachi', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
    const formatter = new Intl.DateTimeFormat([], options);
    const [
      { value: month },,
      { value: day },,
      { value: year },,
      { value: hours },,
      { value: minutes }
    ] = formatter.formatToParts(date);
  
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}`;
  
    return { date: formattedDate, time: formattedTime };
  }
  
  function padZero(number) {
    return number.toString().padStart(2, "0");
  }
  
