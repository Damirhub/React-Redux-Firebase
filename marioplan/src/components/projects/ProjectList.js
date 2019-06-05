import React, {Fragment} from 'react';
import ProjectSummary from './ProjectSummary';
import ProjectDetails from './ProjectDetails';

const ProjectList = () => {
    return (
        <Fragment >
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectDetails />
        </Fragment>
    );
};

export default ProjectList;