import React from 'react';
import { RecoilRoot } from 'recoil'
import FoodAtomContainer from './containers/FoodAtomContainer'
import FoodSelectorContainer from './containers/FoodSelectorContainer';

function App() {
  return (
    <RecoilRoot>
      {/* <FoodAtomContainer /> */}
      <FoodSelectorContainer />
    </RecoilRoot>
  );
}

export default App;
