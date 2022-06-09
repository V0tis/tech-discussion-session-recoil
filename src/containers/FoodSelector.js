import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getCardSelector } from "../recoil/exampleState";

const FoodSelector = () => {
  const { postId } = useParams();
  const [card] = useRecoilState(getCardSelector);

  return (
    <div>
      {card && JSON.stringify(card)}
    </div>
  );
};

export default FoodSelector;
