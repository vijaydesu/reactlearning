import { useState } from "react";

function MyButton() {
  const [count, setCount]=useState(0);

  function handleClick()
  {
    setCount(count+1);
  }

  return (
    <button onClick={handleClick}>
      Click button {count} times.
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app - Click event</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}