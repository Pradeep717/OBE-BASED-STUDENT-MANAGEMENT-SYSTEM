const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const subjectSchema = new Schema({

    sub_name:{
        type: String, 
    },
   
    sub_code:{
        type: String, 
    },
    sub_class:{
        type: Number, 
    },
    sub_credit:{
        type:Number,
      
    },
    sub_type:{
        type: String, 
    },
    sub_enrollmentkey:{
        type : String,
    }
  



}, { timestamps: true });

module.exports = mongoose.model("Subject", subjectSchema);

