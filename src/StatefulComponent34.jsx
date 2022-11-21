import { useState } from "react";

const StatefulComponent34 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    return setCount(count + 1);
  };

  const decrement = () => {
    return count > 0 && setCount(count - 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <p>
        <span>Result: {count} </span>
      </p>
    </div>
  );
};

export default StatefulComponent34;
