import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Link } from "expo-router";

type HeaderProps = {
    title: string;
    cardValue?: number;
}

export function Header({ title, cardValue = 0 }: HeaderProps ){
    return (
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
            <View className="flex-1">
                <Image source={require("@/assets/logo.png")} className="h-6 w-32" />
                <Text className="text-white text-xl font-heading">{title}</Text>
            </View>
            <Link href="/cart" asChild>
                <TouchableOpacity className="relative" activeOpacity={0.7}>
                    {   
                    cardValue > 0 && (
                        <View className="bg-lime-300 w-5 h-5 rounded-full items-center justify-center top-2 z-10 -right-3.5">
                            <Text className="text-slate-900 font-bold text-xs">{cardValue}</Text>
                        </View>
                        )
                    }
                    <Feather name="shopping-bag" color={colors.white} size={24} />
                </TouchableOpacity>
            </Link>
        </View>
    )
}