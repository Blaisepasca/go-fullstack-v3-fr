const express = require('express');
const app = express();

app.use((req,res)=>{
    res.json({message:'votre est bien a ete bien recu'});
});

module.exports = app; 