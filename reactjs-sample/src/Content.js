import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("Clicked");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click here 1</button>
      <button
        onClick={() => {
          handleClick2("Chinthaka");
        }}
      >
        Click here 2
      </button>
      <button
        onClick={(e) => {
          handleClick3(e);
        }}
      >
        Click here 3
      </button>
    </main>
  );
};

export default Content;
