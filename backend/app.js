const express = require('express');
const app = express();


app.use((req,res,next)=>{
    console.log('requette recu');
    next()
});
app.use((req,res,next) =>{
    res.status(201)
    next()
})
app.use((req,res,next)=>{
    res.json({ message:'votre est bien a ete bien recu'});
    next()
});
app.use((req,res)=>{
    console.log('la requette a ete bien envoye')
})

module.exports = app; 