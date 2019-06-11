import React from 'react';

const ProjectSummary = ({ projectToSummary }) => {
    return (
        <div className = "project-list section">
            <div className = " card z-depth-0 project-summaru">
                <div className = "card-content grey-text text-darken-3">
                    <span className = "card-title">{projectToSummary.titleToStore}</span>
                    <p>Posted by {projectToSummary.authorFirstName} {projectToSummary.authorLastName} </p>
                    <p className = "grey-text">3rd September, 2am</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectSummary;