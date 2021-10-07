

export const fetchFestivals = () => {
 
    return (dispatch) => {
        fetch('http://localhost:3000/festivals'
        )
        .then (resp => resp.json())
        .then (festivals => dispatch({type: "FETCH_FESTIVALS", payload: festivals}))
    }
}