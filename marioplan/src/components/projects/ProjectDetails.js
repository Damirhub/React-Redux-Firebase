import React from 'react';
import {withRouter} from 'react-router-dom';

const ProjectDetails = (props) => {
    console.log(props)
    const id = props.match.params.id
    console.log('rerender');
    return (
        <div className = "container section project-details">
            <div className = "card z-depth">
                <div className = "card-content">
                    <span className = "card-title">Project Title - {id}</span> }
                    <p>Lorem ispsinm dam aksali lasisnocs bpiosito casidos</p>
                </div>
                <div className = "card-action grey lighten-3 grey-text">
                    <div> Posted by Meth Minjah </div>
                    <div> 2nd September, 2am </div>
                </div>    
            </div>
        </div>
    );
};

export default withRouter( ProjectDetails );