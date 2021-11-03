import React from "react";
import { Text, TouchableOpacity,View } from "react-native";

 export default function Hello( {navigation}){
return(
    <View>

    <Text>Heloo Home.js</Text>
    <TouchableOpacity>
        <Text onPress={()=>{
   navigation.navigate("Counter")
        }}>go to counter</Text>

    </TouchableOpacity>
    </View>
)
}