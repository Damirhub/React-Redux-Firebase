
export const createProjectAction = (semethinFromComponentProps) => {
    return (dispatch, getState, { getFirbase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore()

        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid

        firestore.collection('projects').add({
            ...semethinFromComponentProps, 
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            author: authorId,
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
