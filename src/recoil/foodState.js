import { atom } from "recoil";

export const foodState = atom({
  key: 'foodState', //(unique Id/unique key)
  default: ['참치', '참치김밥', '참치찌개', '참치카레', '참치참치'],
});