const router = require('express').Router();
router.get('/', (req, res) => {
    res.send(`Welcome to the Trend's NEWS API.`)
})
module.exports = router;