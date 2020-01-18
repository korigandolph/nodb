import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Team from './Components/Team';
import Header from './Components/Header';
import Search from './Components/Search'


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      myTeam:[],
      filteredTeam: [],
      teams: []
    }
    this.submit=this.submit.bind(this)
    this.addPlayerToTeam=this.addPlayerToTeam.bind(this);
    this.deletePlayerFromTeam=this.deletePlayerFromTeam.bind(this);
    this.editPlayerOnTeam=this.editPlayerOnTeam.bind(this);
  }
  componentDidMount(){
    this.filterTeam()
  }
  
  addPlayerToTeam(body){
    console.log(body)
    axios.post('/api/players', body).then(res=>{
      this.setState({myTeam: res.data});
    }).catch(err=>console.log(err));
  }

  editPlayerOnTeam(id, body){
    axios.put(`api/players/${id}`, body).then(res=>{
    this.setState({myTeam: res.data})
  }).catch(err=>console.log(err));
}


  deletePlayerFromTeam(id){
    axios.delete(`/api/players/${id}`).then(res=>{
      this.setState({myTeam: res.data})
    }).catch(err=>console.log(err));
  }

  // filterTeam= filteredTeam=>{
  //   axios.get('/api/players').then(results=> {
  //     axios.get('/api/team').then(res=>{
        
  //       this.setState({teams: results.data.data, filteredTeam: results.data.data}
  //     )}
  //     ))}

  // }

  filterTeam = filteredTeam=>{
    axios.get('api/players').then(results=>{
      axios.get('api/team').then(res =>{
        this.setState({teams: results.data.data, filteredTeam: results.data.data, myTeam: res.data})
      })
    })
  }

  submit(input){
    // axios.get(`/api/players?team=${this.state.input}`).then(results=>{
    let displayedTeams=this.state.filteredTeam.filter((e)=>{
        return e.team.name === input;
    })
    this.setState({filteredTeam: displayedTeams})
    }


  render(){
    const{myTeam, filteredTeam, teams} = this.state
    console.log(this.state.myTeam)
    return(
      <div>
        <Header />
        <Search 
        myTeam={myTeam}
        filterTeam={this.filterTeam}
        teams={filteredTeam}
        submit={this.submit}
        addFn={this.addPlayerToTeam}
        />
        <Team 
        myTeam={myTeam}
        deleteFn={this.deletePlayerFromTeam}
        saveFn={this.editPlayerOnTeam}
        />
      </div>
    )
  }
}

export default App;
