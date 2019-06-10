const initState = {
    projectsFromProjectReducer: [
        {id: 1, title: 'help me find peach', content: "blah bla blaha"},
        {id: 2, title: 'collect all the stars', content: "blah bla blaha"},
        {id: 3, title: 'egg hunt with yoshi', content: "blah bla blaha"},
    ]
}

export const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT' :
            console.log('XXX created project XXX', action.fromComponentPropToReducer)
        // case 'TEST_TYPE_ACTION' : 
        // return {
        //     ...state,
        //     fromSignIn : [action.toReducer]
        // }
        return state;
    
        case 'CREATE_PROJECT_ERROR' :
            console.log('create project error', action.err)
        
        default:   
            return state;
    }
}

export const secondReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TEST_TYPE_ACTION' :
        
                return {
                    ...state,
                    fromSignIn : [action.toReducer]
                }
        }
        return state;
}

// export default projectReducer;