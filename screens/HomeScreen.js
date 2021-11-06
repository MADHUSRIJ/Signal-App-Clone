import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { auth } from '../firebase'

const HomeScreen = ({navigation}) => {

    const logout = () => {
        auth.signOut()
        .then(() => {
            navigation.replace("Login");
            alert("SignOut Successful")
        })
        .catch((error) => alert(error));
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text>This is the home Page</Text>
            <Button 
            title="Logout" 
            onPress = {logout}
            style = {styles.button}
            buttonStyle={{ backgroundColor: "#03ACB5", borderColor: "#03ACB5" }} 
            titleStyle={{ color: "white" }} />
        </KeyboardAvoidingView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        width: 200,
        marginTop: 10,
    }

})
