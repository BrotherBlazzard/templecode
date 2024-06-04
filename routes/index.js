const router = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');  


routes.get('/', lesson1Controller.jordanriver);
routes.get('/provocitycenter', lesson1Controller.provocitycenter);



module.exports = router;