const express = require('express');
const app = express();

// if you are using mongo/mongoose uncomment this line
const Message = require('./db/Message');

// if you are using postgres, uncomment this line
// const pool = require('./db/pgconfig');

//BODYPArSER

//get requests
app.get('/api/messages', async (req, res) => {
  try {
    let messages = await Message.find()
    res.send(messages);
  } catch(err) {
    res.status(404).send(err);
  }
})

app.get('/api/messages/:id', async (req, res) => {
  try {
    let message = await Message.find(req.params);
    res.send(message);
  } catch (err) {
    res.status(404).send(err);
  }
})
//post requestTHIS ONE NEEDS WORk
app.post('/api/messages', (req, res) => {
    let newMessage = new Message ({id: 2, name: 'Stuff', message: 'hi'})
    newMessage.save();
    res.send('working');
})
//update request
app.put('/api/messages/:id', (req, res) => {
  res.send('from put')
})
//delete request
app.delete('/api/messages/:id', (req, res) => {
  res.send('from delete')
})
//one specific message request

app.use((req,res,next) => {
  res.status(404).send('That route does not exist');
});

const port = 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});


module.exports = app;
