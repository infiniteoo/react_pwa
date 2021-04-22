import axios from 'axios';

export const fetchWeather = async (query) => {

    const URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "25ab3c34a12d0c6508e3ac9bdd6bfe25";

    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'imperial',
            APPID: API_KEY,
        }
    });

    return data;

}