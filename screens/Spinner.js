import React, { Component } from "react";
import {Button, StyleSheet, Text, View, Image, Alert } from "react-native";
import WheelOfFortune from 'react-native-wheel-of-fortune'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Spinner({ navigation }) {

    const participants = [
        '%10',
        '%20',
        '%30',
        '%40',
        '%50',
        '%60',
        '%70',
        '%90',
        'FREE',
    ];
    const wheelOptions = {
        rewards: participants,
        knobSize: 50,
        borderWidth: 5,
        borderColor: '#000',
        innerRadius: 50,
        duration: 4000,
        backgroundColor: 'transparent',
        textAngle: 'horizontal',
        knobSource: require('./assets/images/knoob.png'),
        getWinner: (value, index) => {
          this.setState({winnerValue: value, winnerIndex: index});
        },
        onRef: ref => (this.child = ref),
    };

    return (
      <View style={styles.container}>
        <Text>{this.state.status}</Text>
        <WheelOfFortune
            wheelOptions={wheelOptions}
        />  
        <Button title="Press me" onPress={ () => { this.child._onPress() } } />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});