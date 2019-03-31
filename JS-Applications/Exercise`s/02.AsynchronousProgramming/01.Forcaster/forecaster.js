function attachEvents() {
    let baseUrl = 'https://judgetests.firebaseio.com/';
    $('#submit').on('click', getWeather);
    let signWether = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    };
    async function getWeather(){

      try {
          let code = await $.get(`${baseUrl}locations.json`);

          for (let item of code) {
              if(item.name == $('#location').val()){
                  $('#forecast').css('display', 'block');

                 await getWeatherToday(baseUrl, item.code);

                 await getUpcomingWeather(baseUrl, item.code);

              }
          }
      } catch (err) {
          $('#forecast')
              .css('display', 'block')
              .text(`Error`);
      }
    }

    async function getWeatherToday(url, code){
        let currentWeather = await $.get(`${url}forecast/today/${code}.json`);

        let symbolSpan = $(`<span class="condition symbol">${signWether[currentWeather.forecast.condition]}</span>`);
        let cityName = $(`<span class="forecast-data">${currentWeather.name}</span>`);
        let degreeSpan = $(`<span class="forecast-data">${currentWeather.forecast.low}/${currentWeather.forecast.high}</span>`);
        let conditionSpan = $(`<span class="forecast-data">${currentWeather.forecast.condition}</span>`);
        let mainSpanCondition = $(`<span class="condition"></span>`);
        $(mainSpanCondition)
            .append(cityName)
            .append(degreeSpan)
            .append(conditionSpan);
        $('#current')
            .append(symbolSpan)
            .append(mainSpanCondition);
    }

    async function getUpcomingWeather(url, code) {
        let threeDayWeather = await $.get(`${url}forecast/upcoming/${code}.json`);

        for(let dayWeather of threeDayWeather.forecast){
            let mainSpanUpcoming = $(`<span class="upcoming"></span>`);
            let symbolSpan = $(`<span class="symbol">${signWether[dayWeather.condition]}</span>`);
            let degreeSpan = $(`<span class="forecast-data">${dayWeather.low}/${dayWeather.high}</span>`);
            let conditionSpan = $(`<span class="forecast-data">${dayWeather.condition}</span>`);

            $(mainSpanUpcoming)
                .append(symbolSpan)
                .append(degreeSpan)
                .append(conditionSpan);

            $('#upcoming').append(mainSpanUpcoming)

        }
    }
}