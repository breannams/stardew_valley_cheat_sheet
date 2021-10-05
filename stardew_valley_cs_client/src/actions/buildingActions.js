export const fetchBuildings = () => {
 
    return (dispatch) => {
        fetch('http://localhost:3000/buildings'
        )
        .then (resp => resp.json())
        .then (buildings => dispatch({type: "FETCH_BUILDINGS", payload: buildings}))
    }
}