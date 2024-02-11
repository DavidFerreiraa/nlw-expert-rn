import { useCartStore } from "@/stores/cart-stores";
import { Header } from "@/components/header";
import { View } from "react-native";
import { Products } from "@/components/products";

export default function Cart(){
    const cartStore = useCartStore();
    return(
        <View className="flex-1 pt-8">
            <Header title="Seu carrinho"/>
            <View className="p-5 flex-1">
                {
                    cartStore.products.map((product) => (
                        <Products data={product} key={product.id} />
                    ))
                }
            </View>
        </View>
    );
}