// Props (short for properties) are a mechanism in React for passing data from one component to another. They are read-only and are usually passed from a parent component to a child component. Props allow components to be dynamic and reusable by allowing data to be passed down the component tree.

import React from 'react';

function ChildComponent({ message }) {
  return <h1>{message}</h1>;
}

function ParentComponent() {
  const message = "Hello from the parent component!";
  
  return (
    <div>
      <ChildComponent message={message} />
    </div>
  );
}

export default ParentComponent;
