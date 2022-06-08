import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getCommentSelector } from "../recoil/foodState";

const FoodSelectorFamily = () => {
  const { postId } = useParams();
  const commentSelector = useRecoilValue(getCommentSelector(postId));

  console.log('commentSelector', commentSelector);

  return (
    <div style={{ padding: 16 }}>
      {
        commentSelector.map(({ name, id, email, body }) => <div key={id} style={{ marginBottom: 32, width: 300, borderBottom: '1px solid black' }}>
          <h3>NAME: {name}</h3>
          <h3>EMAIL: {email}</h3>
          <h3>BODY: {body}</h3>
        </div>)
      }
    </div>
  );
};

export default FoodSelectorFamily;
