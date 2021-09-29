const express = require('express')
const router = express.Router();
const path = require('path');
const testController = require('../controllers/testController')
const authController = require('../controllers/authController')

router.get('/test', function(req, res){
    let filePath = path.join(__dirname + '/../../public/test.html')
    res.sendFile(filePath)
})

router.get('/register', (req, res) => {
    let filePath = path.join(__dirname + '/../../public/register.html')
    res.sendFile(filePath)
})

router.get('/login', (req, res) => {
    let filePath = path.join(__dirname + '/../../public/login.html')
    res.sendFile(filePath)
})

router.get('/form-send', testController.addTodo)
router.get('/delete-todo', testController.deleteTodo)
router.post('/auth/signup', authController.singUp)
router.post('/auth/signin', authController.singIn)

module.exports = router