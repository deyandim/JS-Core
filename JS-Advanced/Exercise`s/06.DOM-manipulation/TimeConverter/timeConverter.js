function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', convert);
    document.getElementById('hoursBtn').addEventListener('click', convert);
    document.getElementById('minutesBtn').addEventListener('click', convert);
    document.getElementById('secondsBtn').addEventListener('click', convert);

    function convert() {
        if(days.value){
            hours.value = days.value * 24;
            minutes.value = days.value * 24 * 60;
            seconds.value = days.value * 24 * 60 * 60;
        }else if(hours.value){
            days.value = hours.value / 24;
            minutes.value = hours.value * 60;
            seconds.value = hours.value * 60 * 60;
        }else if(minutes.value){
            days.value = minutes.value / 60 / 24;
            hours.value = minutes.value / 60 ;
            seconds.value = minutes.value * 60 ;
        }else if(seconds.value){
            days.value = seconds.value / 24 / 60 / 60;
            hours.value = seconds.value / 60 / 60 ;
            minutes.value = seconds.value / 60 ;
        }
    }

}