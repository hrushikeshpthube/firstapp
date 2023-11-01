import React from  "react";
import ReactDOM from "react-dom";

const d1=new Date().toLocaleDateString();
const d=new Date().getHours();
let greeting="";
const s={color:""}

if (d>=1 && d<12)
{
s.color="green";
greeting="Good Morning";
}
else if(d>=12 && d<18)
{
  s.color="Orange";
  greeting="Good Afternoon";
}
else
{
  s.color="Black"
  greeting="Good Night"
}
ReactDOM.render(
<>
  <h1> Hello Hrushikesh,<span style={s}>{`${greeting}`} </span></h1>
  
</>
,document.getElementById("root"))