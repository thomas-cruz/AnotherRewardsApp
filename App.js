import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import History from './screens/History';
import Scratch from './screens/Scratch';
import Spinner from './screens/Spinner';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconColor = 'lightblue';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'History') {
            iconName = 'list-alt';
          }

          if (focused){
            iconColor = 'blue';
          }

          return <Icon name={iconName} size={30} color={iconColor} />;
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
      />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Scratch" component={Scratch}/>
        <Stack.Screen name="Spinner" component={Spinner}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
