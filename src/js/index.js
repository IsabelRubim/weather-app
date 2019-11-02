import Weather from './models/Weather';
import * as weatherView from './views/weatherView';
import { elements } from './views/base';
import "../scss/main.scss";

const weather = new Weather();

elements.cityForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const city = elements.cityForm.city.value.trim();
    elements.cityForm.reset();

    weather.updateCity(city)
        .then(data => weatherView.updateUI(data))
        .catch(err => console.log(err));

    localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
    weather.updateCity(localStorage.getItem('city'))
        .then(data => weatherView.updateUI(data))
        .catch(err => console.log(err));
}