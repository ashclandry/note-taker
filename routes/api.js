const path = require('path');
const fs = require('fs')
var uniqid = require('uniqid');

module.exports = (app) => {

  // GET /api/notes & return as JSON.
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

  // POST new note, add to the db.json file & return to the client. 
  app.post('/api/notes', (req, res) => {
    let dataBase = fs.readFileSync('db/db.json');
    dataBase = JSON.parse(dataBase);
    res.json(dataBase);
    // body for note
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),
    };
    // push note to db.json file
    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(dataBase));
    res.json(dataBase);

  });

  // DELETE 
  app.delete('/api/notes/:id', (req, res) => {
    let dataBase = JSON.parse(fs.readFileSync('db/db.json'))
    // removing note with id
    let deleteNotes = db.filter(item => item.id !== req.params.id);

    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
    
  })
};

