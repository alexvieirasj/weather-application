const MyKey = 'JOkWDb18AeJmGYGEvXkuwmO57HcfO010'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName => 
`${baseUrl}/locations/v1/cities/search?apikey=${MyKey}&q=${cityName}`

const getWeatherUrl = cityKey => 
`${baseUrl}/currentconditions/v1/${cityKey}?apikey=${MyKey}&language=pt-br`


const fetchData = async url => {
    try {
        const response = await fetch(url)

        if(!response.ok) {
            throw new Error('Não foi possível obter os dados')
        }

        return response.json()
    } catch ({ name, message }) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))
const getCityWeather = cityKey => fetchData(getWeatherUrl(cityKey))

