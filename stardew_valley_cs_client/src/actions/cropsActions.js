

export const fetchCrops = () => {
 
    return (dispatch) => {
        fetch('http://localhost:3000/crops'
        )
        .then (resp => resp.json())
        .then (crops => dispatch({type: "FETCH_CROPS", payload: crops}))
    }
}