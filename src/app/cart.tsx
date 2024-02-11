import { ProductCartProps, useCartStore } from "@/stores/cart-stores";
import { Header } from "@/components/header";
import { View, Text, ScrollView, Alert } from "react-native";
import { Products } from "@/components/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Input } from "@/components/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/link-button";
import { useState } from "react";

export default function Cart() {
    const [ street, setStreet ] = useState<string>("");
    const [ houseNumber, setHouseNumber ] = useState<string>("");
    const [ neighborhood, setNeighborhood ] = useState<string>("");
    const cartStore = useCartStore();
    const total = formatCurrency(cartStore.products.reduce((total, products) => total + products.price * products.quantity, 0));
    function handleProductRemove(product: ProductCartProps){
        Alert.alert("Remover", `Deseja remover o produto "${product.title}" do carrinho?`, [
            {
                text: "Cancelar",
            },
            {
                text: "Remover",
                onPress: () => cartStore.removeFromCart(product.id),
            }
        ])
    }
    function handleOrder(){
        if((street.trim().length === 0)) return Alert.alert("Pedido", "Informe sua rua") 
        if((houseNumber.trim().length === 0)) return Alert.alert("Pedido", "Informe o número da casa") 
        if((neighborhood.trim().length === 0)) return Alert.alert("Pedido", "Informe seu bairro") 

        const products = cartStore.products.map((product) => `\n ${product.quantity} ${product.title}`).join("")
        const message = `
            NOVO PEDIDO\n
            Entregar na ${street}, número: ${houseNumber}, bairro: ${neighborhood}\n
            ${products}\n
            Valor total: ${total}
        `
    }
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
                                        <Products data={product} key={product.id} onPress={() => handleProductRemove(product)}/>
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
                        <Text className="text-white text-base font-subtitle py-2">Informe seu endereço:</Text>
                        <View className="gap-2">
                            <Input placeholder="Rua" onChangeText={setStreet}/>
                            <View className="flex-row">
                                <Input placeholder="Número" onChangeText={setHouseNumber}/>
                                <View className="w-2"/>
                                <Input placeholder="Bairro" className="grow" onChangeText={setNeighborhood}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
            <View className="p-5 gap-5">
                <Button onPress={handleOrder}>
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