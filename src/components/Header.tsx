import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

type HeaderProps = {
    title: string;
}

export function Header({ title }: HeaderProps ){
    return (
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
            <View className="flex-1">
                <Image source={require("@/assets/logo.png")} className="h-6 w-32" />
                <Text className="text-white text-xl font-heading">{title}</Text>
            </View>
            <TouchableOpacity className="relative">
                <View className="bg-lime-300 w-5 h-5 rounded-full items-center justify-center top-2 z-10 -right-3.5">
                    <Text className="text-slate-900 font-bold text-xs">1</Text>
                </View>
                <Feather name="shopping-bag" color={colors.white} size={24} />
            </TouchableOpacity>
        </View>
    )
}