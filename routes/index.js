const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();


router.route('/').
get((req, res) => {
    res.send('end point / of index route');
});



module.exports = router;