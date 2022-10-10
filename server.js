// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


// express creating a route for every file in the 'public' folder
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/api')(app);
require('./routes/html')(app);

// listening
app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});