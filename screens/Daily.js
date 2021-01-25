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
export default class Daily extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        modalVisible: false
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
     }

    render(){
    // const [checked, setChecked] = React.useState('first');
    return (
        <View style={[styles.container,{ alignSelf: 'center', flex: 1 }]}>
            <ImageBackground source={require("../resources/cloud_bottom.jpg")} style={[styles.container,{minWidth: width, flex:1}]}>
                <Image source={require("../resources/user_login_icon.png")} style={styles.profileIcon}/>
                <Text style={styles.welcomeText}>Daily Rewards</Text>
            </ImageBackground>
            <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
            <Modal animationType = {"slide"} transparent = {false}
                visible = {this.state.modalVisible}
                onRequestClose = {() => { console.log("Modal has been closed.") } }>
                   
                    <View style = {styles.modal}>
                        <Text style = {styles.text}>Modal is open!</Text>
                      
                        <TouchableOpacity onPress = {() => {
                          this.toggleModal(!this.state.modalVisible)}}>
                         
                            <Text style = {styles.text}>Close Modal</Text>
                        </TouchableOpacity>
                    </View>
            </Modal>
        </View>
      );
  };
  
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
    welcomeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 15,
        marginTop: -5,
    }
});


            