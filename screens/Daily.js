import React, { Component } from 'react';
import { 
    Dimensions, 
    Image, 
    ImageBackground, 
    KeyboardAvoidingView, 
    Modal,
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ConfettiCannon from 'react-native-confetti-cannon';
const{ width, height } = Dimensions.get('window');

export default function Daily ({navigation, route}) {
    const reward = () => {
        return route.params.visited ? "You have already redeemed today's points" : "You have earned "+Math.floor(Math.random() * 100)+" points" ; 
    }

    return (
        <View style={[styles.container,{ alignSelf: 'center', flex: 1 }]}>
            <ImageBackground source={require("../resources/cloud_bottom.jpg")} style={[styles.container,{minWidth: width, flex:1}]}>
                <Image source={require("../resources/user_login_icon.png")} style={styles.profileIcon}/>
                <Text style={styles.welcomeText}>Daily Rewards</Text>
            </ImageBackground>
            <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
            <View
            style={{ 
                backgroundColor: 'white',
                flex:1,
                width: width,
                flexDirection: 'column',
            }} 
            >
                <Text style={styles.rewardText}>{reward()}</Text>
                <Text style={[styles.rewardText, styles.bottomText]}>Visit daily to earn rewards!</Text>
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
        alignSelf: 'center',
        margin: 0,
        height: 50,
        width: 50,
        padding: 0,
        resizeMode: 'contain',
    },
    iconView: {
        backgroundColor: 'white', 
        flex: 1,
        flexDirection:'row',
        justifyContent: 'flex-start', 
        marginTop: -30, 
        width: width,  
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
    },
    homeButton:{
        backgroundColor: '#003aae',
        borderRadius: 5,
        margin: 5,
        padding: 10,
        textAlign: 'center',
        width: 80,
        height: 80,
    },
    profileIcon: {
        justifyContent: 'flex-start',
        marginTop: 40,
        maxWidth: '30%',
        maxHeight:'30%',
        padding: 0,
        resizeMode: 'contain',
    },
    rewardText: {
        fontWeight: 'bold',
        fontSize: 32,
        margin: 15,
    },
    bottomText:{
        alignSelf: 'flex-end'
    },
    welcomeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 15,
        marginTop: -5,
    }
});
