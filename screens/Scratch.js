import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import ScratchCard from "react-native-scratch-card";
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Scratch extends Component {
  state = { color: "red", status: 0 };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.status}</Text>
        <ScratchCard
          brushSize={125}
          getPercent={percent => {
            this.setState({ status: percent });
          }}
          onEnd={() => {
            Alert.alert("You have earned "+Math.floor(Math.random() * 100)+" points!");
          }}
          maxPercent={50}
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 400,
            height: 400
          }}
          color={"gray"}
        >
            <Icon name='money' size={200}/>
        </ScratchCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});