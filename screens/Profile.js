import React from 'react';
import { 
    Dimensions, 
    Image, 
    ImageBackground, 
    KeyboardAvoidingView, 
    ScrollView,
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
const{ width, height } = Dimensions.get('window');
export default function Profile() {
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={[styles.container,{ alignSelf: 'center', flex: 1 }]}>
        <ImageBackground source={require("../resources/cloud_bottom.jpg")} style={[styles.container,{minWidth: width, flex:1}]}>
            <Image source={require("../resources/user_login_icon.png")} style={styles.profileIcon}/>
            <Text style={styles.welcomeText}>Your Profile</Text>
        </ImageBackground>
        <ScrollView 
            style={{ 
                backgroundColor: 'white',
                flex:1,
                width: width,
            }} 
            contentContainerStyle={{
                flexGrow: 1,
                padding: 20,
            }}
        >
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='next'
                placeholder="First Name" 
                style={styles.input}
            />
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='next'
                placeholder="Last Name" 
                style={styles.input}
            />
            <View style={{flexDirection: 'row', alignContent: 'center'}}>
                <RadioButton
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
                />
                <Text style={{margin: 10, fontSize: 15}}>{'Male'}</Text>
            </View>
            <View style={{flexDirection: 'row', alignContent: 'center'}}>
                <RadioButton
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                />
                <Text style={{margin: 10, fontSize: 15}}>{'Female'}</Text>
            </View>
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='next'
                placeholder="Birthday" 
                style={styles.input}
            />
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='next'
                placeholder="Username" 
                style={styles.input}
            />
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='next'
                placeholder="Password" 
                style={styles.input}
                secureTextEntry={true}
            />
            <TouchableOpacity style={{
                alignContent: 'center',
                backgroundColor: 'lightblue',
                borderRadius: 10,
                justifyContent: 'center',
                marginTop: 15,
                padding: 20,
            }}>
                <Text style={{
                    alignSelf: 'center',
                    color: 'black',
                    fontSize: 18,
                }}>
                    {'Submit'}
                </Text>
            </TouchableOpacity>
        </ScrollView>
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
    welcomeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 15,
        marginTop: -5,
    }
});
