const express = require('express');
const controlStudent = require('../controllers');
const router = express.Router();
//const controllerMusic = require('./../controllers/musics')
//const {random} = require('./..:controllers/musics')

router.get('/', (req, res) => {
    res.status(200).json({ success: 'RACINE API' });
});

router.get('/test', (req, res) => {
    res.status(200).json({ success: 'TEST' });
});

router.get('/random',controlStudent.random);

router.get('/students',controlStudent.findAll);
router.post('/students',controlStudent.create);


module.exports = router;