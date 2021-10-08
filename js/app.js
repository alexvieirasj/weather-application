const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameCard = document.querySelector('[data-js=city-name]')
const cityWeatherCard = document.querySelector('[data-js=city-weather]')
const cityTemperatureCard = document.querySelector('[data-js=city-temperature]')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeIconCard = document.querySelector('[data-js="time-icon"]')
let timeImage = document.querySelector('[data-js="time"]')

const showFields = fields => {
    const { timeIcon, LocalizedName, WeatherText, Temperature } = fields
    
    timeIconCard.innerHTML = timeIcon
    cityNameCard.textContent = LocalizedName
    cityWeatherCard.textContent = WeatherText
    cityTemperatureCard.textContent = Temperature.Metric.Value
}

const showCity = () => {
    if(cityCard.classList.contains('d-none')){
        cityCard.classList.remove('d-none')
    }
}

const showCityWeather = async event  => {
    event.preventDefault()

    const cityName = event.target.city.value
    const [{ Key, LocalizedName }] = await getCityData(cityName) 
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key) 
    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

    timeImage.src = IsDayTime ? './src/day.svg' : './src/night.svg'  

    showFields({ timeIcon, LocalizedName, WeatherText, Temperature })
    showCity()    
    cityForm.reset()
}

cityForm.addEventListener('submit', showCityWeather)

