import React from 'react'

export default class MyForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {value:'person'}
    }

    onChangeHandler = (event) => {
        this.setState({value: event.target.value})
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        alert('you are submitting: ' + this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <h1>Hello {this.state.value}</h1>
                <p1>Enter your name:</p1>
                <input type='text' onChange={this.onChangeHandler}/>
                <input type='submit'/>
            </form>
        )
    }

}