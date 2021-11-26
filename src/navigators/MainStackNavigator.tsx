import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNica from '../screens/HomeNica';
import HomeWorksList from '../screens/HomeWorksList';

export type MainStackParamList = {
    HomeNica: undefined;
    HomeWorksList: { id: number, tweet_text: string };

};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="HomeNica">
        <Stack.Screen
            name="HomeNica"
            component={HomeNica}
            options={{ title: 'Inicio' }} />
        <Stack.Screen
            name="HomeWorksList"
            component={HomeWorksList}
            options={{ title: 'Tareas',
            headerStyle: {
              backgroundColor: '#C4C4C4',
              
            },
            headerTintColor: '#000000',
            
            headerTitleStyle: {
              fontWeight: 'bold',
             
            }, }}
             />
    </Stack.Navigator>
    )
}

export default MainStackNavigator

const styles = StyleSheet.create({})
