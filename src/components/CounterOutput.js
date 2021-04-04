import React from 'react'
import { useSelector } from 'react-redux'

export const CounterOutput = () => {
    const counter = useSelector((state)=>state.counter)
    return (
        <div>
            <h2>The value of the counter:{counter}</h2>
        </div>
    )
}
