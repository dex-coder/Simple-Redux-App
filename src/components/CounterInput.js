import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementAction, decrementAction } from './Action'

export const CounterInput = () => {
    const dispatch =  useDispatch();
    return (
        <>
            <button onClick={()=>dispatch(incrementAction())}>+</button>
            <button onClick={()=>dispatch(decrementAction())}>-</button>
        </>
    )
}