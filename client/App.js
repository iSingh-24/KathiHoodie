import React, { useState } from "react";
import axios from "axios";

export const App = () => {
  const [text, setText] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(`Text is here ${text}`);
    const data = await axios.post("/postData", { text: text });
    console.log(data, "here is data");
    console.log(`Submit Handler Was Clicked`);
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
    //console.log(text, "here is text");
  };

  console.log(`Here is text ${text}`);

  return (
    <div>
      <h1>App Component</h1>
      <input type="text" onChange={(e) => onChangeHandler(e)} />
      <button type="submit" onClick={(e) => onSubmitHandler(e)}>
        Click Me
      </button>
    </div>
  );
};
