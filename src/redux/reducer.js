import initialState from "./initialState";

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        // case "ADD_TASK": return { ...state, owners: [...state.owners, action.payload] };

        case "LIKE_TASK":
            let newLike = [...state.shoes];
            newLike[action.payload].like = !newLike[action.payload].like;
            return { ...state, shoes: newLike }

        case "KORZINA_TASK":
            let newKorzina = [...state.shoes];
            newKorzina[action.payload].korzina = !newKorzina[action.payload].korzina;
            return { ...state, shoes: newKorzina }

            
        default: return state;
    }
}
export default Reducer