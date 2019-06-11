import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createProjectAction } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom'


class CreateProject extends Component {
    state = {
        titleToStore: '',
        contentToStore:''
    }
    //not needed but preferable

    handleChange = (e) => {
        // const {name, value} = e.target
        this.setState({ 
            [e.target.id]: e.target.value
        })
        , console.log("Set State:", this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.createProject ( this.state)
        // console.log("THIS.STATE:", this.state)
    }
    render() {
        const {auth} = this.props
        if (!auth.uid) return <Redirect to = '/' />
        return (
            <div className = "container">
                <form onSubmit = { (e) => this.handleSubmit(e)} className = "white">
                    <h5 className = "grey-text text-darken-3">Create Project</h5>
                    <div className = "input-field">
                        <label htmlFor = "title">Title</label>
                        <input type= "text" id = "titleToStore" onChange = { (e) => this.handleChange(e)}/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor = "content">Content</label>
                        <textarea className = "materialize-textarea" 
                        id = "contentToStore" onChange = { (e) => this.handleChange(e)}/>
                    </div>
                    <div className = "input-field">
                        <button className = "btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject : (somethin) => dispatch(createProjectAction(somethin))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)