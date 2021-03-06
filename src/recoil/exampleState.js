import { atom, atomFamily, selector, selectorFamily, waitForAll } from "recoil";
import axios from "axios";

export const foodState = atom({
  key: "foodState",
  default: ["참치", "참치김밥", "참치찌개", "참치카레", "참치참치"],
});

export const CardState = atom({
  key: "cardState",
  default: [],
});

export const CommentState = atom({
  key: "commentState",
  default: [],
});

export const getCardSelector = selector({
  key: "food/get",
  get: async ({ get }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      return data;
    } catch (err) {
      throw err;
    }
  },
  set: ({ set }, newValue) => {
    set(CardState, newValue);
  },
});

export const getCommentSelector = selectorFamily({
  key: "commentSelectorFamily",
  get: (postId) => async () => {
    if (!postId) return "";

    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    
    return data;
  },
});

export const getSeoectedCommentAtom = atomFamily({
  key: "getSeoectedCommentAtom",
  default: (data) => {
    return {
      ...data,
      status: 'alive'
    }
  },
})
