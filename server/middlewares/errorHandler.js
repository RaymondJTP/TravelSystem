const errorHandler = (err,req,res,next) => {
    console.log(err);
    if(err.name == 'SequelizeValidationError'){
        res.status(400).json({message: err.errors[0].message})
    }else if(err.name == 'wrongImageType'){
        res.status(400).json({message: 'Please input image format'})
    }else if(err.name == 'MulterError'){
        res.status(400).json({message: 'File size must be under 225K'})
    }else if(err.name == 'SequelizeUniqueConstraintError'){
        res.status(400).json({message: 'Email has already been existed'})
    }else if(err.name == 'Not found'){
        res.status(404).json({message: err.message})
    }else if(err.name == 'notuser'){
        res.status(403).json({message: err.message})
    }else if(err.name == 'Unauthorized' || err.name == "JsonWebTokenError"){
        res.status(401).json({message: 'Your account is unauthorized'})
    }else if(err.name == 'Invalid'){
        res.status(401).json({message: 'Email/password Invalid'})
    }else if(err.name == 'You cant access'){
        res.status(403).json({message: 'You cant access'})
    }else if(err.name == 'invalid'){
        res.status(400).json({message: err.message})
    }else if(err.name == 'email/password'){
        res.status(400).json({message: err.message})
    }else{
        res.status(500).json(err)
    }
}

module.exports = errorHandler