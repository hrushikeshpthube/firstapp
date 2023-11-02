import React from "react";
import Card from "./Cards";


function App() {
  return (
    <>
      <h1>List of best Netflix Series </h1>
      <Card img_src="https://wallpapercave.com/wp/wp4056410.jpg" img_alt="Dark IMG" title="Dark"
        link="https://www.netflix.com/in/title/80100172"></Card>
      <Card img_src="https://th.bing.com/th/id/OIP.iKrKTKjz7OMDtHFVN8m3AAHaKX?pid=ImgDet&rs=1" img_alt="Narcos IMG" title="Narcos"
        link="https://www.netflix.com/in/title/80025172"></Card>
      <Card img_src="https://th.bing.com/th/id/OIP.igOb01McTK2EDytFMSPB9gHaLH?pid=ImgDet&w=1100&h=1650&rs=1" img_alt="Peaky Blinders IMG" title="Peaky Blinders"
        link="https://www.netflix.com/in/title/80002479"></Card>


    </>
  );
}
export default App;
