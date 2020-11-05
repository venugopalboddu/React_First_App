import React, { Component } from 'react'

export class Hello extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome VenuGopal'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thanks for visiting'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Hello
