import React, {useState} from "react";

// Card Images
import BigSale from '../assets/images/BigSale_GraphicTemplate_60k.webp';

function Discount() {

  return (
    <>
      <section className="discount_section css-grap20 container-fluid">
        <img src={BigSale} className="img-fluid" alt="..." />
      </section>
    </>
  )
};

export default Discount;