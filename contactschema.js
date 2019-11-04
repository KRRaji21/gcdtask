var mongoose=require('mongoose');
var contactapp=mongoose.model('Contactapp',{
    name:{type:String},
    phone:{type:Number},
    mailid:{type:String}
    
});
module.exports={ contactapp };