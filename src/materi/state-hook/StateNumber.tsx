import { useState } from "react";

export const CounterComponent = () => {
  // Gunakan useState untuk menyimpan state(data) dalam hal ini string
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>Curent Count = {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
