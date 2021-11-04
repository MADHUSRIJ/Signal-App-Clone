import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'

const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const signIn = {

    }



    return (
        <KeyboardAvoidingView behavior='padding'
            style={styles.container}>
            <StatusBar style="light" />
            <Image source={{
                uri: 'https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg'
            }}

                style={{
                    marginHorizontal: 300,
                    width: 200,
                    height: 200,
                }}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email"
                    autoFocus
                    type="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={pass}
                    onChangeText={(text) => setPass(text)}

                />
            </View>
            <Button
                buttonStyle={{ backgroundColor: "#03ACB5", borderColor: "#03ACB5" }}
                title='Login' containerStyle={styles.button} onPress={signIn} />
            <Button title='Register' titleStyle={{color: "#03ACB5"}} buttonStyle={{borderColor: "#03ACB5" }} type="outline" containerStyle={styles.button}  />
            <View style={{ height: 100 }}></View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    inputContainer: {
        margin: '10px',
        width: 400,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
