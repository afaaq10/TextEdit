import { createSlice, configureStore } from "@reduxjs/toolkit"
const initialState = { counter: 0, showCounter: false }

const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.counter = !state.showCounter
        }
    }
})
// const incDec = (state = initialState, action) => {

//     if (action.type == "increment") {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }

//     }
//     if (action.type == "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type == "increase") {
//         return {
//             counter: state.counter + action.payload,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type == "toggle") {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }


const store = configureStore({
    reducer: slice.reducer
})



export const counterActions = slice.actions
export default store;