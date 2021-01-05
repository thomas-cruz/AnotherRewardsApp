import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    Dimensions, 
    Image, 
    ImageBackground, 
    KeyboardAvoidingView, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View 
} from 'react-native';
const{ width, height } = Dimensions.get('window');
export default function Login() {
  return (
    <View style={styles.container}>
        <Image source={require("../resources/user_login_icon.png")} style={styles.icon}/>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <View style={[styles.container, {alignSelf: 'center', backgroundColor: 'pink', width: width, flex:1}]}>
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='next'
                placeholder="Type your username here" 
                style={styles.input}
            />
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='next'
                placeholder="Type your password here" 
                style={styles.input}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.loginButton}>
                <Text style={{color: 'white',  alignSelf: 'center'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton}>
                <Text style={{color: 'white', alignSelf: 'center'}}>Register</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    icon: {
        maxWidth: '30%',
        maxHeight:'30%',
        resizeMode: 'contain',
    },
    input:{
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 3,
        padding: 15,
        margin: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 5,
        width: 240,
    },
    loginButton:{
        backgroundColor: '#003aae',
        borderRadius: 5,
        margin: 5,
        padding: 10,
        textAlign: 'center',
        width: 240,
    },
    registerButton:{
        backgroundColor: 'red',
        borderRadius: 5,
        margin: 5,
        padding: 10,
        textAlign: 'center',
        width: 240,
    },
    welcomeText: {
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 15
    }
});
