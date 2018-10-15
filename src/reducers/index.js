import {combineReducers} from 'redux'

const helper = (state = [], action) => {

    switch (action.type) {
        case 'ADD':            
                state=state.concat(action.payload)
                break;
        case 'DELETE':
                state=state.splice(action.payload, 1)
                break;
        default:
            break;

    }
    return state
}
const reducer = combineReducers({
    tasks:helper
})

export default reducer