import React from 'react';

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            countText: 'Count',
            count: 0

        };
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 5
        }, () => {
            console.log(this.state.count);
        }
        );

    }


    handleClick() {
        this.setState({
            introduction: this.state.introduction === 'Hello!' ? 'Goodbye!' : 'Hello!',
            buttonText: this.state.buttonText === 'Exit' ? 'Enter' : 'Exit'
        }, () => {
            console.log('new state', this.state.introduction);
            console.log('new state', this.state.buttonText);
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementCount()}>{this.state.countText}</button>
                <p>You've clicked {this.state.count} times</p>
            </div>

        )
    }
}

export default StatefulGreetingWithPrevState;