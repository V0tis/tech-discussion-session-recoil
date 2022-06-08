import { atom, selector } from "recoil";
import axios from 'axios';

export const foodState = atom({
  key: 'foodState', //(unique Id/unique key)
  default: ['참치', '참치김밥', '참치찌개', '참치카레', '참치참치'],
});

export const getFoodSelector = selector({
  key: "cookie/get",
  get: async ({ get }) => {
    try{
      // const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
      return data;
    } catch (err) {
    	throw err;
    }
  },
  set: ({set}, newValue)=> {
    set(foodState, newValue)
  }
});