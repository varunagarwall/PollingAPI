const Question = require('../models/question');

module.exports.create= async function(req,res){
try {
    console.log(req.body);
    let question = await Question.create(req.body)
    res.status(201).json({
        success: true,
        message: 'Question created successfully',
        data :question,
    })
} catch (error) {
    console.log('******', err);

    return res.status(500).json({
        message: "Internal Server Error"
    });
}
    
}