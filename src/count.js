import React, { useState } from 'react';

const Counter = () => {
  // 0에서 출발
  // 1씩 증가하고
  // 1씩 감소하는 형태

  console.log('counter 호출!'); // 함수가 다시 호출되는지 확인하기 위해

  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1); // 0 + 1
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;
