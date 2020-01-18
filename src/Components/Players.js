import React, {Component} from 'react';

class Players extends Component{
    constructor(props){
        super(props);
        this.state={
            edit: false,
            firstnameInput: this.props.first_name,
            lastnameInput: this.props.last_name,
            
        }
    }
    save=()=>{
        let player=this.props.player
        player.first_name=this.state.firstnameInput
        player.last_name=this.state.lastnameInput
        this.props.saveFn(player.id, player)
        this.toggleEdit()
    }
    toggleEdit =()=>{
        this.setState({edit: !this.state.edit});
    }

    handleChange = ({name, value})=>{
        this.setState({[name]: value})
    }

    updateName=()=>{
        this.props.editFn(this.props.id, this.state.nameInput)
        this.toggleEdit();
    }
    render(){
        console.log(this.state.edit)
        return (
            
        <div>
            {this.state.edit?<div>
                <input onChange={(e)=> {this.handleChange(e.target)}} value={this.state.firstnameInput} name='firstnameInput'/><br></br>
                <input onChange={(e)=> {this.handleChange(e.target)}} value={this.state.lastnameInput} name='lastnameInput'/>
                <button onClick={()=> this.save()}>Save</button>
                </div>:
                <div>
            <div>{this.props.player.first_name}</div>
            <div>{this.props.player.last_name}</div>
            </div>}
            <button onClick={this.toggleEdit}>Edit</button>
            <button onClick={()=> this.props.deleteFn(this.props.player.id)}>Delete</button>
        </div>
    )
}

}
export default Players;