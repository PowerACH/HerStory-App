export const createPost = (post) => {
    return (dispatch, getState) => {
        //Pause dispatch
        //Make an async call to database
        dispatch({ type: 'CREATE_POST' , post });
    }
}