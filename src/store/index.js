import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        apiKey: "ffe31e99c100069d15842d90b20a07e6",
        fullWeather: null
    },
    mutations: {
        setWeather(state, payload){
            state.fullWeather = payload
        }
    },
    actions: {
        async getWeather({commit, state}, city){
            try {
                let res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)
                let weather = res.data[0]
                const {lat, lon, name} = weather
                // let res2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${state.apiKey}&units=metric&lang=RU`)
                let res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${state.apiKey}&units=metric&lang=RU`)
                let weatherObj = {...res2.data, name: name}
                commit('setWeather', weatherObj)
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        getFullWeather: state => state.fullWeather,
        getDailyWeather: state => state.fullWeather.daily
    }
})

export default store