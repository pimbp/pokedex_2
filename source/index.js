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
    const types = [req.query.type1, req.query.type2];
    let tempArray = [];
    res.locals.pokemon.forEach(element => {
        if(element.name.english.includes(name) && element.id == id && ((element.type[0] == types[0] && element.type[1] == types[1]) || (element.type[0] == types[1] && element.type[1] == types[0]))){
            tempArray.push(element);
        }
    });
    res.status(res.locals.status).json(tempArray);
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
