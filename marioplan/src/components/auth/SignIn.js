import React, { Component } from 'react';

class SignIn extends Component {
    state = {
        email: '',
        password:''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ 
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className = "container">
                <form onSubmit = { (e) => this.handleSubmit(e)} className = "white">
                    <h5 className = "grey-text text-darken-3">SignIn</h5>
                    <div className = "input-field">
                        <label htmlFor = "email">Email</label>
                        <input type= "email" id = "email" onChange = { (e) => this.handleChange(e)}/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor = "password">Password</label>
                        <input type= "password" id = "password" onChange = { (e) => this.handleChange(e)}/>
                    </div>
                    <div className = "input-field">
                        <button className = "btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default SignIn;