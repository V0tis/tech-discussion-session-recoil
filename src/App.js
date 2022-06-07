import React from 'react';
import { RecoilRoot } from 'recoil'
import FoodAtomContainer from './containers/FoodAtomContainer'

function App() {
  return (
    <RecoilRoot>
      <FoodAtomContainer />
    </RecoilRoot>
  );
}

export default App;
