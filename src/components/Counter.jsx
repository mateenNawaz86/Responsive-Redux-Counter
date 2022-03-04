import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { counterActions } from "../store";

import classes from "./counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const resetHandler = () => {
    dispatch(counterActions.reset(0));
  };

  const toggleHandler = () => {
    dispatch(counterActions.showCounter());
  };

  return (
    <>
      <main className={classes.main}>
        <Card>
          <h3 className={classes.heading}>Redux Counter</h3>
          {showCounter && <div className={classes.counterValue}>{counter}</div>}

          <div className={classes.counterBtns}>
            <Button onClick={incrementHandler}>Increment</Button>
            <Button onClick={increaseHandler}>Increase by 5</Button>
            <Button onClick={decrementHandler}>Decrement</Button>
            <Button onClick={resetHandler}>Reset</Button>
          </div>

          <div className={classes.toggleBtn}>
            <Button onClick={toggleHandler}>Toggle Result</Button>
          </div>
        </Card>
      </main>
    </>
  );
};

export default Counter;
