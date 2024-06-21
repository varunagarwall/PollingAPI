const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');


const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    option: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option'
    },
    ]}, { timestamps: true }
);



const Question = mongoose.model('Question', questionSchema);
module.exports = Question;