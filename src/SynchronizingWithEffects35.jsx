import { useState, useEffect } from "react";

const SynchronizingWithEffects35 = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    return setCount(count + 1);
  };
  useEffect(() => {
    if (count === 5) {
      alert("Hight FIVE!");
    }
  }, [count]);
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>
        <span>Result: {count}</span>
      </p>
    </div>
  );
};

export default SynchronizingWithEffects35;
