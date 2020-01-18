const axios = require('axios');
let players = [];
let myTeam =[];


module.exports={
    getPlayers: (req,res)=>{
        axios.get(`https://www.balldontlie.io/api/v1/players?per_page=100`).then(results=>{
            players=results.data;
            res.status(200).send(players);})
            .catch(err=> res.status(500).send(err))
        },
    getTeam: (req, res)=>{
        res.status(200).send(myTeam)
    },
    addPlayer: (req, res)=>{
       
        const{first_name, last_name, id}=req.body;
        const teamObj={
            first_name, last_name, id
        }
        myTeam.push(teamObj);
        res.status(200).send(myTeam);
    },
    editPlayer:(req, res)=>{
        const {id} = req.params;
        const{first_name, last_name}=req.body;

        const index=myTeam.findIndex(element => element.id===+id);
        myTeam[index].first_name = first_name;
        myTeam[index].last_name = last_name;
        res.status(200).send(myTeam);
    },
    deletePlayer:(req, res)=>{
        const{id} = req.params;
        const index = myTeam.findIndex(element=>element===+id);
        myTeam.splice(index, 1);
        res.status(200).send(myTeam);
    }
}