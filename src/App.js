import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";


function App() {
  return (
    <>
      <h1>List of best Netflix Series </h1>
      <Card img_src={Sdata[0].img_scr} img_alt={Sdata[0].img_alt} title={Sdata[0].title}
        link={Sdata[0].link}></Card>
      <Card img_src={Sdata[1].img_scr} img_alt={Sdata[1].img_alt} title={Sdata[1].title}
        link={Sdata[1].link}></Card>
      <Card img_src={Sdata[2].img_scr} img_alt={Sdata[2].img_alt} title={Sdata[2].title}
        link={Sdata[2].link}></Card>

    </>
  );
}
export default App;
