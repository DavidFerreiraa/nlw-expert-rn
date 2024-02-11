import { useCartStore } from "@/stores/cart-stores";
import { Header } from "@/components/header";
import { View, Text, ScrollView } from "react-native";
import { Products } from "@/components/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Input } from "@/components/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/link-button";

export default function Cart() {
    const cartStore = useCartStore();
    const total = formatCurrency(cartStore.products.reduce((total, products) => total + products.price * products.quantity, 0));
    return (
        <View className="flex-1 pt-8">
            <Header title="Seu carrinho" />
            <KeyboardAwareScrollView>
                <ScrollView>
                    <View className="p-5 flex-1">
                        {cartStore.products.length > 0 ?
                            <View className="border-b border-slate-700">
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
                        <Input placeholder="Informe seu endereço"></Input>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
            <View className="p-5 gap-5">
                <Button>
                    <Button.Text>Enviar pedido</Button.Text>
                    <Button.Icon>
                        <Feather name="arrow-right-circle" size={20}/>
                    </Button.Icon>
                </Button>
                <LinkButton title="Voltar ao cardápio" href="/" />
            </View>
        </View>
    );
}