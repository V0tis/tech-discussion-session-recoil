import React from 'react';
import { useRecoilState } from 'recoil';
import { getFoodSelector } from '../recoil/foodState';

const FoodSelectorContainer = () => {
  const [food, setFood] = useRecoilState(getFoodSelector);
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

export default FoodSelectorContainer;