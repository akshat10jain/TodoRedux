import { combineReducers } from 'redux'

const helper = (state = [], action) => {

    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.payload
                }

            ]
        case 'DELETE':
            return state.filter((todo) => {
                return todo.id !== action.payload
            })
        default:
            return state

    }

}
const reducer = combineReducers({
    tasks: helper
})

export default reducer