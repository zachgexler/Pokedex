//====================
//DECLARE DEPENDENCIES
//====================
const express = require("express")
const pokemon = require("./models/pokemon.js")
const methodOverride = require("method-override")

//=====================
//INITIALIZING EXPRESS
//=====================

const app = express();

//====================
//MIDDLEWARE
//====================

//TELLING EXPRESS TO USE MIDDLEWARE
  //Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
  //The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true).
  app.use(express.static('public'))
  app.use(express.urlencoded({extended: false}))
  app.use(methodOverride("_method"))

//====================
//DEFINE ROUTES
//====================

//INDEX
//SHOW
//NEW
//EDIT
//CREATE
//UPDATE
//DELETE

//LANDING PAGE
app.get("/", (req, res) => {
    res.send("Welcome!")
})

//INDEX
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {
        pokedex: pokemon //renders index page and defines variable
    })
})

//NEW
app.get("/pokemon/new", (req, res) => {
   res.render("new.ejs", {
    pokedex: pokemon //renders new page and defines variable
   })
})

//DELETE
app.delete("/pokemon/:id", (req, res) => {
        pokemon.splice(req.params.id, 1) //splices the pokemon at indicated id from the pokemon array
        res.redirect("/pokemon") //redirects user back to pokedex
})

//UPDATE
app.put("/pokemon/:id", (req, res) => {
    let type = req.body.type; //assings var type to the data received in the html body value "type"
    let typeArr = type.split(', ') //splits the received variable based on the input and redefines as an array
    let statsObject = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
    };

    let newPokemon = {
        id: req.body.id,//object id now input id
        name: req.body.name,//object name now input name
        img: req.body.img,//object img now input img
        type: typeArr,//object type now input type array
        stats: statsObject//stats object

    };
    pokemon[req.params.id] = newPokemon //puts pokemon at indicated index as info received from "new"
    res.redirect("/pokemon")}) //redirects user back to pokedex

//CREATE
app.post("/pokemon", (req, res) => {
    let type = req.body.type; //assings var type to the data received in the html body value "type"
    let typeArr = type.split(', ') //splits the received variable based on the input and redefines as an array
    let statsObject = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
    };

    let newPokemon = {
        id: req.body.id,//object id now input id
        name: req.body.name,//object name now input name
        img: req.body.img,//object img now input img
        type: typeArr,//object type now input type array
        stats: statsObject//stats object

    };
    pokemon.push(newPokemon) //pushes new pokemon object to the pokemon array
    //console.log(newPokemon)
    res.redirect("/pokemon") //redirects user back to pokedex
})

//EDIT
app.get("/pokemon/:id/edit", (req, res) => {
    res.render("edit.ejs", {
    pokemon: pokemon[req.params.id],//redefines pokemon as pokemon at specific index
    pokemonId: req.params.id//sets pokemonId equal to the exact number it is in the pokemon array
    })
})

//SHOW
app.get("/pokemon/:id", (req, res) => {
    console.log(pokemon[req.params.id])//console logging the specific pokemon's data object
    res.render("show.ejs", {
        pokemonId: pokemon[req.params.id]//sets pokemonId as the specific index of pokemon data
    })
})

//CANN YOUUU HEARRRR MEEEE
app.listen(3000, () => {
    console.log("GOTTA CATCH 'EM ALL")
})