import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { counterActions } from './store/index'

function Counter() {
    const counter = useSelector(state => state.counter)
    const show = useSelector(state => state.showCounter)
    const dispatch = useDispatch();

    const Inc = () => {
        dispatch(counterActions.increment())
    }
    const Dec = () => {
        dispatch(counterActions.decrement())
    }
    const incBy5 = () => {
        dispatch(counterActions.increase(5))
    }
    const toggle = () => {
        dispatch(counterActions.toggle())
    }

    return (



        <div>
            {!show && <p>{counter}</p>}

            <button onClick={Inc}>Increment</button>
            <button onClick={Dec}>Decrement</button>
            <button onClick={incBy5}>incBy5</button>




            <button onClick={toggle}>Toggle</button>

        </div>


    )
}

export default Counter
