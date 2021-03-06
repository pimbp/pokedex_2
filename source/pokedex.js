exports.loadPokemon = (req, res, next)=>{
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
};

exports.returnPokemon = (req, res)=>{
    let tempArray = res.locals.pokemon;

    if(req.query["name"]){
        let name = req.query.name;
        tempArray = tempArray.filter((element)=>{
            if(element.name.english.toLowerCase().includes(name.toLowerCase()))
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

    if(req.query["sortByName"] == 'asc'){
            console.log('ds');
            tempArray.sort((a, b) => {
            return a.name.english.localeCompare(b.name.english);
        });
    }

    if(req.query["sortByName"] == 'desc'){
        tempArray.sort((a, b) => {
            return b.name.english.localeCompare(a.name.english);
        });
    }

    if(req.query["sortById"] == 'desc'){
        tempArray.sort((a, b) => b.id - a.id);
    }else if(req.query["sortById"] == 'asc'){
        tempArray.sort((a, b) => a.id - b.id);
    }
    res.json(tempArray);
    //status(res.locals.status).
}

exports.deletePokemon = (req, res) => {
    res.locals.pokemon.splice(res.locals.pokemon.findIndex((element) => {
        return element.id == req.params.id;
    }), 1);
    res.send('essa')
};