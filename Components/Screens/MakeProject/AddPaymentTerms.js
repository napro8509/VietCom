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

const { width, height } = Dimensions.get('window');
export default class MakeCost extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderBack title='Thêm Đợt Thanh Toán' />
                <View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ marginBottom: 10, color: 'black', fontSize: 16, fontWeight: 'bold' }}>Thêm Các Đợt Thanh Toán</Text>
                        <View style={{marginBottom:10}}>
                            <TextInput
                                underlineColorAndroid='transparent'
                                multiline={true}
                                style={styles.contextInputDuAn}
                                placeholder="Nhập tên dợt"
                            >

                            </TextInput>
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                }}>
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingVertical: 1 }}>
                                    <View style={{ paddingHorizontal: 10, borderLeftWidth: 1, borderLeftColor: '#DFDFDF' }}>
                                        <Image
                                            source={require('../../../src/icon/cancel.png')}
                                            resizeMode='contain'
                                            style={{ width: 20, height: 20 }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{marginBottom:10}}>
                            <TextInput
                                underlineColorAndroid='transparent'
                                multiline={true}
                                style={styles.contextInputDuAn}
                                placeholder="Nhập tên dợt"
                            >

                            </TextInput>
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                }}>
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingVertical: 1 }}>
                                    <View style={{ paddingHorizontal: 10, borderLeftWidth: 1, borderLeftColor: '#DFDFDF' }}>
                                        <Image
                                            source={require('../../../src/icon/cancel.png')}
                                            resizeMode='contain'
                                            style={{ width: 20, height: 20 }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{marginBottom:10}}>
                            <TextInput
                                underlineColorAndroid='transparent'
                                multiline={true}
                                style={styles.contextInputDuAn}
                                placeholder="Nhập tên dợt"
                            >

                            </TextInput>
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                }}>
                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingVertical: 1 }}>
                                    <View style={{ paddingHorizontal: 10, borderLeftWidth: 1, borderLeftColor: '#DFDFDF' }}>
                                        <Image
                                            source={require('../../../src/icon/cancel.png')}
                                            resizeMode='contain'
                                            style={{ width: 20, height: 20 }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <View style={{paddingVertical:5,borderBottomWidth:1,borderBottomColor:'#005391'}}>
                        <Text style={{fontSize:16,color:'#005391',fontWeight:'bold'}}>+ Thêm các khoản mục</Text>
                        </View>
                        </View>
                    </View>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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