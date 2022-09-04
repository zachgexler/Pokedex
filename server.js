const express = require('express');
const app = express();
const pokemon = require("./models/pokemon")
const port = 3000;
const methodOverride = require("method-override")

app.use(methodOverride("_method"));

app.use((req, res, next) => {
    next()
})
app.get("/pokemon/", function (req, res) {
    res.render("index.ejs", {
        allPokemon: pokemon
    })
});

app.post("/pokemon", (req, res) => {
    console.log(req.body)
    res.send("data received")
})

app.get("/pokemon/new", function (req, res) {
    res.render("new.ejs")
})

app.get("/pokemon/:indexOfPokemonArray", function (req, res) {
    res.render("show.ejs", {
        pokemon: pokemon[req.params.indexOfPokemonArray]
    })
})

app.delete("/pokemon:indexOfPokemonArray", (req, res) => {
    pokemon.splice(req.params.indexOfPokemonArray) //remove the item from the array
    res.redirect("/pokemon") //redirect back to index route
})

app.get("/pokemon/id"), function (res, req) {
    res.render("show.ejs", {
        pokemonId: pokemon[req.params.id]
    }
    )
}


// TELL OUR APP TO LISTEN ON PORT...
app.listen(port, () => {
    console.log(`listening on port `, port)
});