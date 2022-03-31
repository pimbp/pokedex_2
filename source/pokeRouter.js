const express = require('express');
const pokeRouter = express.Router();

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
    let tempArray = res.locals.pokemon;
    if(req.query["name"]){
        let name = req.query.name;
        tempArray = tempArray.filter((element)=>{
            if(element.name.english.toLowerCase().includes(name))
                return element;
        });
    }
    if(req.query["type"]){
        let types = req.query.type;
        tempArray = tempArray.filter((element)=>{
            if(types.length == 1){
                if(element.type.find(type => type == types[0]))
                    return element;
            }else{
                if(element.type.find(type => type == types[0]) && element.type.find(type => type == types[1]))
                    return element;
            }
        });
    }
    res.status(res.locals.status).json(tempArray);
});

module.exports = { pokeRouter };