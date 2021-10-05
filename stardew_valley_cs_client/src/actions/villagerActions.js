

export const fetchVillagers = () => {
 
    return (dispatch) => {
        fetch('http://localhost:3000/villagers'
        )
        .then (resp => resp.json())
        .then (villagers => dispatch({type: "FETCH_VILLAGERS", payload: villagers}))
    }
}