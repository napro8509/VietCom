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
import Header from '../../Header/Header';
import DatePicker from 'react-native-datepicker';
const { height, weight } = Dimensions.get('window');

export default class MakeRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            fee: "",
            date: '2-5-2018'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <ScrollView>
                <View style={styles.body}>
                    <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ borderTopWidth: 3 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}>
                            <Picker.Item label="Chọn loại phiếu" value="" />
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>

                    <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ borderTopWidth: 3 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}>
                            <Picker.Item label="Chọn dự án" value="" />
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>

                    <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ borderTopWidth: 3 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}>
                            <Picker.Item label="Chọn hợp đồng" value="" />
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>

                    <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ borderTopWidth: 3 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}>
                            <Picker.Item label="Chọn loại chi phí" value="" />
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>

                    <View style={styles.contextTitle}>
                        <Image
                            source={require('../../../src/icon/docs.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={{ fontSize: 16, color: '#005391' }}>Nội dung và số tiền đề nghị</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingTop: 10 }}>
                        <View>
                            <Text style={styles.fieldName}>Chọn ngày</Text>
                            <DatePicker
                                style={styles.fieldPicker}
                                date={this.state.date}
                                mode="date"
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />
                        </View>
                        <View>
                            <Text style={styles.fieldName}>Số tiền</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                                <View>

                                    <TextInput
                                        underlineColorAndroid='transparent'
                                        multiline={true}
                                        style={styles.contextInput}>

                                    </TextInput>
                                </View>

                                <Image
                                    source={require('../../../src/icon/add.png')}
                                    resizeMode='contain'
                                    style={{ width: 40, height: 40 }}
                                />
                            </View>

                        </View>

                    </View>
                    <View style={{ padding: 10, }}>
                        <Text style={styles.fieldName}>Diễn giải</Text>
                        <TextInput
                            underlineColorAndroid='transparent'
                            multiline={true}
                            style={styles.contextInput1}>

                        </TextInput>
                    </View>

                    <View style={styles.totalRequest}>
                        <Text style={{ fontSize: 16, color: '#FFF' }}>Tổng Cộng</Text>
                        <Text style={{ fontSize: 18, color: '#FFF', fontWeight: 'bold' }}>66.123.000đ</Text>
                    </View>

                    <View style={styles.buttonContainer}>

                        <View style={styles.leftButton}>
                            <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Nhập lại</Text>
                        </View>

                        <View style={styles.rightButton}>
                            <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Tạo phiếu</Text>
                        </View>

                    </View>
                </View>
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1
    },
    fieldName: {
        fontSize: 16,
        color: '#005391'
    },
    contextTitle: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DFDFDF'
    },
    fieldPicker: {
        borderWidth: 3,
        borderColor: '#DFDFDF',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 5,
    },
    contextInput: {
        height: height / 14,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 5,
        width: 150,
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 5,
        marginRight: 5
    },
    contextInput1: {
        height: height / 14,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 5
    },
    totalRequest:{
        padding: 10,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonContainer:{
        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:15
      },
      leftButton:{
        marginVertical:5,
        flex:1, 
        backgroundColor:'red',
        paddingVertical:15,
        marginRight:5,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
      },
      rightButton:{
        marginVertical:5,
        flex:1,
        backgroundColor:'blue',
        paddingVertical:15,
        marginLeft:5,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
      }
});