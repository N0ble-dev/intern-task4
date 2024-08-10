//In React, state is an object that holds data or information about the component. The state of a component can change over time, and when it does, the component re-renders to reflect those changes on the user interface. State is managed within the component.

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me to increment
      </button>
    </div>
  );
}

export default Counter;
