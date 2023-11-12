import React from "react";

function Card(Props) {

    return (
        <>

            <div className="card"  >

                <div className="cards" >


                    <img style={{
                        width: "200px",
                        height: "300px"
                    }} className="card_img" src={Props.img_src} alt={Props.img_alt} />
                    <div className="card_info">

                        <span className="card_category">{Props.category}</span>
                        <h3 className="card_title">{Props.title}</h3>
                        <a href={Props.link} target="_blank">
                            <button >Watch Now</button>

                        </a>
                    </div>
                </div>

            </div>
        </>


    );
}


export default Card;