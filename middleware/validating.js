var Joi=require("joi");
module.exports=function validating(schema){
	return function(req,res,next){
		Joi.validate(req.body,schema,function(){
			if(err){
				err.statusCode=400;
				next(err)
			}else
			{
				next();
			}
		});
	}
}