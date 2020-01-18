const express = require('express'),
    cors=require('cors'),
    app=express();

const playerCtrl= require('./controllers/controller')

app.use(cors());
app.use(express.json());



//Endpoints
app.get('/api/players', playerCtrl.getPlayers);
app.get('/api/team', playerCtrl.getTeam);
app.post('/api/players', playerCtrl.addPlayer);
app.put('/api/players/:id', playerCtrl.editPlayer);
app.delete('/api/players/:id', playerCtrl.deletePlayer);

const port=4000;
app.listen(port, ()=> console.log(`Server runningn on ${port}`));