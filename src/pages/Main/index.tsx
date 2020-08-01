import React, { useState } from "react";
import { createStore, createEvent, Store, Event } from "effector";
import { useStore } from "effector-react";

import { H1, H2, Button, Input } from "../../variables/styled";

const store: Store<number> = createStore(0);

const increment: Event<number> = createEvent();
const decrement: Event<number> = createEvent();

store.on(increment, (state: number, number: number) =>
  state + number < 0 ? 0 : state + number
);
store.on(decrement, (state: number, number: number) =>
  state - number < 0 ? 0 : state - number
);
store.watch((state) => {
  console.log("state: ", state);
});

const title: string =
  "Effects demonstration of an Effector with styled component library";

export default (): JSX.Element => {
  const value = useStore(store);
  const [currentIncrement, setCurrentIncrement] = useState(1);

  const incrementHandler: () => void = () => increment(1);
  const decrementHandler: () => void = () => decrement(1);

  const incrementChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => setCurrentIncrement(Number(e.target.value));
  const customIncrementHandler: () => void = () => increment(currentIncrement);

  return (
    <>
      <H1>{title}</H1>
      <H2>current value: {value}</H2>
      <Button onClick={incrementHandler}> +1 </Button>
      <Button onClick={decrementHandler}> -1</Button>
      <Input
        type="number"
        onChange={incrementChange}
        min="-10"
        max="10"
        value={currentIncrement}
      />
      <Button onClick={customIncrementHandler}>
        {currentIncrement < 0 ? currentIncrement : "+" + currentIncrement}
      </Button>
    </>
  );
};
