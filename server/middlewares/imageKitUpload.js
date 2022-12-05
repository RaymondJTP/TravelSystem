const axios = require('axios')
const FormData = require('form-data');

const uploadImage = async (req,res,next) => {
    
    try {
        if(req.file == undefined){
            next()
        }else{
            let privateKey = 'private_PnKIPkUE90sksqgYPUr3Eg1aCzM='+':'
            
            if(!req.file.mimetype.includes('image')){
                throw ({name: 'wrongImageType'})
            }

            const form = new FormData();
            form.append('file', req.file.buffer.toString('base64'));
            form.append('fileName', req.file.originalname);

            let formattedPrivateKey = Buffer.from(privateKey).toString('base64')
            let formattedData = form.getHeaders()
    
            const response = await axios({
                method: 'POST',
                url : 'https://upload.imagekit.io/api/v1/files/upload',
                data : form,
                headers: {
                    ...formattedData,
                    Authorization: "Basic " + formattedPrivateKey       
                },    
            })
            .then(response => {
                req.body.Image = response.data.url
                
                next()
            })
            .catch(err => {

                next(err)
            })
        }
        
    } catch (err) {
        console.log(err);
        next(err)
    }
}


module.exports= uploadImage