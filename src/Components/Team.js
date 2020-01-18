import React, {Component} from 'react';
import Players from './Players';

class Team extends Component{
    constructor(){
        super();
        this.state ={
        }
    }

    render(){
        let displayTeam = this.props.myTeam.map((element, index)=>{
            return (
                <Players
                key={index}
                player={element}
                deleteFn={this.props.deleteFn}
                saveFn={this.props.saveFn}
                />
            )
        })
        return(
            <div>

                {displayTeam}
            </div>
        )
    }
}

export default Team;