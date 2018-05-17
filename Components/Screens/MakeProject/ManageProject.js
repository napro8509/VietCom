import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    StatusBar,
    Image,
    Dimensions,
    TextInput,
    CheckBox,
    TouchableOpacity,
    Picker,
    ScrollView
} from 'react-native';
import HeaderManageProject from '../../Header/HeaderManageProject';

const {width,height} =Dimensions.get('window');
export default class MakeProject extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderManageProject />
                <View style={{flex:1,paddingHorizontal:10}}>
                <FlatList
                    data={[1,2,3]}
                    renderItem={({ item }) =>
                    <View style={{paddingVertical:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#DFDFDF'}}>
                        <Text style={{fontSize:16,color:'#005391',fontWeight:'bold'}}>Du an 1</Text>
                        <Image
                            style={styles.icon}
                            source={require('../../../src/icon/text_edit.png')}
                            resizeMode='contain'
                        />
                    </View>
                    }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-between'
    },
    icon:{
        width:25,
        height:25
    }
})