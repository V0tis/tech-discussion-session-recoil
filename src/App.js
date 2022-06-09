import React, { lazy, Suspense } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const FoodAtom = lazy(() => import("./containers/FoodAtom"));
const FoodSelector = lazy(() => import("./containers/FoodSelector"));
const FoodAsyncAtom = lazy(() => import("./containers/FoodAsyncAtom"));
const FoodLoadable = lazy(() => import("./containers/FoodLoadable"));
const FoodAtomFamily = lazy(() => import("./containers/FoodAtomFamily"));
const FoodAtomFamilyItem = lazy(() => import("./containers/FoodAtomFamilyItem"));
const FoodSelectorFamily = lazy(() => import("./containers/FoodSelectorFamily"));

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/atom" element={<FoodAtom />} />
          <Route path="/async/atom" element={<FoodAsyncAtom />} />
          <Route path="/selector" element={
          <Suspense fallback={<h1>로딩중! 로딩중!</h1>}>
            <FoodSelector />
          </Suspense>
          } />
          <Route path="/atom/family/:postId" element={<FoodAtomFamily />} />
          <Route path="/selector/family/:postId" element={<FoodSelectorFamily />} />
          <Route path="/loadable" element={<FoodLoadable />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
