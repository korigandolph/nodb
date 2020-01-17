const axios = require('axios');
let players = []

module.exports={
    getPlayers: (req,res)=>{
        axios.get(`https://www.balldontlie.io/api/v1/players?per_page=100`).then(results=>{
            players=results.data;
            console.log(players)
            res.status(200).send(players);
        })
    }
}