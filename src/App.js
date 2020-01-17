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
      filteredTeam: []
    }
  }

  componentDidMount(){
    axios.get(`http swapi.co/api/planets`).then(response=>{
    this.setState({myTeam: response.data});
  })
    console.log(this.state.myTeam)
  }

  filterTeam= filteredTeam=>{

  }
  render(){
    const{myTeam, filteredTeam} = this.state;
    return(
      <div>
        <Header />
        <Search 
        myTeam={myTeam}
        filterTeam={this.filterTeam}
        />
        <Team 
        teamList={this.state.myTeam}
        />
      </div>
    )
  }
}

export default App;
