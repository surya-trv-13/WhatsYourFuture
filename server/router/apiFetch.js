//This is what to be done in the React app during fetch so delete in future

const Router = require('express')
const {getHoroscope} = require('../services/service')

const router = Router()

router.get('/' , async (request , response) => {
    var zodiac = request.query.zodiac[0].toUpperCase() + request.query.zodiac.slice(1)
    
    try{
        const res = await getHoroscope(zodiac)
        response.status(200).send({result : res.data[zodiac]});
    }catch(error){
        response.status(500).send({error})
    } 
})


module.exports = router