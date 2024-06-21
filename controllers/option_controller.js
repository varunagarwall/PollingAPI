const Option = require('../models/option');
const Question = require('../models/question');

module.exports.create= async function(req,res){
try {
    console.log(req.body);
    let question = await Question.findById(req.params.id)

const option=await Option.create({
    option:req.body.option,
    question:req.params.id,
 
})

option.link_to_vote = "http://localhost:8000/options/"+option._id +"/add_vote";
option.save();

question.option.push(option);
question.save();

    res.status(201).json({
        success: true,
        message: 'option created successfully',
        data:option
    })
} catch (error) {
    console.log('******', error);

    return res.status(500).json({
        message: "Internal Server Error"
    });
}
    
}



module.exports.addvote= async function(req,res){
    try {
        console.log(req.params);
        const option=await Option.findByIdAndUpdate(req.params.id,{ $inc: { vote: 1 }});
console.log(option)
        if(option){
            // await option.save();
            console.log(option);
        res.status(201).json({
            success: true,
            message: 'vote created successfully',
            data:option
        })
        }
    } catch (error) {
        console.log('******', error);
    
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
        
    }