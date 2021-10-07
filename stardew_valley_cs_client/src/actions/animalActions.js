

export const fetchAnimals = () => {
 
    return (dispatch) => {
        fetch('http://localhost:3000/animals'
        )
        .then (resp => resp.json())
        .then (animals => dispatch({type: "FETCH_ANIMALS", payload: animals}))
    }
}