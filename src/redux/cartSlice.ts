import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductList = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

type ProductListState = {
  productlist: ProductList[];
};
const initialState: ProductListState = {
  productlist: [],
};

const cartSlice = createSlice({
  name: "cartsl",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductList>) => {
      state.productlist.push({
        id: action.payload.id,
        name: action.payload.name,
        imgUrl: action.payload.imgUrl,
        price: action.payload.price,
      });
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
