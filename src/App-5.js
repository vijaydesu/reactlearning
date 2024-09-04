import { useState } from "react";

function MyButton({count,onClick}) {
  return (
    <button onClick={onClick}>
      Click button {count} times.
    </button>
  );
}

export default function MyApp() {
  const [count, setCount]=useState(0);

  function handleClick()
  {
    setCount(count+1);
  }
  return (
    <div>
      <h1>Welcome to my app - Click event - Global Counter</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}