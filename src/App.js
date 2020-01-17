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
      myTeam:[]
    }
  }
  render(){
    return(
      <div>
        <Header />
        <Search />
        <Team 
        teamList={this.state.myTeam}
        />
      </div>
    )
  }
}

export default App;
