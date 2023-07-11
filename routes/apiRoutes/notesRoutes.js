const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
let { notesArray } = require('../../db/notes');


router.get('/notes', (req, res) => {
  let results = notesArray;
  res.json(results);
});

router.post('/notes', (req, res) => {
  if(notesArray){
  req.body.id = notesArray.length.toString();
  } else 
  {req.body.id = 0}
  res.json(createNewNote(req.body, notesArray));
});


module.exports = router;