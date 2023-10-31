import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

const name = "Hrushikesh";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
ReactDOM.render(
  <>
    <h1 className="heading" >Hi ,I am  {name} .</h1>
    {/* In html contenteditable but in jsx camelCase contentEditable. */}

    <div className="img_div">  
      <a href="https://adarshwebdeveloperhrushikesh.netlify.app" target="_blanc">
      <img src={img1} alt="RandomImage" />
    </a>
    <img src={img2} alt="RandomIMg2" />
    <img src={img3} alt="RandomImg3" />
    </div>



  </>
  , document.getElementById("root"))