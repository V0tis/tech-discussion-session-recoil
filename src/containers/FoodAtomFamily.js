import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getCommentSelector } from "../recoil/exampleState";
import CommentAtomFamilyItem from './FoodAtomFamilyItem.js'

const FoodAtomFamily = () => {
  const { postId } = useParams();
  const commentList = useRecoilValue(getCommentSelector(postId));

  return (
    <div className="images">
      {commentList.map((data) => (
        <Suspense key={data.id} fallback="로딩중! 로딩중!">
          <CommentAtomFamilyItem data={data} />
        </Suspense>
      ))}
    </div>
  );
};

export default FoodAtomFamily;
