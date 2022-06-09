import React from 'react';
import { useRecoilValue } from 'recoil';
import { getSeoectedCommentAtom } from '../recoil/exampleState';

const FoodAtomFamilyItem = ({ data }) => {
  const { name , email, body, status } = useRecoilValue(getSeoectedCommentAtom(data));

  return (
    <div style={{ marginBottom: 32, borderBottom: '1px solid black' }}>
      <h1>name: {name}</h1>
      <h1>email: {email}</h1>
      <h1>body: {body}</h1>
      <h1>status: {status}</h1>
    </div>
  )
}

export default FoodAtomFamilyItem;