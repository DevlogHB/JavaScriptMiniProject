function dateTimeHandler (){
    const clockTime = document.getElementById('clock_time');
    const clockDay = document.getElementById('clock_day');

    const date = new Date();
    const time = dateTimeInfo(date.getHours().toString(), date.getMinutes().toString().padStart(2,'0'), date.getSeconds().toString().padStart(2,'0'));
    const day = dateDayInfo(date.getMonth(), date.getDate(), date.getDay())
    
    clockTime.innerText = time;
    clockDay.innerText = day;
}

function dateTimeInfo(hours, minutes, seconds) {
    const timePMAM = hours >= 12 ? 'PM' : 'AM';
    const timeInfo = `${hours}:${minutes}:${seconds} ${timePMAM}`;
    return timeInfo
}

function dateDayInfo(month, days, week){
    
    const dayMonth = month + 1;//getMonth(0-11) 반환
    let dayWeek=""; //getDay(0-6) 반환
    switch (week){
        case 0:
            dayWeek="일";
            break;
        case 1:
            dayWeek="월";
            break;
        case 2:
            dayWeek="화";
            break;
        case 3:
            dayWeek="수";
            break;
        case 4:
            dayWeek="목";
            break;
        case 5:
            dayWeek="금";
            break;
        default:
            dayWeek="토";
    }
    const dayInfo = `${dayMonth}월${days}일(${dayWeek})`;
    return dayInfo;
}
dateTimeHandler();
setInterval(dateTimeHandler,1000);
