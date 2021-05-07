import React from '../node_modules/react'
class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {age: parseInt(this.props.age)};
    }
    makeOlder = () => {
        this.setState({age: parseInt(this.state.age + 1)});
    }
    render() {
        
        const personData = this.props;
        let age = this.state.age
        
        return (
            <div class="card">
            <div>
                <h1> {personData.name} </h1>
                <p> Age: {age}</p>
                <p> Hair Color: {personData.hairColor}</p>

            </div>
            <div>
                <button onClick={this.makeOlder}> Increase age</button>
            </div>
        </div>
        )
    }
}

export default PersonCard