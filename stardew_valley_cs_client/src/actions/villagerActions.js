

export const fetchVillagers = () => {
 
    return (dispatch) => {
        fetch('http://localhost:3000/villagers'
        )
        .then (resp => resp.json())
        .then (villagers => console.log('fetchVillagers', villagers))
    }
}