import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            // state.cartItems = action.payload
            // console.log(state.cartItems);
            const item = state.cartItems.find((p) => p.id === action.payload.id)
            if (item) {
                item.quantity++;
                item.attributes.price = +item.oneQuantityPrice * item.quantity;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        updateCart: (state, action) => {
            // console.log(state.cartItems);
            state.cartItems = state.cartItems.map((p) => {
                // console.log('Product from cart Items : ', p);
                if(p.id === action.payload.id) {
                    if(action.payload.key === "quantity") {
                        p.attributes.price = +p.oneQuantityPrice * +action.payload.val
                    }
                    return { ...p, [action.payload.key] : action.payload.val }
                }

                return p;
            }) 
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((p) => {
                return p.id !== action.payload.id;
            })
        }
    }
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;