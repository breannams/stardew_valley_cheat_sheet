
export const addFarm = farm => {
    return (dispatch) => {

    fetch('http://localhost:3000/farms',{
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        
          },
        body: JSON.stringify(farm),
    })

    .then(resp => resp.json())
    .then(farmData => dispatch({type: 'ADD_FARM', payload: farmData}))
    }
}