import React, { useState } from "react";

type IProps = {
  onCounterBtnClick: (counter: number) => void;
};

const StateAndEventComponent = (props: IProps) => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <p data-testid="counter">you clicked {counter} times.</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
          props.onCounterBtnClick(counter + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
};

export default StateAndEventComponent;
