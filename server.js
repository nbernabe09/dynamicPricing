const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

require('./routes/apiData')(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

if (['production', 'ci'].includes(process.env.NODE_ENV)) {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
