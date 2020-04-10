import React from "react";
import "./FishCardsStyle.css";
import FishCardSection from "./FishCardSection";
import { FishData, fishDataType } from "./FishData";

const FishCards = () => {
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
