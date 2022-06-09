import React from "react";
import { useRecoilValueLoadable } from "recoil";
import PhotoCard from "../components/PhotoCard";
import { getCardSelector } from "../recoil/exampleState";

const FoodLoadable = () => {
  const foodLoadable = useRecoilValueLoadable(getCardSelector);

  return (
    <div style={{ padding: 48 }}>
      {foodLoadable.state === "hasValue" && (
        <div>
          {foodLoadable.contents.map((data) => (
            <PhotoCard key={data.title} data={data} />
          ))}
        </div>
      )}
      {foodLoadable.state === "loading" && <h1>로딩중! 로딩중!</h1>}
      {foodLoadable.state === "hasError" && <h1>에러발생! 에러발생!</h1>}
    </div>
  );
};

export default FoodLoadable;
