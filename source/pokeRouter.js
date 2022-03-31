const express = require('express');
const { returnPokemon, loadPokemon, deletePokemon } = require('./pokedex');
const pokeRouter = express.Router();

pokeRouter.use('/', loadPokemon);

pokeRouter.get('/pokedex', returnPokemon);

pokeRouter.delete('/pokedex/:id', deletePokemon);

module.exports = { pokeRouter };