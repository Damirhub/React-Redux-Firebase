export const createProjectAction = (fromComponentProp) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({
            type: 'CREATE_PROJECT', fromComponentPropToReducer: fromComponentProp
        })
    }
}


export const testAction = (fomComponent) => { 
    return (dispatch, getState) => {
        dispatch ({
            type: 'TEST_TYPE_ACTION', toReducer: fomComponent
        })
    } 
}
