const express = require('express');
const app = express();
const port = 8000;
const { pokeRouter: pokeRouter } = require('./pokeRouter')

app.use('/api', pokeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
