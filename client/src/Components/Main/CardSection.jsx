import React from "react";
import {cardData} from "../../assets/CardData"
import Card from "./Card";

const CardSection = () => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-2 pt-8 mb-10">
        {cardData.map((card) => {
          if(card.status === "Online"){
            return (
              <Card
                key={card.id}
                name={card.name}
                img={card.image}
                status={card.status}
              ></Card>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CardSection;