import React from "react";
import ReactDOM from "react-dom";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/200/300";
const img3 = "https://picsum.photos/200/300";
ReactDOM.render(
  <>
    <h1 contentEditable="true">Hi Demo</h1>
    {/* In html contenteditable but in jsx camelCase contentEditable. */}

    <a href="https://adarshwebdeveloperhrushikesh.netlify.app" target="_blanc">
      <img src={img1} alt="RandomImage" />
      {/* img is self closing tag so use <img />  */}
    </a>

  </>
  , document.getElementById("root"))