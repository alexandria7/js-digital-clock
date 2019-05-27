function updateTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeOfDay = '';
    let months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    let days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    if (hours == 0) {
        hours = 12;
        timeOfDay = 'AM';
    }

    if (hours < 12) {
        timeOfDay = 'AM';
    } else {
        timeOfDay = 'PM';
        hours -= 12;
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let dayOfWeek = days[date.getDay()];
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    let fullDate = `${dayOfWeek}, ${month} ${day}, ${year}`
  

    $('#date').text(fullDate);
    $('.time-section:nth-child(2)').text(hours);
    $('.time-section:nth-child(3)').text(minutes);
    $('.time-section:nth-child(4)').text(seconds);
    $('#am-pm').text(timeOfDay);
}

$(document).ready(function() {
    updateTime();
    window.setInterval(updateTime, 1000);

  });
