


export const createProjectAction = (semethinFromComponentProps) => {
    return (dispatch, getState, { getFirbase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...semethinFromComponentProps, 
            authorFirstName: 'NJet',
            authorLastName: 'NJinja',
            author: 12345,
            createdAt: new Date()
        })
        .then(()=> {
            dispatch({
                type: 'CREATE_PROJECT', fromComponentPropToReducer: semethinFromComponentProps
            })
        }).then( alert("Your data has been sent"))
        .catch((err) => { 
            // console.log(err)
            dispatch ({ type :'CREATE_PROJECT_ERROR', err })
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
