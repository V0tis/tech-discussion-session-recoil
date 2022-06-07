import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { foodState } from '../recoil/foodState';

const FoodAtomContainer = () => {
  const [food, setFood] = useRecoilState(foodState);
  // const food = useRecoilValue(foodState);
  // const setFood = useSetRecoilState(foodState)
  // setter

  return (
    <div>
      { food.map((text) => <h1 key={text}>{text}</h1>) }
      <button onClick={() => setFood([...food, '정참치'])}>update</button>
    </div>
  );
};

export default FoodAtomContainer;