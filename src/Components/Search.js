import React, {Component} from 'react';
import axios from 'axios';
import Individuals from './Individuals';
class Search extends Component{
    constructor(){
        super();
        this.state ={
            filterKey: '',
            input: ''
        }
    }

    selectFilterKey = e => {
        const {value} = e.target
        this.setState({filterKey: value, input: ''})
        // this.props.filterTeam(this.props.myTeam);
    }
    
    
    filteredTeamList = e => {
        const {value} = e.target
        console.log(value)
        if(!this.state.filterKey){
            return this.setState({input: ''})
        }
        this.setState({input: value})
    }

    // submit(){
    //     // axios.get(`/api/players?team=${this.state.input}`).then(results=>{
    //     let displayedTeams=this.props.teams.filter((e)=>{
    //         return e.team.name === this.state.input;
    //     });
    //     }
    // }

    render(){
        console.log(this.props.teams)
        let display = this.props.teams.map((element, index)=> {
            return (
            <Individuals 
            key={index} 
            player={element}
            addFn={this.props.addFn}/>
            )
        })
        return (
            <div>

            <select value={this.state.filterKey} onChange={this.selectFilterKey} name='filterKey'>
                    <option value=''>Select Category</option>
                    <option value='name'>Name</option>
                    <option value='team'>Team</option>
                </select>
                <input name='input' value={this.state.input} onChange={e=>this.filteredTeamList(e)}/>
                <button onClick={()=> this.props.submit(this.state.input)}>Submit</button>
                {display}
            </div>
        );
    }
}

export default Search;