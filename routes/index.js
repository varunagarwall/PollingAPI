const express=require('express');

const router =express.Router();

const homeController=require('../controllers/home_controller');
console.log('router loaded');

router.get('/',homeController.home);
router.use('/questions',require('./question'))

router.use('/options',require('./option'));


module.exports=router;
