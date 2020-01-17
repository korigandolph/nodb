import React, {Component} from 'react';
import axios from 'axios';

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
        this.props.filterTeam(this.props.myTeam);
    }
    
    
    filteredTeamList = e => {
        const {value} = e.target
        if(!this.state.filterKey){
            return this.setState({input: ''})
        }
        this.setState({input: value}, ()=>{
            const searched = this.props.myTeam.filter(myTeam => myTeam[this.state.filterKey].toLowerCase().includes(this.state.input))
            this.props.filterTeam(searched)
        })
    }

    render(){
        return (
            <div>

            <select value={this.state.filterKey} onChange={this.selectFilterKey} name='filterKey'>
                    <option value=''>Select Category</option>
                    <option value='name'>Name</option>
                    <option value='team'>Team</option>
                </select>
                <input name='input' value={this.state.input} onChange={e=>this.filteredTeamList(e)}/>
            </div>
        );
    }
}

export default Search;