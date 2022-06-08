import React from 'react';
import { useRecoilState } from 'recoil';
import { getFoodSelector } from '../recoil/foodState';

const FoodSelectorContainer = () => {
  const [food] = useRecoilState(getFoodSelector);

  return (
    <div>
      <code>
        {JSON.stringify(food)}
      </code>
      <button>update</button>
    </div>
  );
};

export default FoodSelectorContainer;