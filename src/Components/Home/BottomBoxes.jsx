import React from "react";
import mushroom from "../../assets/components/mushroom.png";


export default function BottomBoxes() {
  return (
    <section className="bottom-boxes">
      <div className="lider-box box">
        <div className="award"></div>
      </div>
      <div className="geral-box box ">
        <div className="tab-line">
      <div className="mushroom"><img src={mushroom}alt="mushroom" /></div>
        </div>
  
      </div>
    </section>
  );
}
