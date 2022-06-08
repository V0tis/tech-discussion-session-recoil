import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FoodLoadable from "./containers/FoodLoadable";
import FoodAtom from "./containers/FoodAtom";
import FoodSelector from "./containers/FoodSelector";
import FoodAsyncAtom from "./containers/FoodAsyncAtom";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/atom" element={<FoodAtom />} />
          <Route path="/async/atom" element={<FoodAsyncAtom />} />
          <Route path="/selector" element={<FoodSelector />} />
          <Route path="/loadable" element={<FoodLoadable />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
