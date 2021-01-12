import LinearGradient from 'react-native-linear-gradient';
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
import Icon from 'react-native-vector-icons/Ionicons';
const{ width, height } = Dimensions.get('window');
export default function Home({ navigation }) {
    React.useEffect(
        () =>
          navigation.addListener('beforeRemove', (e) => {
    
            // Prevent default behavior of leaving the screen
            e.preventDefault();
          }),
        [navigation]
      );
    
    return (
        <View style={[styles.container,{alignSelf: 'center',}]}>
            <ImageBackground source={require("../resources/cloud_bottom.jpg")} style={[styles.container,{minWidth: width, flex:1}]}>
                <Image source={require("../resources/user_login_icon.png")} style={styles.profileIcon}/>
                <Text style={styles.welcomeText}>Welcome Home!</Text>
            </ImageBackground>
            <View style={[styles.iconView]}>
                <LinearGradient 
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.homeButton}
                >
                    <TouchableOpacity onPress={() => navigation.navigate('Spinner')}>
                        <Icon name='sync' color='white' size={50} style={styles.icon}/>
                        <Text style={{alignSelf: 'center', color:'white', marginTop: -5, marginBottom: 20}}>Spin</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient 
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.homeButton}
                >
                    <TouchableOpacity onPress={() => navigation.navigate('Scratch')}>
                        <Icon name='color-wand-outline' color='white' size={50} style={styles.icon}/>
                        <Text style={{alignSelf: 'center', color:'white', marginTop: -5, marginBottom: 20}}>Scratch</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']} 
                    style={styles.homeButton}
                >
                    <TouchableOpacity onPress={() => navigation.navigate('Spinner')}>
                        <Icon name='sunny-outline' color='white' size={50} style={styles.icon}/>
                        <Text style={{alignSelf: 'center', color:'white', marginTop: -5, marginBottom: 20}}>Daily</Text>
                    </TouchableOpacity>
                </LinearGradient>
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
        padding: 0,
    },
    iconView: {
        backgroundColor: 'white', 
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center', 
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
        width: 240,
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
        marginTop: 15,
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
