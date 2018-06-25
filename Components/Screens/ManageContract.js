import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    ToastAndroid
} from 'react-native';
import HeaderWait from '../Header/HeaderWait';
import {showListContract} from '../../Api/contractApi';
import {connect} from  'react-redux';
const { width, height } = Dimensions.get('window');
class ManageContract extends Component {
    static navigationOptions = {
        drawerLabel: 'Quản lý hợp đồng',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../src/icon/bell_icon.png')}
                style={[{ height: 20, width: 20 }, { tintColor: tintColor }]}
            />
        ),
    };
    constructor(props) {
        super(props);
        this.state = {
            contractList: [],
            contractData:{}
        }
    }
    componentDidMount() {
        showListContract(this.props.token).then(res=> {
            if(res.status=='SUCCESS')
            {   
                if(res.data.dataList)   
                    this.setState({contractList:res.data.dataList,contractData:res.data})
            }
            else
            ToastAndroid.show('Error when load data', ToastAndroid.SHORT);
        });
    }
    render() {
        return (

            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#005391'
                    barStyle='light-content'
                />

                <HeaderWait />
                <View style={styles.body}>
                    <View style={styles.cartInfo}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>Số hợp đồng: </Text><Text style={{ color: '#005391', fontSize: 17 }}>{this.state.contractData.totalElement}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>Số tiền: </Text><Text style={{ color: '#005391', fontSize: 17 }}>{this.state.contractData.totalAmount} đ</Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', height: 40, paddingHorizontal: 10, backgroundColor: '#DFDFDF' }}>
                            <View style={{ flex: 2, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Số hợp đồng</Text>
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Số Tiền</Text>
                            </View>

                        </View>
                        <View>

                            {
                                this.state.contractList.map((data, index) => {
                                    return (
                                        <View key={data.id}>
                                            <View style={{ flexDirection: 'row', height: 40, borderBottomWidth: 1, borderBottomColor: '#DFDFDF', paddingHorizontal: 10 }}>
                                                <View style={{ flex: 2, justifyContent: 'center' }}>
                                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>{data.contractCode}</Text>
                                                </View>


                                                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>{data.totalAmount} dd</Text>
                                                    <TouchableOpacity onPress={() => {
                                                        this.props.navigation.navigate('ContractDetail',{contractId:data.id});
                                                    }}>
                                                        <Image
                                                            source={require('../../src/icon/forward.png')}
                                                            style={{ height: 20, width: 20 }}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>

                                        </View>
                                    );
                                })}
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        backgroundColor: '#FFF',

    },
    cartInfo: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#005391',
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
        backgroundColor: '#005391',
        paddingVertical: 15,
        marginLeft: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function mapStateToProps(state){
    return{token:state.todos.token};
}

export default connect(mapStateToProps)(ManageContract);