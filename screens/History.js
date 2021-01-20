import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { 
    Dimensions, 
    FlatList,
    Image, 
    ImageBackground, 
    KeyboardAvoidingView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const{ width, height } = Dimensions.get('window');

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        points: '10 points',
        date: '12-12-2020',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        points: '20 points',
        date: '11-11-2020',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        points: '30 points',
        date: '10-10-2020',
    },
    {
        id: '12eevfveg',
        points: '40 points',
        date: '09-09-2020',
    },
    {
        id: '96-145571e29d72',
        points: '50 points',
        date: '08-08-2020',
    },
];
  
const Item = ({ date, points }) => (
    <View style={styles.item}>
        <Icon name="star-four-points-outline" size={30}/>
        <Text style={styles.title}>{points}</Text>
        <Text style={styles.title}>{date}</Text>
    </View>
);

const renderItem = ({ item }) => (
    <Item points={item.points} date={item.date} />
);
export default function History() {
    return (
    <View style={[styles.container,{alignSelf: 'center',}]}>
        <ImageBackground source={require("../resources/cloud_bottom.jpg")} style={[styles.container,{minWidth: width, flex:1}]}>
            <Image source={require("../resources/user_login_icon.png")} style={styles.profileIcon}/>
            <Text style={styles.welcomeText}>Here are your earnings!</Text>
        </ImageBackground>
        <View style={[styles.iconView]}>
            <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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
    },
    item: {
        alignContent: 'center',
        backgroundColor: 'lightblue',
        color: 'black',
        flexDirection:'row',
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
    },
    title: {
        fontSize: 18,
        margin:5,
    },
});
