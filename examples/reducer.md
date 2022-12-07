```js

[1,2,3,4,5].reduce( (sum, x ) =>{
    
    console.log(sum, x, sum+x)
    sum += x;
    return sum;
},0)
//  0 1 1
//  1 2 3
//  3 3 6
//  6 4 10
//  10 5 15
15

```

```ts

inc = (payload=1) => ({type:'INC', payload});
dec = (payload=1) => ({type:'DEC', payload});
addTodo = (payload='buy milk') => ({type:'ADD_TODO', payload});

counterR = (state = 0 , action ) =>{     
    switch(action.type){
        case 'INC':return  state  + action.payload
        case 'DEC':return  state   - action.payload
        default: return state
    }
}
todosR = (state, action ) =>{    
    switch(action.type){
        case 'ADD_TODO':   
            return {
                ...state,
                todos: [...state.todos, action ]
            }
        default: return state
    }
}
reducer = (state,action) => { 
    // state = counterR(state,action)
    state = todosR(state,action)
    return {
         ...state, counter: counterR(state.counter, action )   
    };
}

state = {
    counter: 0,
    todos:[]
}
    
state = reducer(state, inc(2))
state = reducer(state, addTodo('learn react') )
state = reducer(state, dec(1))
state = reducer(state, addTodo('learn redux?') )
// {counter: 1, todos: Array(2)}

```