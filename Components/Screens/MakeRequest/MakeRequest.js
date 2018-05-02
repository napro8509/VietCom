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
const {height,weight}=Dimensions.get('window');

export default class MakeRequest extends Component{
    constructor(props){
        super(props);
        this.state={
            type:"",
            fee:"",
            date:'2-5-2018'
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Header/>
                <ScrollView>
                <View style={styles.body}>
                <View style={{padding:10}}>
                    <Text style={styles.fieldName}>Tiêu đề</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInput}>
                    
                    </TextInput>
                    </View>
                    <View style={{paddingHorizontal:10}}>
                    <Text style={styles.fieldName}>Loại phiếu</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={ {borderTopWidth:3} }
                        onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}>
                        <Picker.Item label="Chọn loại phiếu" value="" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    </View>

                    <View style={{paddingHorizontal:10,marginTop:10}}>
                    <Text style={styles.fieldName}>Loại chi phí</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={ {borderTopWidth:3} }
                        onValueChange={(itemValue, itemIndex) => this.setState({ fee: itemValue })}>
                        <Picker.Item label="Chọn loại chi phí" value="" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    </View>

                    <View style={{paddingHorizontal:10,marginTop:10}}>
                    <Text style={styles.fieldName}>Thời gian tạo phiếu</Text>

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

                    <Text style={styles.fieldName}>Thời hạn thanh toán</Text>

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
                    
                    <View style={styles.contextTitle}>
                        <Image
                            source={require('../../../src/icon/docs.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={{ fontSize: 16, color: '#005391' }}>Nội dung và số tiền đề nghị</Text>
                    </View>

                    <View style={{padding:10,backgroundColor:'#DFDFDF'}}>
                    <Text style={styles.fieldName}>Diễn giải</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInput1}>
                    
                    </TextInput>
                    </View>

                    <View style={{padding:10,backgroundColor:'#DFDFDF'}}>
                    <Text style={styles.fieldName}>Tổng tiền</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInput1}>
                    
                    </TextInput>
                    </View>

                    <View style={{padding:10,backgroundColor:'#DFDFDF'}}>
                    <Text style={styles.fieldName}>Thuế GTGT</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInput1}>
                    
                    </TextInput>
                    </View>

                    <View style={{padding:10,backgroundColor:'#DFDFDF'}}>
                    <Text style={styles.fieldName}>Chi phí</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInput1}>
                    
                    </TextInput>
                    </View>

                    <View style={{padding:10,backgroundColor:'#DFDFDF'}}>
                    <Text style={styles.fieldName}>Ghi chú</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInput1}>
                    
                    </TextInput>
                    </View>

                    <View style={styles.contextTitle1}>
                        <Image
                            source={require('../../../src/icon/add.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, color: '#005391', textDecorationLine: 'underline' }}>Thêm mục mới</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.totalRequest}>
                        <Text style={{ fontSize: 16, color: '#FFF' }}>Tổng Cộng</Text>
                        <Text style={{ fontSize: 18, color: '#FFF', fontWeight: 'bold' }}>66.123.000đ</Text>
                    </View>

                    <View style={styles.contextTitle}>
                        <Image
                            source={require('../../../src/icon/docs.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={{ fontSize: 16, color: '#005391' }}>Số tiền đã tạm ứng</Text>
                    </View>

                    <View style={{padding:10,backgroundColor:'#DFDFDF'}}>
                    <Text style={styles.fieldName}>Diễn giải</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInput1}>
                    
                    </TextInput>
                    </View>

                    <View style={{padding:10,backgroundColor:'#DFDFDF'}}>
                    <Text style={styles.fieldName}>Số tiền</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInput1}>
                    
                    </TextInput>
                    </View>

                    <View style={{padding:10,backgroundColor:'#DFDFDF'}}>
                    <Text style={styles.fieldName}>Loại chứng từ</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInput1}>
                    
                    </TextInput>
                    </View>

                    <View style={{padding:10,backgroundColor:'#DFDFDF'}}>
                    <Text style={styles.fieldName}>Số chứng từ</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInput1}>
                    
                    </TextInput>
                    </View>

                    <View style={{paddingHorizontal:10,backgroundColor:'#DFDFDF'}}>
                    <Text style={styles.fieldName}>Thời gian</Text>

                    <DatePicker
                        style={styles.fieldPicker1}
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
                </View>

                <View style={{padding:10,backgroundColor:'#DFDFDF'}}>
                    <Text style={styles.fieldName}>Ghi chú</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInput1}>
                    
                    </TextInput>
                    </View>

                    <View style={styles.contextTitle1}>
                        <Image
                            source={require('../../../src/icon/add.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                        <TouchableOpacity>
                        <Text style={{ fontSize: 16, color: '#005391',textDecorationLine:'underline' }}>Thêm mục mới</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.totalRequest}>
                        <Text style={{ fontSize: 16, color: '#FFF' }}>Tổng Cộng</Text>
                        <Text style={{ fontSize: 18, color: '#FFF', fontWeight: 'bold' }}>66.123.000đ</Text>
                    </View>

                    <View style={styles.contextTitle}>
                        <Image
                            source={require('../../../src/icon/docs.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={{ fontSize: 16, color: '#005391' }}>Tổng tiền thanh toán</Text>
                    </View>

                    <View style={styles.paymentReturnContainer1}>
                        <View style={styles.paymentReturn}>
                            <View>
                                <Text style={{ color: '#FFF' }}>Số tiền còn</Text>
                                <Text style={{ color: '#FFF' }}>được thanh toán</Text>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>695.000đ</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.paymentReturnContainer2}>
                        <View style={styles.paymentReturn}>
                            <View>
                                <Text style={{ color: '#FFF' }}>Số tiền phải</Text>
                                <Text style={{ color: '#FFF' }}>trả lại công ty</Text>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>0đ</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.contextTitle}>
                        <Image
                            source={require('../../../src/icon/docs.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={{ fontSize: 16, color: '#005391' }}>Lý do</Text>
                    </View>

                    <View style={{ padding: 10,backgroundColor:'#DFDFDF' }}>
                        <Text style={{ fontSize: 16, color: '#005391' }}>Nội dung</Text>
                        <TextInput
                            underlineColorAndroid='transparent'
                            multiline={true}
                            style={styles.contextInput2}>
                            
                    </TextInput>
                    </View>

                    <View style={styles.contextTitle}>
                        <Image
                            source={require('../../../src/icon/docs.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={{ fontSize: 16, color: '#005391' }}>Tải lên chứng từ</Text>
                    </View>

                    <View style={{ padding: 10, backgroundColor: '#DFDFDF',height:height/7,justifyContent:'center',alignItems:'center' }}>
                        <Text style={{ fontSize: 16, color: '#005391' }}>Chọn file cần tải lên</Text> 
                    </View>

                    <View style={styles.buttonContainer}>

                        <View style={styles.leftButton}>
                            <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Nhập lại</Text>
                        </View>

                        <View style={styles.rightButton}>
                            <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Gửi phiếu</Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
        )
        }
    }

    
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    body:{
        flex:1
    },
    contextInput:{
        height:height/7,
        borderWidth:1,
        borderColor:'#DFDFDF',
        borderRadius:5
    },
    contextInput1:{
        height:height/14,
        borderWidth:1,
        borderColor:'black',
        borderRadius:5
    },
    contextInput2:{
        height:height/7,
        borderWidth:1,
        borderColor:'black',
        borderRadius:5
    },
    fieldName:{
        fontSize: 16, 
        color: '#005391' 
    },
    fieldPicker:{
        borderWidth:3,
        borderColor:'#DFDFDF',
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal:15,
        marginVertical:5,
        marginHorizontal:0,
        width:300
    },
    fieldPicker1:{
        borderWidth:3,
        borderColor:'black',
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal:15,
        marginVertical:5,
        marginHorizontal:0,
        width:300
    },
    contextTitle: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    contextTitle1: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#DFDFDF'
    },
    totalRequest:{
        padding: 10,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    paymentReturnContainer1:{
        padding:10,
        backgroundColor:'#005391',
        borderBottomWidth:1,
        borderBottomColor:'#DFDFDF'
      },
      paymentReturnContainer2:{
        padding:10,
        backgroundColor:'#005391',
      },
      paymentReturn:{
        flexDirection:'row',
        justifyContent:'space-between',
      },
      buttonContainer:{
        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:15
      },
      leftButton:{
        marginVertical:5,
        flex:1, 
        backgroundColor:'gray',
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
