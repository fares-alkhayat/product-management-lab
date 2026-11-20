const mongoose = require('mongoose')

function validateObjectId(req,res,next){
    if(!mongoose.Types.ObjectId.isValid(req.params.productId)){
       return res.status(404).json({message:'The product you are looking for is not found. Please check and try again.'})
    }
    next()
}

module.exports = validateObjectId