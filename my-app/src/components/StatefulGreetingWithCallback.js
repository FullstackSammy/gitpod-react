import React from 'react';

class StatefulGreetingWithCallback extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    handleClick() {
        this.setState({
            introduction: 'Goodbye!',
            buttonText: 'Enter'
        });
        console.log(this.state.introduction);
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>

        )
    }
}

export default StatefulGreetingWithCallback;