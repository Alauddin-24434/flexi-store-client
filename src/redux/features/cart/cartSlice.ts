import { createSlice } from "@reduxjs/toolkit";

// Define the structure of a cart item
interface CartItem {
    _id: string;
    userId: string;
    name: string;
    category: string;
    price: number;
    thumbnailImage: string;
    quantity: number;
    isAvailable: boolean;
}

// Define the structure of the cart state
interface CartState {
    items: CartItem[];
}

// Initial state with the CartState type
const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product: CartItem = action.payload;

            // Find existing product in the cart for the same user
            const existingProduct = state.items.find(
                (item) => item._id === product._id && item.userId === product.userId
            );

            if (existingProduct) {
                // If product already exists, update the quantity
                existingProduct.quantity += product.quantity;
            } else {
                // If product does not exist, add it to the cart
                state.items.push(product);
            }
        },
        removeFromCart: (state, action) => {
            const { userId, productId } = action.payload;
            // Filter out the specific product for the user
            state.items = state.items.filter(
                (item) => !(item._id === productId && item.userId === userId)
            );
        },
        clearCart: (state, action) => {
            const { userId } = action.payload;
            // Remove all products for the specific user
            state.items = state.items.filter((item) => item.userId !== userId);
        },
        increaseQuantity: (state, action) => {
            const { userId, productId } = action.payload;
            const product = state.items.find(
                (item) => item._id === productId && item.userId === userId
            );
            if (product) {
                product.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const { userId, productId } = action.payload;
            const product = state.items.find(
                (item) => item._id === productId && item.userId === userId
            );
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },
    },
});

// Export the action creators and reducer
export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
