
function insertImage(req,res)
{
    //console.log(req.file.filename)
    if (!req.file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
    	res.json({
    		status:500,
    		message:'File Format not supported'
    	})
    }else{
    	 res.json(req.file)
    }
   
}



module.exports={insertImage}