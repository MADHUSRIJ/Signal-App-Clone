import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createStackNavigator();

const globalScreenOptions = {
  backgroundColor: 'white',
  
  headerStyle: {
    backgroundColor: "#03ACB5",

  },
  headerTitleStyle: {
    color: "white",
    marginHorizontal: 20,
    fontSize: 30,

  },
  headerTintColor: "white"
}

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen options={
          { title: "Login" }
        } name='Login' component={LoginScreen} />
        <Stack.Screen options={
          { title: "Register" }
        } name='Register' component={RegisterScreen} />
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
