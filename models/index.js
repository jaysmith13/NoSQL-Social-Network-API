const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/NoSQL-Social-Network-API', {
  useUnifiedTopology: true,  
  useFindAndModify: false,
  useNewUrlParser: true,
  
});

mongoose.set('debug', true);


app.listen(PORT, () => console.log(`You're now Connected on localhost:${PORT}`));