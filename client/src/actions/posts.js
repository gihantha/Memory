import * as  api from '../api' //import everthing from the actions as api  

// action creators- functions that return actions, payload - is usually the data where we store all of our posts 
export const getPosts = () => async(dispatch) => {
    try {
       const { data }  = await api.fetchPost();

       dispatch( { type: 'FETCH_ALL', paload: data})
    } catch (error) {
        console.log(error.message)
    }

}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}
// redux thunks allows us to in here specify an  additional arrow function