import React from "react";
import "./FishCardsStyle.css";
import FishCardSection from "./FishCardSection";
import { FishData, fishDataType } from "./FishData";

const FishCards = () => {
  const AddToCartHandler = (id: string, totalPrice: number) => {
    console.log("id", id);
    console.log("TotalPrice:", totalPrice);
  };
  return (
    <div>
      <section className="wrapper">
        <div className="container-fostrap">
          <div className="content">
            <div className="container">
              <div className="row">
                {FishData.map((item: fishDataType, idx: number) => (
                  <FishCardSection
                    key={idx}
                    props={item}
                    AddToCartHandler={AddToCartHandler}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FishCards;
