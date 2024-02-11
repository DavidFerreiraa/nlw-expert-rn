import { Header } from "@/components/Header";
import { CategoryButton } from "@/components/category-button";
import { FlatList, View } from "react-native"

export default function Home(){
    return (
        <View className="flex-1 pt-8">
            <Header title="Faça seu pedido" cardValue={0}/>
            <CategoryButton title="Lanche do dia"/>
        </View>
    );
}