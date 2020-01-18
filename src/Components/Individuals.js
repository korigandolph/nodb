import React from 'react';

function Individuals (props){
    let {team, first_name, last_name, id} = props.player;
    let {addFn} =props;

    return (

        <div>
            <div>{team.name}</div>
            <div onClick={(e)=>addFn({first_name: first_name, last_name: last_name, id:id})}>{first_name}</div>
            <div>{last_name}</div>
        </div>
    )
}

export default Individuals;