// import React, { useState } from "react";
// import axios from "axios";

// export const App = () => {
//   const [text, setText] = useState("");

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     const data = await axios.post("/postData", { text: text });
//   };

//   const onChangeHandler = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <div>
//       <h1>App Component</h1>
//       <input type="text" onChange={(e) => onChangeHandler(e)} />
//       <button type="submit" onClick={(e) => onSubmitHandler(e)}>
//         Click Me
//       </button>
//     </div>
//   );
// };

import React from "react";
import TestForm from "./Components/TestForm";

export const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <h3>
        <TestForm />
      </h3>
    </div>
  );
};
