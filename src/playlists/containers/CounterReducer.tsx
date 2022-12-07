import React, { useReducer, useRef, useState } from "react";

const inc = (payload = 1) => ({ type: "INC", payload } as const);
const dec = (payload = 1) => ({ type: "DEC", payload } as const);
const addTodo = (payload = "buy milk") =>
  ({ type: "ADD_TODO", payload } as const);

type Actions = ReturnType<typeof inc | typeof dec | typeof addTodo>;

const counterR = (state = 0, action: Actions) => {
  switch (action.type) {
    case "INC":
      return state + action.payload;
    case "DEC":
      return state - action.payload;
    default:
      return state;
  }
};

const todosR = (state: State, action: Actions): State => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        counter: state.todos.length,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

const reducer = (state: State, action: any) => {
  console.log(state, action);

  // state = counterR(state,action)
  state = todosR(state, action);
  return {
    ...state,
    counter: counterR(state.counter, action),
    // playlists: playlistsSliceReducer(state.playlists, action),
    // search: searchSliceReducer(state.search, action),
    // user: userSliceReducer(state.search, action),
  };
};

type State = {
  counter: number;
  todos: string[];
};

const initialState = {
  counter: 0,
  todos: ["test"],
};

type Props = {};

const CounterReducer = (props: Props) => {
  const todoInput = useRef<HTMLInputElement>(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="text-center">
      <h3 className="display-h3">CounterReducer</h3>

      <h1>{state.counter}</h1>

      <button className="btn btn-primary" onClick={() => dispatch(inc(1))}>
        Inc
      </button>
      <button className="btn btn-primary" onClick={() => dispatch(dec(1))}>
        Dec
      </button>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
      <input type="text" ref={todoInput} />
      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch(addTodo("Test Todo" + todoInput.current?.value))
        }
      >
        Add Todo
      </button>
    </div>
  );
};

export default CounterReducer;
