import React from 'react'
import { Text, View } from 'react-native'
import Icon  from "react-native-vector-icons/Ionicons";

export const LoadingScreen = () => {
    return (
        <View>
            <Text>Loading Screen</Text>

            <Icon
                name="star-outline"
                color="red"
                size={ 110 }
            />
        </View>
    )
}
