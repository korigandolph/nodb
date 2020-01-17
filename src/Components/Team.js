import React from 'react';
import Players from './Players';

const Team = (props)=>{
    return(
        <div className="team">
            {props.teamList}
            Team
        </div>
    )
}

export default Team;