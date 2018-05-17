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
import HeaderBack from '../../Header/HeaderBack';

const {width,height} =Dimensions.get('window');
export default class MakeProject extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderBack title='Tạo Dự Án'/>
                <View style={{justifyContent:'space-between',flex:1}}>
                <View> 
                <View style={{ padding:10 }}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInputDuAn}
                        placeholder="Nhập tên..."
                        >

                    </TextInput>
                </View>

                                <View style={{ padding:10 }}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInputDuAn}
                        placeholder="Nhập mã dự án..."
                        >

                    </TextInput>
                </View>
                </View>
                <TouchableOpacity>
                <View style={styles.Button}>
                <Text style={{fontWeight:'bold',fontSize:16,color:'#FFF'}}>Xong</Text>
                </View>
                </TouchableOpacity>
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
    contextInputDuAn: {
        height: height / 14,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 5
    },
    Button: {
        marginBottom: 5,
        backgroundColor: '#005391',
        paddingVertical: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})