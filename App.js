import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./components/index";
import AuthPage from "./components/auth";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        {/* <Stack.Screen name="Auth" component={AuthPage} /> */}
        <Stack.Screen name="homepage" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

