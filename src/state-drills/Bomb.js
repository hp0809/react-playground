import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.setState =({count: 0})  
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            this.setState ({
                datetime: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    divisibleBy2 = () => {
        if ( new Date % 2 === 0) {
            return 'tick';
        }
    }
    notDivisibleBy2 = () => {
        if (new Date % 2 !==0) {
            return 'tock'
        }
    }
    
    render() {
        return(
            <div>
                <p>{this.state.count.toLocaleDateString()}</p>
            </div>
        )
    }
}
export default Bomb