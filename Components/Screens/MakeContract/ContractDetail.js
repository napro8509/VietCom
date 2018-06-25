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
import {getContract} from '../../../Api/contractApi';
import {connect} from 'react-redux';
import {changeTimeSpanToLocalDate} from '../../../Global/functions';
const { height, width } = Dimensions.get('window');

class ContractDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            fee: "",
            date: '2-5-2018',
            contractData:{},
            paymentTermList:[]
        }
    }
    componentDidMount(){
        const {contractId}=this.props.navigation.state.params;
        getContract(contractId,this.props.token).then(res => this.setState({contractData:res.data,paymentTermList:res.data.paymentTerm}));
    }
    render() {
        const {contractData}=this.state;
        return (
            <View style={styles.container}>
                <Header />
                <ScrollView>
                    <View style={styles.body}>
                        <View style={styles.contextTitle}>
                            <Image
                                source={require('../../../src/icon/docs.png')}
                                resizeMode='contain'
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={{ fontSize: 16, color: '#005391' }}>Thông tin hợp đồng</Text>
                        </View>

                        <View style={{ paddingLeft: 30, paddingVertical: 10, paddingRight: 10 }}>
                            <Text style={[styles.fieldName,{marginTop:5}]}>Tên Khách Hàng: {contractData.customerName}</Text>
                            <Text style={[styles.fieldName,{marginTop:5}]}>Kí ngày {changeTimeSpanToLocalDate(contractData.dateSign)}</Text>
                            <Text style={[styles.fieldName,{marginTop:5}]}>Số Tài Khoản: {contractData.bankAccountNumber}</Text>
                            <Text style={[styles.fieldName,{marginTop:5}]}>Ngân hàng {contractData.bankName}</Text>
                        </View>

                        <View style={styles.contextTitle}>
                            <Image
                                source={require('../../../src/icon/docs.png')}
                                resizeMode='contain'
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={{ fontSize: 16, color: '#005391' }}>Lịch sử thanh toán</Text>
                        </View>

                        <FlatList
                            data={this.state.paymentTermList}
                            renderItem={({ item }) =>
                                <View style={{ paddingHorizontal: 10, paddingTop: 5, flexDirection: 'row' }}>
                                    <View

                                        style={styles.contextInput}
                                    >
                                        <Text style={{ color: 'black' }}>{changeTimeSpanToLocalDate(item.paymentDate)}</Text>
                                    </View>
                                    <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center' }}>
                                        <View

                                            style={styles.contextInputX}


                                        >
                                            <Text style={{ color: 'black' }}>  {item.amount}đ</Text>
                                        </View>
                                        <Image
                                            source={require('../../../src/icon/check.png')}
                                            resizeMode='contain'
                                            style={{ width: 40, height: 40 }}
                                        />
                                    </View>
                                </View>
                            }
                            keyExtractor={(item, index) => item.id}
                        />

                        <View style={[styles.totalRequest, { marginTop: 10 }]}>
                            <Text style={{ fontSize: 16, color: '#FFF' }}>Giá trị hợp đồng</Text>
                            <Text style={{ fontSize: 18, color: '#FFF', fontWeight: 'bold' }}>66.123.000đ</Text>
                        </View>

                        <View style={[styles.contextTitle]}>
                            <Image
                                source={require('../../../src/icon/docs.png')}
                                resizeMode='contain'
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={{ fontSize: 16, color: '#005391' }}>Nghiệm thu thanh toán phát sinh</Text>
                        </View>

                        <FlatList
                            data={[1, 2, 3, 4]}
                            renderItem={({ item }) =>
                                <View style={{ paddingHorizontal: 10, paddingTop: 5, flexDirection: 'row' }}>
                                    <View

                                        style={styles.contextInput}
                                    >
                                        <Text style={{ color: 'black' }}>  20-12-2018</Text>
                                    </View>
                                    <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center' }}>
                                        <View

                                            style={styles.contextInputX}


                                        >
                                            <Text style={{ color: 'black' }}>  10.000.000đ</Text>
                                        </View>
                                        <Image
                                            source={require('../../../src/icon/check.png')}
                                            resizeMode='contain'
                                            style={{ width: 40, height: 40 }}
                                        />
                                    </View>
                                </View>
                            }
                            keyExtractor={(item, index) => item.id}
                        />

                        <View style={[styles.totalRequest, { marginTop: 10, backgroundColor: '#005391' }]}>
                            <Text style={{ fontSize: 16, color: '#FFF' }}>Giá trị phát sinh</Text>
                            <Text style={{ fontSize: 18, color: '#FFF', fontWeight: 'bold' }}>66.123.000đ</Text>
                        </View>

                        <View style={[styles.totalRequest, { marginTop: 1, backgroundColor: '#005391' }]}>
                            <Text style={{ fontSize: 16, color: '#FFF' }}>Tổng nghiệm thu</Text>
                            <Text style={{ fontSize: 18, color: '#FFF', fontWeight: 'bold' }}>66.123.000đ</Text>
                        </View>

                        <View style={[styles.totalRequest, { marginTop: 1, backgroundColor: '#005391' }]}>
                            <Text style={{ fontSize: 16, color: '#FFF' }}>Đã thanh toán</Text>
                            <Text style={{ fontSize: 18, color: '#FFF', fontWeight: 'bold' }}>66.123.000đ</Text>
                        </View>

                        <View style={[styles.totalRequest, { marginTop: 10, backgroundColor: 'green', justifyContent: 'center' }]}>
                            <Text style={{ fontSize: 20, color: '#FFF', textAlign: 'center', fontWeight: 'bold' }}>Thanh toán kỳ tiếp:
                            <Text>  32.000.000đ</Text>
                            </Text>
                        </View>
                        
                        <View style={{justifyContent:'center',alignItems:'center',marginVertical:20}}>
                        <TouchableOpacity>
                        <View style={styles.rightButton}>
                            <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Nghiệm thu</Text>
                        </View>
                        </TouchableOpacity>
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
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contextInputX: {
        flex: 1,
        height: height / 14,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contextInput1: {
        height: height / 14,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 5
    },
    totalRequest: {
        padding: 10,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    leftButton: {
        marginVertical: 5,
        flex: 1,
        backgroundColor: 'red',
        paddingVertical: 15,
        marginRight: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightButton: {
        marginVertical: 5,
        width:width/2,
        backgroundColor: 'red',
        paddingVertical: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function mapStateToProps(state){
    return {token:state.todos.token};
}

export default connect(mapStateToProps)(ContractDetail);