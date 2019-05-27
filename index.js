function updateTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    $('.time-section:first-child').text(hours);
   
    $('.time-section:nth-child(2)').text(minutes);
  
    $('.time-section:last-child').text(seconds);
}

$(document).ready(function() {
    
    setInterval(updateTime(), 1000);

  });