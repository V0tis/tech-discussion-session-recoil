import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

const FoodSelector = () => {
  const { postId } = useParams();
  const [card] = useRecoilState(postId);

  return (
    <div>
      {card && JSON.stringify(card)}
    </div>
  );
};

export default FoodSelector;
