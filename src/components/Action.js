export const increment = 'abc'
export const decrement = 'DECREMENT'

export const incrementAction = ()=>({
    type: increment,
});

export const decrementAction = ()=>({
    type: decrement,
});