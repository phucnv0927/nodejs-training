const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send('Welcome to the Shop!');
});

module.exports = router;
