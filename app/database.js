const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://timetable:timetable@cluster0.6wdgy.mongodb.net/timetablemanager?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));