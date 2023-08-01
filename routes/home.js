const router = require('express').Router();
router.get('/', (req, res) => {
    res.send(`Welcome to the <b>Trend's NEWS API</b>.`)
})
module.exports = router;