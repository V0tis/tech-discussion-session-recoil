import React from "react";
import { useRecoilState } from "recoil";
import { foodState } from "../recoil/exampleState";
import { Link } from "react-router-dom";

const FoodAtom = () => {
  const [food, setFood] = useRecoilState(foodState);
  // const food = useRecoilValue(foodState);
  // const setFood = useSetRecoilState(foodState)

  return (
    <div>
      <Link to="/atom">Atom</Link> | <Link to="/selector">Selector</Link>
      {food.map((text) => (
        <h1 key={text}>{text}</h1>
      ))}
      <button onClick={() => setFood([...food, `정참치_${food.length + 1}`])}>
        update
      </button>
    </div>
  );
};

export default FoodAtom;
