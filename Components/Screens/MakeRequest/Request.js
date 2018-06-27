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
import { showList } from '../../../Api/contractApi';
import { showCostTypeList } from '../../../Api/costTypeApi';
import {createRequest} from '../../../Api/requestApi';
import { connect } from 'react-redux';
import { changeDateToTimeSpan } from '../../../Global/functions';
const { height, width } = Dimensions.get('window');

const TypeRequest = [{ typeId: 'TAM_UNG', typeName: 'Tạm Ứng' },
{ typeId: 'THANH_TOAN', typeName: 'Thanh Toán' },
{ typeId: 'KHAC', typeName: 'Khác' }];

class Request extends Component {
    static navigationOptions = {
        drawerLabel: 'Tạo phiếu đề nghị',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../../src/icon/new_request.png')}
                style={[{ height: 20, width: 20 }]}
            />
        ),
        headerVisible: false
    };
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            fee: "",
            date: '',
            projectList: [],
            projectId: '',
            projectTerm: [],
            projectTermID: '',
            costTypeList: [],
            costTypeId: '',
            description:'',
            paymentTerm:0,
            detail:[{description:'',amount:0}]
        }
    }
    componentDidMount() {
        showList(this.props.token).then(res => {
            if (res.status === "SUCCESS") {
                this.setState({ projectList: res.data.dataList })
            }
        }
        );
        showCostTypeList(this.props.token).then(res => {
            if (res.status === 'SUCCESS') {
                this.setState({ costTypeList: res.data.dataList })
            }
        })
    }
    render() {
        const { projectId, projectList, projectTerm,projectTermID, costTypeId, costTypeList,type, detail,description,paymentTerm } = this.state;
        return (
            <View style={styles.container}>
                <Header />
                <ScrollView>
                    <View style={styles.body}>
                        <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                            <Picker
                                selectedValue={type}
                                style={{ borderTopWidth: 3 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}>
                                <Picker.Item label="Chọn loại phiếu" value="" />
                                {TypeRequest.map((data) => {
                                    return (
                                        <Picker.Item key={data.typeId} label={data.typeName} value={data.typeId} />
                                    )
                                })}
                            </Picker>
                        </View>

                        <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                            <Picker
                                selectedValue={projectId}
                                onValueChange={(itemValue) => {
                                    this.setState({ projectId: itemValue });
                                    for (let i = 0; i < projectList.length; i++)
                                        if (projectList[i].id == itemValue)
                                            this.setState({ projectTerm: projectList[i].projectTerms })
                                }
                                }>
                                <Picker.Item label="Chọn dự án" value="" />
                                {projectList.map((data, i) => {
                                    return (
                                        <Picker.Item key={data.id} label={data.name} value={data.id} />
                                    )

                                })}

                            </Picker>
                        </View>

                        <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                            <Picker
                                selectedValue={projectTermID}
                                style={{ borderTopWidth: 3 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({ projectTermID: itemValue })}>
                                <Picker.Item label="Chọn đợt" value="" />
                                {projectTerm.map((data, i) => {
                                    return (
                                        <Picker.Item key={data.id} label={data.name} value={data.id} />
                                    )

                                })}
                            </Picker>
                        </View>

                        <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                            <Picker
                                selectedValue={costTypeId}
                                style={{ borderTopWidth: 3 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({ costTypeId: itemValue })}>
                                <Picker.Item label="Chọn loại chi phí" value="" />
                                {costTypeList.map((data, i) => {
                                    return (
                                        <Picker.Item key={data.id} label={data.name} value={data.id} />
                                    )

                                })}
                            </Picker>
                        </View>

                        <View style={{ padding: 10 }}>
                            <Text style={styles.fieldName}>Chọn ngày</Text>
                            <DatePicker
                                style={styles.fieldPicker}
                                date={this.state.date}
                                mode="date"
                                placeholder="Chọn Ngày"
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
                                onDateChange={(date) => { this.setState({ date: date,paymentTerm:changeDateToTimeSpan(date) }) }}
                            />
                        </View>
                        <View style={{ padding: 10 }}>

                            <View>
                                <Text style={styles.fieldName}>Mô Tả Phiếu</Text>



                                <TextInput
                                    underlineColorAndroid='transparent'
                                    multiline={true}
                                    style={styles.contextInput1}
                                    onChangeText={(text)=>{
                                        this.setState({description:text})
                                    }}
                                    >
                                    
                                </TextInput>


                            </View>

                        </View>

                        <View style={styles.contextTitle}>
                            <Image
                                source={require('../../../src/icon/docs.png')}
                                resizeMode='contain'
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={{ fontSize: 16, color: '#005391' }}>Nội dung và số tiền đề nghị</Text>
                        </View>
                        
                        <FlatList
                            data={detail}
                            renderItem={({itemValue,index})=>
                            <View style={{ padding: 10,borderStyle:'dotted',borderBottomWidth:10 }}>
                            <View>
                                <Text style={styles.fieldName}>Số tiền</Text>
                                <TextInput
                                    underlineColorAndroid='transparent'
                                    multiline={true}
                                    style={styles.contextInput1}
                                    onChangeText={(text)=>{
                                        let tempArr=detail;
                                        tempArr[index].amount=parseInt(text);
                                        this.setState({detail:tempArr});
                                    }}
                                    >
                                </TextInput>
                            </View>
                            <Text style={styles.fieldName}>Diễn giải</Text>
                            <TextInput
                                underlineColorAndroid='transparent'
                                multiline={true}
                                style={styles.contextInput1}
                                onChangeText={(text)=>{
                                    let tempArr=detail;
                                    tempArr[index].description=text;
                                    this.setState({detail:tempArr});
                                }}
                                >
                                {detail[index].description}
                            </TextInput>
                            <TouchableOpacity onPress={()=>{
                                let tempArr=detail;
                                tempArr.splice(index,1);
                                this.setState({detail:tempArr});
                            }}>
                            <Text style={styles.fieldName}>Xóa nội dung này</Text>
                                </TouchableOpacity>
                        </View>
                        }

                        />
                        <View style={styles.contextTitle1}>
                            <Image
                                source={require('../../../src/icon/add.png')}
                                resizeMode='contain'
                                style={{ width: 20, height: 20 }}
                            />
                            <TouchableOpacity onPress={()=>{
                                let tempArr=this.state.detail;
                                this.setState({detail:tempArr.concat({description:'',amount:0})});
                                console.log(detail);
                            }}>
                                <Text style={{ fontSize: 16, color: '#005391', textDecorationLine: 'underline' }}>Thêm mục mới</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.totalRequest}>
                            <Text style={{ fontSize: 16, color: '#FFF' }}>Tổng Cộng</Text>
                            <Text style={{ fontSize: 18, color: '#FFF', fontWeight: 'bold' }}>66.123.000đ</Text>
                        </View>

                        <View style={styles.buttonContainer}>

                            <View style={styles.leftButton}>
                                <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Nhập lại</Text>
                            </View>
                            <TouchableOpacity
                            style={styles.rightButton}
                            onPress={()=>{
                                createRequest({type,costTypeId,projectId,projectTermID,description,paymentTerm,detail},this.props.token)
                            }}>
                                <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Tạo phiếu</Text>
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
        width: width - 20,
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#DFDFDF',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 5,
    },
    contextInput: {
        height: height / 14,
        width: width - 20,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 5,
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
        borderRadius: 5,
        paddingLeft: 10
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
        flex: 1,
        backgroundColor: 'blue',
        paddingVertical: 15,
        marginLeft: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contextTitle1: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DFDFDF'
    },
});

function mapStateToProps(state) {
    return { token: state.todos.token };
}

export default connect(mapStateToProps)(Request);