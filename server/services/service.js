const axios = require('axios')

var getHoroscope = (zodiac) => {
    return axios.get(
        `https://devbrewer-horoscope.herokuapp.com/today/short/${zodiac}`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    )
}

module.exports = {
    getHoroscope
}