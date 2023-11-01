import React  from "react";
import add,{sub,mul,div} from './Heading';

function App()
{
  return(
<>
  <ol>
    <li> Sum of  2 no is {add(4,5)}</li>
    <li> sub of  2 no is {sub(4,5)}</li>
    <li> mul of  2 no is {mul(4,5)}</li>
    <li> div of  2 no is {div(10,5)}</li>
  </ol>
</>
  )
}
export default App;
