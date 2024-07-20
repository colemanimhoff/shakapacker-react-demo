import React, { useState } from 'react';

const HelloMessage = ({ name }: { name: string }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>{count}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Count
      </button>
    </>
  );
};

export default HelloMessage;
