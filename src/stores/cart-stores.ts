import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

import * as cartInMemory from "./helpers/cart-in-memory"

import { ProductProps } from "@/utils/data/products";

export type ProductCartProps = ProductProps & {
    quantity: number;
}

type StateProps = {
    products: ProductCartProps[];
    addToCart: (product: ProductProps) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
}

export const useCartStore = create(
    persist<StateProps>((set) => ({
        products: [],
        addToCart: (product: ProductProps) =>
            set((state) => ({
                products: cartInMemory.addToCart(state.products, product),
            })),
        removeFromCart: (productId: string) =>
            set((state) => ({ products: cartInMemory.removeFromCart(state.products, productId) })),
        clearCart: () => set(() => ({products: []}))
    }), {
        name: "nlw-expert:cart",
        storage: createJSONStorage(() => AsyncStorage)
    }))