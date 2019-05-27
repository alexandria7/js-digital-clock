function updateTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeOfDay = '';

    if (hours < 12) {
        timeOfDay = 'AM';
    } else {
        timeOfDay = 'PM';
    }

    $('.time-section:first-child').text(hours);
    $('.time-section:nth-child(2)').text(minutes);
    $('.time-section:nth-child(3)').text(seconds);
    $('#am-pm').text(timeOfDay);
}

$(document).ready(function() {
    updateTime();
    window.setInterval(updateTime, 1000);

  });
