

export const fetchQuests = () => {
 
    return (dispatch) => {
        fetch('http://localhost:3000/quests'
        )
        .then (resp => resp.json())
        .then (quests => dispatch({type: "FETCH_QUESTS", payload: quests}))
    }
}