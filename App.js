import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const globalScreenOptions = {
  backgroundColor: 'white',
    headerStyle:{
      backgroundColor: "#03ACB5",
     
    },
    headerTitleStyle: {
      color: "white",
      marginHorizontal: 320,
    },
    headerTintColor: "white"
}

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator screenOptions = {globalScreenOptions}>
        <Stack.Screen options={
          { title: "Sign Up"}
        } name='Login' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
