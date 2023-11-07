import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";


// function ncard(Val) {
//   return (
//     <>
//       <h1>List of best Netflix Series </h1>
//       <Card img_src={Val.img_scr} img_alt={Val.img_alt} title={Val.title}
//         link={Val.link}></Card>

//     </>
//   )

// }

function App() {
  return (
    <>
      <h1>List of best Netflix Series </h1>

      {Sdata.map((Val) => {
        // console.log(Val);

        return (
          <>


            <Card key={Val.id} img_src={Val.img_scr} img_alt={Val.img_alt} title={Val.title}
              link={Val.link}></Card>

          </>
        )

      }

      )}



    </>)

}
export default App;
