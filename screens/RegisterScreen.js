import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button,Input, Image } from 'react-native-elements'

const RegisterScreen = ({ navigation }) => {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Pass, setPass] = useState("");
    const [Image, setImage] = useState("");

    const register = () => {};


    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />
            <Text h1
                style={
                    {
                        marginBottom: 50,
                        color: "#03ACB5",
                        textDecorationLine: "underline",
                        fontSize: 25,
                        fontWeight: 600
                    }
                }>
                CREATE AN ACCOUNT
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autoFocus
                    type="text"
                    value = {Name}
                    onChangeText = {(text) => setName(text)}
                    placeholderTextColor="#D0D0D0" />
                <Input
                    placeholder="Email"
                    type="email"
                    value = {Email}
                    onChangeText = {(text) => setEmail(text)}
                    placeholderTextColor="#D0D0D0" />
                <Input
                    placeholder="Password"
                    type="password"
                    value = {Pass}
                    secureTextEntry
                    onChangeText = {(text)=> setPass(text)}
                    placeholderTextColor="#D0D0D0" />
                <Input
                    placeholder="Profile Picture URL (optional)"
                    type="text"
                    value = {Image}
                    onChangeText = {(text)=> setImage(text)}
                    placeholderTextColor="#D0D0D0"
                    onSubmitEditing = {register}

                     />
            </View>
            <Button 
            style = {styles.button}
            buttonStyle = {{
                backgroundColor: "#03ACB5",
                borderColor: "#03ACB5"
                
            }}
            titleStyle = {{
                color: "white"
            }}
             title="Submit" 
             onPress={register}/>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    inputContainer: {
        width: 500,
        margin: "10px",
        marginBottom: "10px",
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
