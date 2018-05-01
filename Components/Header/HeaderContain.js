import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput
} from 'react-native';
import FilterComponent from './FilterComponent';
import HeaderManager from './HeaderManager';
const {height,width}=Dimensions.get('window');
const headerBar=height/10;

export default class HeaderContain extends Component{
    render(){
        return(
            <View style={styles.container}>  
                <HeaderManager/>
                <FilterComponent/>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        height:headerBar
    }
})