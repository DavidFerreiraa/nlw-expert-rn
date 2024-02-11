import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Product(){
    
    const { id } = useLocalSearchParams();
    
    console.log(id);
    return(
        <View className="flex-1">

        </View>
    );
}