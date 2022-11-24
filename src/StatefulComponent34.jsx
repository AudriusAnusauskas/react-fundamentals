import { useState, useCallback } from "react";

const StatefulComponent34 = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    return setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    return count > 0 && setCount(count - 1);
  }, [count]);

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
