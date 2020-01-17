const express = require('express'),
    cors=require('cors'),
    app=express();

const playerCtrl= require('./controllers/controller')

app.use(cors());
app.use(express.json());



//Endpoints
app.get('/api/players', playerCtrl.getPlayers)

const port=4000;
app.listen(port, ()=> console.log(`Server runningn on ${port}`));