import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getCardSelector } from "../recoil/foodState";

const FoodSelector = () => {
  const [card] = useRecoilState(getCardSelector);

  return (
    <div>
      <Link to="/atom">Atom</Link> | <Link to="/selector">Selector</Link>
      {card && JSON.stringify(card)}
    </div>
  );
};

export default FoodSelector;
