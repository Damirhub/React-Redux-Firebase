import React, { Component } from 'react';
import { testAction } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { signInAction } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom'

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
        // this.props.useAction(this.state)
        this.props.signIn(this.state)
        // console.log(this.state)
        
    }
    render() {
        const { authError, uid } = this.props;
        console.log('uid', uid);
        if(uid) return <Redirect to = '/' />
        return (
            <div className = "container">
                <form onSubmit = { (e) => this.handleSubmit(e)} className = "white">
                    <h5 className = "grey-text text-darken-3">SignIn</h5>
                    <div className = "input-field">
                        <label htmlFor = "email">Email</label>
                        <input type= "email" name = "email" onChange = { (e) => this.handleChange(e)}/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor = "password">Password</label>
                        <input type= "password" name = "password" onChange = { (e) => this.handleChange(e)}/>
                    </div>
                    <div className = "input-field">
                        <button className = "btn pink lighten-1 z-depth-0">Login</button>

                    <div className="red-text center">
                        { authError ? <p>{authError}</p> :null }
                    </div>
                    </div>
                </form>

            </div>
        );
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return  {
//         useAction: (anyName) => dispatch(testAction(anyName))
//     }
// }

// export default connect(null, mapDispatchToProps)(SignIn);

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError, 
        uid: state.firebase.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (vhatevr) => dispatch(signInAction(vhatevr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)