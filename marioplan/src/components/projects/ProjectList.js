import React, {Fragment} from 'react';
import ProjectSummary from './ProjectSummary';
import ProjectDetails from './ProjectDetails';

const ProjectList = ({ projectsToList }) => {
    return (
        <Fragment >
            {/* <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectDetails /> */}
            {
                projectsToList && projectsToList.map(project => {
                    return (
                        <ProjectSummary projectToSummary={project} key = {project.id} />
                    )
                })
            }
        </Fragment>
    );
};

export default ProjectList;


// VERSION PASSED DIRECTLY FROM REDUX STATE, MAKES MORE SENSE TO ME

// import React, {Fragment} from 'react';
// import ProjectSummary from './ProjectSummary';
// import ProjectDetails from './ProjectDetails';
// import {connect} from 'react-redux';


// const ProjectList = ({ fromStateProjects }) => {
//     console.log('fromStateProjects', fromStateProjects);
//     return (
//         <Fragment >
//             {/* <ProjectSummary />
//             <ProjectSummary />
//             <ProjectSummary />
//             <ProjectSummary />
//             <ProjectDetails /> */}
//             {
//                 fromStateProjects && fromStateProjects.map(projectMapped => {
//                     return (
//                         <ProjectSummary projectToSummary={projectMapped} key = {projectMapped.id} />
//                     )
//                 })
//             }
//         </Fragment>
//     );
// };

// // export default ProjectList;

// const mapStateToProps = (state) => {
//     return {
//             fromStateProjects :  state.projectFromRootReducer.projectsFromProjectReducer
//     }
// }

// export default connect(mapStateToProps)(ProjectList)