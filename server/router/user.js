const {Router} = require('express')
const {UserModel} = require('../model/user') 

const router = Router()

// POST /user
router.post('/user' , async (request , response) => {
    var user = new UserModel(request.body)

    try{
        await user.save()
        response.status(201).send({result : user})
    }catch(error){
        response.status(400).send({error})
    }
})

module.exports = router