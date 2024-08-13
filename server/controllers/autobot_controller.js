const Autobot = require('../models/Autobot')

module.exports = {
    async getAllAutobots(req, res){
        const autobots = await Autobot.find();

        res.json(autobots);
    },
    async createAutobot(req, res){
        const newAutobot = await Autobot.create({
            name: req.body.name,
            color: req.body.color
        })
    
        console.log(newAutobot)
        res.json({
            message: 'Autobot created succesfully',
            autobot: newAutobot
        })
    }
}