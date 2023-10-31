import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

//display multiple elements using render using array 
ReactDOM.render(
[<h1>Hiii</h1>,
<p>This is p tag </p>,
<h2>This is H2 Tag </h2>
],
document.getElementById("root"));

/* 
//React
ReactDOM.render(<h1>Hiii</h1>,document.getElementById("root"));

//simple JS
var h1 = document.createElement("h1");
h1.innerHTML = "Hello";
document.getElementById("root").appendChild(h1);
*/