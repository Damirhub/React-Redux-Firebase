import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom'
import moment from 'moment'


const ProjectDetails = (props) => {
    const id = props.match.params.id
    const { project, auth } = props;
    console.log('ProjectDetails props', props);
    console.log('ProjectDetails project', project);

        //TERNARY 
        if (!auth.uid) return <Redirect to = "/signin" />
        
        return (
            ( project ) ? 
                    <div className = "container section project-details">
                        <div className = "card z-depth">
                            <div className = "card-content">
                                <span className = "card-title">Project Title {id}</span>
                                <p>{project.contentToStore}</p>
                            </div>
                            <div className = "card-action grey lighten-3 grey-text">
                                <div> {project.authorFirstName} </div>
                                <div> {moment(project.createdAt.toDate()).calendar()} </div>
                            </div>    
                        </div>
                    </div>
            :  
                <div> ... loading </div>
        )    
    };

// export default withRouter( ProjectDetails );
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
const mapStateToProps = (state, ownProps) => {
    console.log('state', state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] :null

    return {
        project: project,
        auth : state.firebase.auth
    

    }
}

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([
        {collection: 'projects'}
    ])



    )( ProjectDetails );