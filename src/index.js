import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

//display multiple elements using render using array 
/*ReactDOM.render(
[<h1>Hiii</h1>,
<p>This is p tag </p>,
<h2>This is H2 Tag </h2>
],
document.getElementById("root"));
*/

// to display same above using above  using div for Version <v16
//but below was creating unnecessary additional div tag in HTML 
// ReactDOM.render(
//   <div>
//     <h1>Hiii</h1>
//     <p>This is p tag </p>
//     <h2>This is H2 Tag </h2>
//   </div>,
//   document.getElementById("root")

// )

//same above using react fragment
// ReactDOM.render(
//   <React.Fragment>
//     <h1>Hiii</h1>
//     <p>This is p tag </p>
//     <h2>This is H2 Tag .</h2>

//   </React.Fragment>,
//   document.getElementById("root")
// )


//same reactfragment can be used as below:
ReactDOM.render(
  <>
    <h1>Hiii</h1>
    <p>This is p tag </p>
    <h2>This is H2 Tag .</h2>

  </>,
  document.getElementById("root")
)