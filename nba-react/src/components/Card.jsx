import React, {useState} from "react";

// Card Images
import CardImage1 from '../assets/images/NBA_cards/card1.webp';
import CardImage2 from '../assets/images/NBA_cards/card2.webp';
import CardImage3 from '../assets/images/NBA_cards/card3.webp';
import CardImage4 from '../assets/images/NBA_cards/card4.webp';

function Card() {

  return (
    <>
      <section className="card_section css-grap20 container-fluid">
        <div className="container-fuid">
          <div className="row">
            
            <div className="car_item col-md-3">
              <a href="#">
                <div className="card_image">
                  <img src={CardImage4} className="img-fluid rounded" alt="..." />
                </div>
                <div className="card_content">
                  <h2 className="card_title">ATLANTA<br/> HAWKS</h2>
                </div>
              </a>
            </div>
            
            <div className="car_item col-md-3">
              <a href="#">
                <div className="card_image">
                  <img src={CardImage1} className="img-fluid rounded" alt="..." />
                </div>
                <div className="card_content">
                  <h2 className="card_title">ATLANTA<br/> HAWKS</h2>
                  <div className="card_text"><span>Rare</span> 500 minted</div>
                </div>
              </a>
            </div>
            
            <div className="car_item col-md-3">
              <a href="#">
                <div className="card_image">
                  <img src={CardImage2} className="img-fluid rounded" alt="..." />
                </div>
                <div className="card_content">
                  <h2 className="card_title">TRAE<br/> YOUNG</h2>
                  <div className="card_text"><span>Rare</span> 777 minted</div>
                </div>
              </a>
            </div>

            <div className="car_item col-md-3">
              <a href="#">
                <div className="card_image">
                  <img src={CardImage3} className="img-fluid rounded" alt="..." />
                </div>
                <div className="card_content">
                  <h2 className="card_title">DE'ANDRE<br/> HUNTER</h2>
                  <div className="card_text"><span>Rare</span> 2021 minted</div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
};

export default Card;