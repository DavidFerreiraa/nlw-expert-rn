import { Header } from "@/components/Header";
import { CategoryButton } from "@/components/category-button";
import { FlatList, View } from "react-native"

import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";


export default function Home(){
    
    const [category, setCategory] = useState(CATEGORIES[0])

    function handleCategorySelect(selectedCategory: string){
        setCategory(selectedCategory)
    }

    return (
        <View className="flex-1 pt-8">
            <Header title="Faça seu pedido" cardValue={0}/>
            <FlatList data={CATEGORIES} keyExtractor={(item) => item} renderItem={({item}) => {
                return (<CategoryButton title={item} isSelected={item === category} onPress={() => {handleCategorySelect(item)}}/>);
            }} horizontal className="max-h-10 mt-5" contentContainerStyle={{gap: 12, paddingHorizontal: 20}} showsHorizontalScrollIndicator={false}/>
        </View>
    );
}