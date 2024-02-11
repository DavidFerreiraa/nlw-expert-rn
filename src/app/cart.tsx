import { useCartStore } from "@/stores/cart-stores";
import { Header } from "@/components/header";
import { View, Text, ScrollView } from "react-native";
import { Products } from "@/components/products";
import { formatCurrency } from "@/utils/functions/format-currency";

export default function Cart() {
    const cartStore = useCartStore();
    const total = formatCurrency(cartStore.products.reduce((total, products) => total + products.price * products.quantity, 0));
    return (
        <View className="flex-1 pt-8">
            <Header title="Seu carrinho" />
            <ScrollView>
                {cartStore.products.length > 0 ?
                    <View className="p-5 flex-1">
                        {
                            cartStore.products.map((product) => (
                                <Products data={product} key={product.id} />
                            ))
                        }
                    </View>
                    :
                    <Text className="text-slate-400 font-body text-center my-8">Seu carrinho está vazio</Text>
                }
                <View className="flex-row gap-2 items-center mt-5 mb-4">
                    <Text className="text-white text-xl font-subtitle">Total:</Text>
                    <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
                </View>
            </ScrollView>
        </View>
    );
}