const express = require('express')
const app = express()
const path = require("path")


app.get(`/`, function(req,res) { 

    let texto = `Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y
    hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como
    inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en
    ti!`

    res.send(texto)
 })

 app.get(`/heroes`, function(req,res) { 

    let texto = path.resolve('heroes.json')

    res.sendFile(texto)
 })

 app.listen(3000)

 //comentario para hace run ejercicio