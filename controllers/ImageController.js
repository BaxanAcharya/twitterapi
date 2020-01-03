
function insertImage(req,res,next)
{
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error("You can upload only image files!"), false);
    }

}



module.exports={insertImage}