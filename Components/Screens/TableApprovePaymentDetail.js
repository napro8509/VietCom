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
    CheckBox,
    Button,
    TextInput,
    Keyboard
} from 'react-native';
import HeaderWait from '../Header/HeaderWait';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

const { width, height } = Dimensions.get('window');
export default class TableApprovePaymentDetail extends Component {
    static navigationOptions = {
        drawerLabel: 'Phiếu chờ duyệt',
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
            list: [{ id: '1', index: 0 }, { id: '2', index: 1 }, { id: '3', index: 2 }, { id: '4', index: 3 }],
            open: [{ id: '1', index: 0 }, { id: '2', index: 1 }, { id: '3', index: 2 },],
            e: true,
            check: [],
            status: [],
            checkAll:false
        }
    }
    componentDidMount() {
        var a = new Array(this.state.list.length);
        var b = new Array(this.state.list.length);
        var c = new Array(this.state.list.length);
        var d = new Array(this.state.list.length);
        for (var i = 0; i < a.length; ++i) { a[i] = false; b[i] = false; c[i] = 'checking';d[i]=true; }
        this.setState({check: b,status:c })
    }

    open() {
        this.popupDialog.show();
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
                            <Text>Số phiếu: </Text><Text style={{ color: '#005391', fontSize: 17 }}>23</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>Tổng tiền: </Text><Text style={{ color: '#005391', fontSize: 17 }}>15.000.000 đ</Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', height: 40, paddingHorizontal: 10, backgroundColor: '#DFDFDF' }}>
                            <View style={{ flex: 1.5, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Bảng duyệt chi</Text>
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Thời Gian</Text>
                            </View>

                            <View style={{ flex: 1.5, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Số Tiền</Text>
                                <CheckBox
                                                            value={this.state.checkAll}
                                                            onValueChange={(checkAll => {
                                                                this.setState({checkAll});
                                                                var fa = new Array(this.state.list.length);
                                                                var tr = new Array(this.state.list.length);
                                                                for (var i = 0; i < this.state.check.length; ++i) { fa[i] = false;tr[i]=true;}
                                                                if(checkAll==false)
                                                                {                                   
                                                                    this.setState({check:fa});
                                                                }
                                                                else
                                                                {                                                                    
                                                                    this.setState({check:tr});
                                                                }
                                                            })}
                                                        />
                            </View>

                        </View>
                        <View>

                            {
                                this.state.list.map((data, i) => {



                                    return (
                                        <View key={data.id}>
                                            <View style={{ borderBottomWidth: 1, borderBottomColor: '#DFDFDF',paddingBottom:10}}>
                                                <View style={{ flexDirection: 'row', height: 40,  paddingHorizontal: 10 }}>

                                                    <View style={{ flex: 1.5, justifyContent: 'center' }}>
                                                        <TouchableOpacity onPress={() => {

                                                        }}>
                                                            <Text style={{ color: 'black', fontWeight: 'bold' }}>DA-CT-032</Text>
                                                        </TouchableOpacity>
                                                    </View>

                                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                                        <Text style={{ color: 'black', fontWeight: 'bold' }}>15-03-2018</Text>
                                                    </View>

                                                    <View style={{ flex: 1.5, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <Text style={{ color: 'black', fontWeight: 'bold' }}>1000.000.000đ</Text>
                                                        <CheckBox
                                                            value={this.state.check[i]}
                                                            onValueChange={(checking => {
                                                                var y = this.state.check;
                                                                y[i] = checking;
                                                                this.setState({ check: y });

                                                                console.log(this.state.check);
                                                            })}
                                                        />
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                                                            <View style={{flex:3}}>
                                                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Lâm bình bảo</Text>
                                                            </View>
                                                            <View style={{flex:5,justifyContent:'space-between'}}>
                                                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Chi phí văn phòng</Text>
                                                            </View>
                                                </View>        
                                            </View>
                                        </View>
                                    );
                                })}

                            <View style={styles.buttonContainer}>

                                <View style={styles.leftButton}>
                                    <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Lưu</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity onPress={() => {
                                        var z = this.state.status;
                                        for (var i = 0; i < this.state.check.length; i++) {
                                            if (this.state.check[i] == true) {       
                                                z[i] = 'wait';
                                                this.setState({ status: z });
                                                console.log(this.state.status);
                                            }
                                        }
                                    }}>
                                        <View style={styles.rightButton}>
                                            <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Trình duyệt</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
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
        backgroundColor: 'gray',
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
    },
    contextInput1: {
        height: height / 14,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        margin: 10
    },
})