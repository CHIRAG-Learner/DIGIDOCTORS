const mongoose = require('mongoose');
const Schema=mongoose.Schema;

var uploadschema= new mongoose.Schema
( {
    imagename:{ type:String, default:"/" },
    description: {type:String,default:"Not Available"},
    name: {type:String,dafault:"-"},
    speciality:{type:String},
    exp:{type:Number},
    upload:{type:String},
    date:{type:Date},
    hours:{type:Number},
    minutes:{type:Number},
    seconds:{type:Number}
    }
);

var all_orthopaedics=mongoose.model('all_orthopaedics',uploadschema);

module.exports=all_orthopaedics;
