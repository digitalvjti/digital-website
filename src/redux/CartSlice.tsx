import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { Item5 } from "../data/data";
import store from "./store";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") || "")
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAdditemToCart: (state: any, action: PayloadAction<Item5>) => {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success(`Quantidade de item aumentada`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);

        toast.success(`${action.payload.title} adicionado ao carrinho`);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setRemoveItemFormToCart: (state, action) => {
      const filtered = state.cartItems.filter(
        (item: any) => item.id !== action.payload
      );
      const finded = state.cartItems.find(
        (item: any) => item.id === action.payload
      );

      state.cartItems = filtered;

      toast.success(`${finded.title} Removido do Carrinho`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setIncreaseCartItems: (state, action) => {
      state.cartItems.find((item: any) => {
        if (item.id === action.payload) {
          if (item.cartQuantity >= 0) {
            item.cartQuantity += 1;
          }
        }
        return -1;
      });
      toast.success(`Quantidade de item aumentada`);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseCartItems: (state, action) => {
      state.cartItems.find((item: any) => {
        if (item.id === action.payload) {
          if (item.cartQuantity > 1) {
            item.cartQuantity -= 1;
            toast.success(`Quantidade de item diminuída`);
          } else {
            const filtered = state.cartItems.filter(
              (item: any) => item.id !== action.payload
            );
            state.cartItems = filtered;
            toast.success(`Item removido do carrinho`);
          }
        }
        return -1;
      });
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setClearCartItems: (state) => {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      toast.success(`Carrinho Limpo`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setGetTotals: (state) => {
      let amount = 0;
      state.cartItems.map((item: any) => {
        state.cartTotalQuantity = state.cartItems.length;
        amount += Number(item.price * item.cartQuantity);
        state.cartTotalAmount = amount;
        console.log("BURA VALOR", amount);
        return -1;
      });
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAdditemToCart,
  setClearCartItems,
  setRemoveItemFormToCart,
  setIncreaseCartItems,
  setDecreaseCartItems,
  setGetTotals,
} = CartSlice.actions;

export const selectCartState = (state: any) => state.cart.cartState;
export const selectCartItems = (state: any) => state.cart.cartItems;
export const selectGetTotalPrice = (state: any) => state.cart.cartTotalAmount;
export const selectGetTotalQuantity = (state: any) =>
  state.cart.cartTotalQuantity;

export default CartSlice.reducer;
export type RootState = ReturnType<typeof store.getState>;
