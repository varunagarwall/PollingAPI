const express=require('express');

const router =express.Router();
const questionController=require('../controllers/question_controller');

router.post('/create',questionController.create)

router.use('/options',require('./option'));



module.exports=router;
