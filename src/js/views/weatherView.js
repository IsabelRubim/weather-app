import { elements } from './base';

export const updateUI = data => {

    const { cityDets, weather } = data;   
    const iconSrc = `./img/weather/${weather.WeatherIcon}.svg`;
    //elements.icon.setAttribute('src', iconSrc);

    elements.details.innerHTML = `
            <div class="title">
                <svg class="title__icon">
                    <use xlink:href="img/sprite.svg#icon-location"></use>
                </svg>
                <h1 class="title__text">Localização Atual</h1>
            </div>
            <h2 class="weather__city">${cityDets.EnglishName}</h2>
            <div class="weather__details">
                <img src="${iconSrc}" alt="Icon temp" class="weather__details--icon">
                <div class="weather__details--temp">${weather.Temperature.Metric.Value}&deg;c</div>
            </div>
            <div class="weather__text">${weather.WeatherText}</div>
    `;    

    let timeSrc = weather.IsDayTime ? 'img/day.png' : 'img/night.png';
    elements.time.setAttribute('src', timeSrc);
};

