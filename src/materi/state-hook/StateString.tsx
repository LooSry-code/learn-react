import { useState } from "react";

export const GreetingComponent = () => {
  // Gunakan useState untuk menyimpan state(data) dalam hal ini string
  const [greeting, setGreeting] = useState<string>("Selamat Datang");

  const handleClick = () => {
    setGreeting("Hello, World!");
  };

  return (
    <div>
      <p>{greeting}</p>
      <button onClick={handleClick}>Update Greeting</button>
    </div>
  );
};
