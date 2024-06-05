import React, { useState } from 'react';
import { StyledCounterList, CounterNumber, CounterButton } from './styledCounterList';

export default function CounterList({ handleClick }) {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount(count + 1);
    handleClick();
  };

  return (
    <StyledCounterList>
      <CounterNumber>{count}</CounterNumber>
      <CounterButton onClick={handleIncrementClick}>+💰</CounterButton>
    </StyledCounterList>
  );
}
