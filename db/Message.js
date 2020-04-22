const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/messages', {useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;
db.on('error', () => {
  console.log('error')}
  );
// db.once('open', () => {
//   console.log('db connection is open');
// })

let messageSchema = new mongoose.Schema ({
  id: Number,
  name: String,
  message: String
});

let Message = mongoose.model('Message', messageSchema);

let messageOne = new Message({
  id: 3,
  name: 'name',
  message: 'hello'
})
messageOne.save();

module.exports = Message;
