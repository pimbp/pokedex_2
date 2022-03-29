const express = require('express');
const app = express();
const port = 3000;
const pokeRouter = express.Router();

app.use('/api', pokeRouter);

pokeRouter.use('/', (req, res, next)=>{
    try{
        res.locals.pokemon = require('../assets/pokedex.json');
        res.locals.status = 200;
    }catch{
        res.locals.status = 500;
        res.locals.pokemon = ({
            error: `Error ${res.locals.status} couldn\'t load data`,
        });
    }
    next();
});

pokeRouter.get('/pokedex', (req, res)=>{
    const id = req.query.id;
    const name = req.query.name;
    const types = [req.query.type1, req.query.type2]
    res.status(res.locals.status).json(res.locals.pokemon);
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
