import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Chinthaka");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count+1);
    console.log(count);
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p>Hello {name}!</p>
      <button onClick={handleClick}>Click here 1</button>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={(e) => {handleClick3(e);}}>Click here 3</button>
    </main>
  );
};

export default Content;
