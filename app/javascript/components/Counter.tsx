import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Click Me
      </button>
    </>
  );
}
