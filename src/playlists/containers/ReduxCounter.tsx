import React, { useReducer, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../store/reducers/counter";
type Props = {};

const ReduxCounter = (props: Props) => {
  // const todoInput = useRef<HTMLInputElement>(null);

  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="text-center">
      <h3 className="display-h3">ReduxCounter</h3>

      <h1>{counter}</h1>

      <button
        className="btn btn-primary"
        onClick={() => dispatch(incrementByAmount(1))}
      >
        Inc
      </button>
      <button className="btn btn-primary" onClick={() => dispatch(decrement())}>
        Dec
      </button>

      {/* <ul>
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
      </button> */}
    </div>
  );
};

export default ReduxCounter;
