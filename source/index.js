const express = require('express');
const app = express();
const port = 8000;
const { pokeRouter: pokeRouter } = require('./pokeRouter')
const cors = require('cors');

app.use(cors());

app.use('/api', pokeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
