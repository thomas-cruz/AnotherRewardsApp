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
export default function Home() {
  return (
    <View style={[styles.container,{alignSelf: 'center',}]}>
        <ImageBackground source={require("../resources/cloud_bottom.jpg")} style={[styles.container,{minWidth: width, flex:1}]}>
            <Image source={require("../resources/user_login_icon.png")} style={styles.icon}/>
            <Text style={styles.welcomeText}>Welcome Home!</Text>
        </ImageBackground>
        <View style={[styles.container, {flexDirection:'row',backgroundColor: 'white', width: width, marginBottom: 40,  marginTop: -30}]}>
            <TouchableOpacity 
                style={styles.loginButton}
            >
                <Text style={{color: 'white',  alignSelf: 'center'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton}>
                <Text style={{color: 'white', alignSelf: 'center'}}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.loginButton}
            >
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
    },
    icon: {
        justifyContent: 'flex-start',
        marginTop: 15,
        maxWidth: '30%',
        maxHeight:'30%',
        padding: 0,
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
    },
    registerButton:{
        backgroundColor: 'red',
        borderRadius: 5,
        margin: 5,
        padding: 10,
        textAlign: 'center',
    },
    welcomeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 15,
        marginTop: -5,
    }
});
