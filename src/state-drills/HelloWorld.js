import React from 'react';

class HelloWorld extends React.Component {
    constructor (props) {
        console.log('props in constructor', props)
        super(props)
        this.state = { who: 'world'}
    }
    handleFriendButton = () => {
        console.log('props in handleFriendButton', this.props)
        console.log('state in handleFriendButton', this.state)
        this.setState({who: 'friend'})
    }
    handleReactButton = () => {
        console.log('props in handleReactButton', this.props)
        console.log('state in handleReactButton', this.state)
        this.setState({who: 'React'})
    }
    handleWorldButton = () => {
        console.log('props in handleWorldButton', this.props)
        console.log('state in handleWorldButton', this.state)
        this.setState({who: 'world'})
    }
    render () {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={this.handleFriendButton}>
                    friend
                </button>
                <button onClick={this.handleReactButton}> 
                    React
                </button>
                <button onClick={this.handleWorldButton}>
                    world
                </button>
            </div>
        )
    }

}

export default HelloWorld