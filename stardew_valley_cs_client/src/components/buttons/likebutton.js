import { Component } from "react";

export default class LikeButton extends Component{
    state ={
        likes: 0
    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }
render(){
    return(
        <>
        <button onClick = {this.handleClick}>Like</button>
        Likes: {this.state.likes}
        </>
    )
}

}