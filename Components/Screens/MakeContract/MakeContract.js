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
const { height, width } = Dimensions.get('window');
import { connect } from 'react-redux';
import { showList,createContract } from '../../../Api/contractApi';
import { changeDateToTimeSpan } from '../../../Global/functions';


class MakeContract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectId: "",
            contractCode: "Du an tien ty",
            name: "nguyen trung nghia",
            dateSign: 0,
            customerName: "rr",
            bankAccountNumber: "123456789",
            bankName: "acb",
            email: "legiona@gmail.com",
            paymentTerm: [{ name: 'hh', amount: 0, paymentDate: 0 }],
            projectList: [],
            date:''
        }
    }
    componentDidMount() {
        showList(this.props.token).then(res => {
            if (res.status === "SUCCESS") {
                this.setState({ projectList: res.data.dataList })
            }
            console.log(changeDateToTimeSpan('26-2-2018'))
        }
        );
    }
    addPaymentTerm() {
        console.log('add payment term')
        let term = this.state.paymentTerm;
        console.log(term);
        term = term.concat({ name: '', amount: 0, paymentDate: 0 });
        this.setState({ paymentTerm: term });
        console.log(term);
    }
    render() {
        const {projectId,contractCode,name,dateSign,customerName,bankAccountNumber,bankName,email,paymentTerm,projectList,date}=this.state;
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
                        <View style={{ padding: 10 }}>
                            <Picker
                                itemStyle={{ borderBottomWidth: 1, textAlign: 'center' }}
                                selectedValue={projectId}
                                style={{ alignItems: 'center', justifyContent: 'center' }}
                                onValueChange={(itemValue, itemIndex) => this.setState({ projectId: itemValue })}>
                                <Picker.Item label="Chọn dự án" value="" />
                                {projectList.map((data, i) => {
                                    return (
                                        <Picker.Item key={data.id} label={data.name} value={data.id} />
                                    )

                                })}

                            </Picker>
                            <TextInput
                                underlineColorAndroid='transparent'
                                multiline={true}
                                placeholder='Số hợp đồng'
                                style={styles.contextInput}
                                onChangeText={(text) => this.setState({ contractCode: text })}
                            >

                            </TextInput>

                            <TextInput
                                underlineColorAndroid='transparent'
                                multiline={true}
                                placeholder='Tên Hợp Đồng'
                                style={styles.contextInput}
                                onChangeText={(text) => this.setState({ name: text })}
                            >

                            </TextInput>

                            <DatePicker
                                style={{
                                    height: height / 14,
                                    width: width - 20, justifyContent: 'center',
                                    borderWidth: 1,
                                    borderColor: '#DFDFDF',
                                    borderRadius: 5,
                                }}
                                date={date}
                                mode="date"
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon={false}
                                customStyles={{
                                    dateInput: {
                                        height: height / 14,
                                        width: width - 20,
                                        borderWidth: 0,
                                        marginVertical: 5,
                                    },
                                    placeholderText: {
                                        color: 'red'
                                    }


                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => {
                                    let timeSpan = changeDateToTimeSpan(date)
                                    this.setState({ dateSign: timeSpan })
                                    this.setState({date})
                                }}
                            />

                            <TextInput
                                underlineColorAndroid='transparent'
                                multiline={true}
                                placeholder='Khách hàng'
                                style={styles.contextInput}
                                onChangeText={(text) => {
                                    this.setState({ customerName: text })
                                }}
                            >

                            </TextInput>

                            <TextInput
                                underlineColorAndroid='transparent'
                                multiline={true}
                                placeholder='Số tài khoản'
                                style={styles.contextInput}
                                onChangeText={(text) => { this.setState({ bankAccountNumber: text }) }}
                            >

                            </TextInput>

                            <TextInput
                                underlineColorAndroid='transparent'
                                multiline={true}
                                placeholder='Thông tin ngân hàng'
                                style={styles.contextInput}
                                onChangeText={(text) => { this.setState({ bankName: text }) }}
                            >

                            </TextInput>

                            <TextInput
                                underlineColorAndroid='transparent'
                                multiline={true}
                                placeholder='Email'
                                style={styles.contextInput}
                                onChangeText={(text) => { this.setState({ email: text }) }}
                            >

                            </TextInput>
                        </View>

                        <View style={styles.contextTitle}>
                            <Image
                                source={require('../../../src/icon/docs.png')}
                                resizeMode='contain'
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={{ fontSize: 16, color: '#005391' }}>Kỳ thanh toán và phát sinh chi phí</Text>
                        </View>

                        <FlatList
                            data={paymentTerm}
                            renderItem={({ item, index }) =>
                                <View style={{ marginVertical: 10, backgroundColor: 'yellow' }} >
                                    <View style={{ padding: 10 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                                            <View>
                                                <Text style={{ fontSize: 14, color: 'black' }}>Chọn ngày</Text>
                                                <DatePicker
                                                    style={{
                                                        height: height / 14,
                                                        width: width - 20, justifyContent: 'center',
                                                        borderWidth: 1,
                                                        borderColor: '#DFDFDF',
                                                        borderRadius: 5,
                                                    }}
                                                    date={date}
                                                    mode="date"
                                                    placeholder="select date"
                                                    format="DD-MM-YYYY"
                                                    confirmBtnText="Confirm"
                                                    cancelBtnText="Cancel"
                                                    showIcon={false}
                                                    customStyles={{
                                                        dateInput: {
                                                            height: height / 14,
                                                            width: width - 20,
                                                            borderWidth: 0,
                                                            marginVertical: 5,
                                                        },
                                                        placeholderText: {
                                                            color: 'red'
                                                        }
                                                        // ... You can check the source to find the other keys.
                                                    }}
                                                    onDateChange={(date) => {
                                                        let temp = paymentTerm;
                                                        temp[index].paymentDate = changeDateToTimeSpan(date);
                                                        console.log(temp);
                                                        this.setState({ paymentTerm: temp })
                                                    }}
                                                />

                                            </View>

                                        </View>
                                        <Text style={{ fontSize: 14, color: 'black' }}>Nhập số tiền</Text>
                                        <TextInput
                                            underlineColorAndroid='transparent'
                                            multiline={true}
                                            placeholder='Số tiền'
                                            style={styles.contextInput}
                                            onChangeText={(text) => {
                                                let temp = paymentTerm;
                                                temp[index].amount = parseInt(text);
                                                console.log(temp);
                                                this.setState({ paymentTerms: temp })
                                            }}
                                        >

                                        </TextInput>
                                    </View>
                                    <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                                        <Text style={styles.fieldName}>Diễn giải</Text>
                                        <TextInput
                                            underlineColorAndroid='transparent'
                                            multiline={true}
                                            style={styles.contextInputDienGiai}
                                            onChangeText={(text) => {
                                                let temp = paymentTerm;
                                                temp[index].name = text;
                                                console.log(temp);
                                                this.setState({ paymentTerm: temp })
                                            }}
                                        >

                                        </TextInput>
                                    </View>
                                    <TouchableOpacity onPress={() => {
                                        let tempArr = paymentTerm;
                                        tempArr.splice(index, 1);
                                        this.setState({ paymentTerm: tempArr })
                                    }}>
                                        <Text>Xóa đợt thanh toán</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                            keyExtractor={(item, index) => item.id}
                        />

                    </View>



                    <TouchableOpacity onPress={() => {
                        this.addPaymentTerm();

                    }}>
                        <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>

                            <Text style={{ fontSize: 16, color: '#005391' }}>+ Thêm đợt thanh toán</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.totalRequest}>
                        <Text style={{ fontSize: 16, color: '#FFF' }}>Tổng Tiền Thanh Toán</Text>
                        <Text style={{ fontSize: 18, color: '#FFF', fontWeight: 'bold' }}>66.123.000đ</Text>
                    </View>

                    <View style={styles.buttonContainer}>

                        <View style={styles.leftButton}>
                            <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Tạo mới</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            console.log(this.state);
                            createContract({projectId,contractCode,name,dateSign,customerName,bankAccountNumber,bankName,email,paymentTerm},this.props.token);
                        }}>
                            <View style={styles.rightButton}>
                                <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Lưu lại</Text>
                            </View>
                        </TouchableOpacity>

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
    contextInput: {
        height: height / 14,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 5,
        textAlign: 'center',
        marginVertical: 5
    },
    contextInput1: {
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
    contextInput2: {
        height: height / 7,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
    contextInputDienGiai: {
        height: height / 14,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 5
    },
    fieldName: {
        fontSize: 16,
        color: 'black'
    },
    fieldPicker: {
        borderWidth: 3,
        borderColor: '#DFDFDF',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 5,
    },
    fieldPicker1: {
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 5,
        marginHorizontal: 0,
        width: 300
    },
    contextTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DFDFDF',
        padding: 10
    },
    contextTitle1: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DFDFDF'
    },
    totalRequest: {
        padding: 10,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    paymentReturnContainer1: {
        padding: 10,
        backgroundColor: '#005391',
        borderBottomWidth: 1,
        borderBottomColor: '#DFDFDF'
    },
    paymentReturnContainer2: {
        padding: 10,
        backgroundColor: '#005391',
    },
    paymentReturn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        flex: 1,
        backgroundColor: 'blue',
        paddingVertical: 15,
        marginLeft: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
function mapStateToProps(state) {
    return { token: state.todos.token };
}

export default connect(mapStateToProps)(MakeContract);