const mongoose= require('mongoose');
const timestamps = require('mongoose-timestamp');


const optionSchema = new mongoose.Schema ({
    option:{
        type:String,
        // required:true
    },

    question:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true
    },
    vote:{
        type:Number,
        default:0
    },
    link_to_vote: {
        type: String
    }
    
},{ timestamps: true }
);



const Option= mongoose.model('Option',optionSchema);
module.exports=Option;