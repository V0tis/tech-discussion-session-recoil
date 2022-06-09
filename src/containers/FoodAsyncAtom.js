import React from "react";
import { useRecoilState } from "recoil";
import { CardState } from "../recoil/exampleState";
import axios from "axios";

const FoodAsyncAtom = () => {
  const [card, setCard] = useRecoilState(CardState);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );

      setCard(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>로딩중! 로딩중!</h1>
      ) : (
        <div>{card && JSON.stringify(card)}</div>
      )}
    </div>
  );
};

export default FoodAsyncAtom;
