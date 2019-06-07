import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
class Dashboard extends Component {
    render() {
        // console.log("redux props: ", this.props);
        const { choseNameProjects } = this.props
        return (
            <div className = "dashboard cotainer">
                <div className = "row">
                    <div className = "col s12 m6">
                        <ProjectList projectsToList = {choseNameProjects}/>
                        <ProjectList />
                    </div>
                    <div className = "col s12 m5 offset-m1">
                        <Notifications />
                        
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        choseNameProjects: state.fromRootReducer.projectsFromProjectReducer
    }
}

export default connect(mapStateToProps)(Dashboard);