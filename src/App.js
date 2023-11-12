import React, { useState } from "react";
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



// function Netfun(NetSdata) {

//   return (
//     <>

//       {NetSdata.map((Val) => {

//        // console.log(Val);
//         return (
//           <>


//             <Card key={Val.id} img_src={Val.img_scr} img_alt={Val.img_alt} category={Val.category} title={Val.title}
//               link={Val.link} ></Card>

//           </>
//         )
//       })

//       }
//     </>

//   )
// }//Netfun


// function Amazefun(Amazedata) {
//   return (

//     <>
//       {
//         Amazedata.map((Val) => {
//           console.log(Val)
//           return (
//             <>
//               <Card key={Val.id} img_scr={Val.img_scr} img_alt={Val.img_alt} category={Val.category} title={Val.title}
//                 link={Val.link}></Card>
//             </>
//           )
//         }
//         )
//       }

//     </>
//   )
// }



function App() {
  // const  state= useState();
  // console.log(state);

  const NetSdata = Sdata.filter((Val) => Val.category === "Netflix");
  const Amazedata = Sdata.filter((Val) => Val.category === "Amazon");
  const [displayData, setDisplayData] = useState(Sdata);
  //console.log(NetSdata);

  return (
    <>
      <h1 className="Heading">List of best  Series </h1>

      <div className="button-container">
        <button id="all" onClick={() => setDisplayData(Sdata)}>All</button>
        <button id="net" onClick={() => setDisplayData(NetSdata)}> Netflix</button> <br /><br />
        <button id="amaze" onClick={() => setDisplayData(Amazedata)}>Amazon</button>

      </div>


      <div className="card-container">

        {displayData.map((item) => (
          <Card key={item.id} img_src={item.img_scr} img_alt={item.img_alt} category={item.category} title={item.title}
            link={item.link}></Card>
        ))}

      </div>
    </>)

}
export default App;
