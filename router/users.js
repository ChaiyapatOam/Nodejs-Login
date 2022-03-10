const {User} = require('../model/user')
const express = require('express')
const router = express.Router()
//post 
router.post('/user', async (req,res) => {
    let user = new User({
        name : req.body.name,
        phone : req.body.phone
    })
    user = await user.save()
    res.send(user)
})
// get
router.get('/user', async (req,res) => {
    const user = await User.find()
    res.send(user)
})
//Put Update 
router.put('/user/:id', async (req,res) => {
     const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                phone : req.body.phone
            },
            {new:true}
            )
            res.send(user)
})
//Delete
router.delete('/user/:id', async (req,res) => {
    User.findByIdAndDelete(req.params.id).then(user =>{
        if(user) {
        return res.status(200).json({success: true , message: "Deleted"})
        } else {
            return res.status(404).json({success: false, message: "Can't find"})
        }
    }).catch((err)=>{
        return res.status(400).json({success: false, err:err})
    })
})

module.exports = router
