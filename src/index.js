import React from 'react'
import  ReactDOM from 'react-dom'

const fname="Hrushikesh"
const lname="T"
const d=new Date().toLocaleDateString();
const t=new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <h1>{`Hello this is ${fname} ${lname}`}</h1>
    <p>{`Today's date is ${d}`}</p>
    <p>{`Current Time is ${t}`}</p>
    
  </>,
  document.getElementById("root")


)