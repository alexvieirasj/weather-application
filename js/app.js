const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameCard = document.querySelector('[data-js=city-name]')
const cityWeatherCard = document.querySelector('[data-js=city-weather]')
const cityTemperatureCard = document.querySelector('[data-js=city-temperature]')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeIconCard = document.querySelector('[data-js="time-icon"]')
let timeImage = document.querySelector('[data-js="time"]')

const showFields = (timeIcon, LocalizedName, WeatherText, Temperature) => {
    //Popula os campos no DOM
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

const showCityWeather = async cityName => {
    const [{ Key, LocalizedName }] = await getCityData(cityName) 
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key) 
    //busca os dados do tempo atraves da chave da cidade
    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

    timeImage.src = IsDayTime ? './src/day.svg' : './src/night.svg'  

    showFields(timeIcon, LocalizedName, WeatherText, Temperature)
}

cityForm.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.city.value

    showCity()
    showCityWeather(inputValue)    
    cityForm.reset()
})