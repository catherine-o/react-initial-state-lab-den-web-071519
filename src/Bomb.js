import React from 'react'

class Bomb extends React.Component{
    state = {
        secondsLeft: this.props.initialCount
    }

    render(){
        return(
            this.state.secondsLeft !== 0 
                ? <h2>{this.state.secondsLeft} seconds left before I go boom!</h2>
                : <h1>Boom!</h1>
        )
    }

}

export default Bomb