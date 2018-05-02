import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Header from '../../Header/Header';
import Body from '../../Body/Body';
export default class DashBoard extends Component {
    static navigationOptions = {
        drawerLabel: 'DashBoard',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../../src/icon/docs.png')}
            style={[{width:20,height:20}, {tintColor: tintColor}]}
          />
        ),
      };
    
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Body/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})