const router = require('express').Router();
const notesRoute = require('./notesRoutes');

router.use(notesRoute);
module.exports = router;

