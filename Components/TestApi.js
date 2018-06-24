import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';
import {getContract, deleteContract, showList, showListContract} from '../Api/contractApi';

const contractId='5b2e5bdd56253d6ffde32498';
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXIiOiIiLCJkZXBhcnRtZW50IjoiIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE1MzUzNzEyMDQsImZ1bGxOYW1lIjoiQWRtaW4iLCJpZCI6IjViMDAxMTE1MTI2NmI0MmQ4OGEyNTZlYyIsInBob25lIjoiMDk5OTk5OTk5OSIsInJvbGUiOiJBRE1JTiIsInR5cGUiOiJqd3RUb2tlbiJ9.BKXgbIlA2U1W4VdybafAR_TnEKvjMnoe_0Yq261GnII';


export default class TestApi extends Component {
    componentDidMount(){
      showListContract(token).then(res=> console.log(res))
    }
  render() {
    return (
      <View style={styles.container}>

      </View>
    )
}
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green'
  }
});

