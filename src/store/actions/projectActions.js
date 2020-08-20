export const createProject = (project) => {
    return (dispatch, getState) => {
        //Pause dispatch
        //Make an async call to database
        dispatch({ type: 'CREATE_PROJECT' , project });
    }
}