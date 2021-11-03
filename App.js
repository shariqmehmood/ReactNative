
import React, { version } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Hello from './src/component/hello';
import Counter from './src/component/counter';
import About from './src/component/about';
import WATCH from './src/component/watschvedio';
let Stack=createNativeStackNavigator()
let Tab=createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Hello" component={Hello} />
        <Stack.Screen name="Counter" component={Counter} />
      </Stack.Navigator>  */}

        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'About') {
              iconName = focused
                ? "glasses-outline"
                : 'ios-information-circle-outline';
            } else if (route.name === 'Watch') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'blue',
        })}
        >
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Watch" component={WATCH} />

        

      </Tab.Navigator> 
        
      )
      
      
 
     
    </NavigationContainer>
         
  );
}
