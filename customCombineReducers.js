export function combineReducer(reducers){
    let allFunctions = Object.keys(reducers);    

    return function(initialState = {}, action) {        
        let state = {}

        allFunctions.map((key) => {
            let oneReducer =  reducers[key]
            let data = oneReducer(initialState[key], action);
            state[key] = data
        })   
        
        return state
    }
}
