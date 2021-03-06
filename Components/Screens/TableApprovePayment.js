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
export default class TableApprovePayment extends Component {
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
            down: [],
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
        for (var i = 0; i < a.length; ++i) { a[i] = false; b[i] = false; c[i] = 'checking' }
        this.setState({ down: a, check: b,status:c })
    }
    openDropDown(id) {
        var x = this.state.down;
        x[id] = true;
        this.setState({ down: x });
    }
    open() {
        this.popupDialog.show();
    }
    render() {
        var checked=(
            <Image
            source={require('../../src/icon/checked.png')}
            style={{ height:30, width: 30,}}
            resizeMode='contain'
            />
        );
        var uncheck=(
            <Image
            source={require('../../src/icon/uncheck.png')}
            style={{ height: 30, width: 30,}}
            resizeMode='contain'
            />
        );

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
                        <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
                            <Text>Tổng tiền: </Text><Text style={{ color: '#005391', fontSize: 17 }}>15.000.000 đ</Text>
                            <TouchableOpacity onPress={()=>{
                                if(this.state.checkAll==false){
                                        
                                    var flag_true=new Array(this.state.check.length);
                                    for (var i = 0; i < this.state.check.length; ++i) { flag_true[i] = true;}
                                    this.setState({down:flag_true})
                                    this.setState({checkAll:true});
                                }
                                else{
                                    
                                    var flag_false=new Array(this.state.check.length);
                                    for (var i = 0; i < this.state.check.length; ++i) { flag_false[i] = false;}
                                    this.setState({down:flag_false});
                                    this.setState({checkAll:false})
                                }
                            }}>
                            {this.state.checkAll?checked:uncheck} 
                            </TouchableOpacity>                       
                        </View>
                    </View>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', height: 40, paddingHorizontal: 10, backgroundColor: '#DFDFDF' }}>
                            <View style={{ flex: 1.6, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Bảng duyệt chi</Text>
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Thời Gian</Text>
                            </View>

                            <View style={{ flex: 1.4, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Số Tiền</Text>
                            </View>

                        </View>
                        <View>

                            {
                                this.state.list.map((data, i) => {

                                    var Rank ;
                                    console.log('vao switch');

                                    if(this.state.status[i]=='wait')
                                    {
                                        Rank= (
                                            <Image
                                                source={require('../../src/icon/refresh.png')}
                                                style={{ height: 20, width: 20,marginLeft:5 }}
                                                resizeMode='contain'
                                            />
                                        );
                                    }
                                    else if(this.state.status[i]=='checking') {
                                        Rank= (
                                            this.state.down[i]?checked:uncheck
                                        );
                                    }
                                    else {
                                        Rank= (
                                            <Image
                                            source={require('../../src/icon/check.png')}
                                            style={{ height: 20, width: 20,marginLeft:5 }}
                                            resizeMode='contain'
                                        />
                                        );
                                    }


                                    return (
                                        <View key={data.id}>
                                            <View style={{ flexDirection: 'row', height: 40, borderBottomWidth: 1, borderBottomColor: '#DFDFDF', paddingHorizontal: 10 }}>

                                                <View style={{ flex: 1.6, justifyContent: 'center' }}>
                                                    <TouchableOpacity onPress={() => {
                                                        var x = this.state.down;
                                                        if (this.state.down[i] == true)
                                                            x[i] = false;
                                                        else x[i] = true;
                                                        this.setState({ data: x });
                                                        console.log(this.state.down);
                                                    }}>
                                                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Trả đợt 1 tháng 3</Text>
                                                    </TouchableOpacity>
                                                </View>

                                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>15-03-2018</Text>
                                                </View>

                                                <View style={{ flex: 1.4, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>1000.000.000đ</Text>
                                                    <TouchableOpacity onPress={()=>{
                                                            var x = this.state.down;
                                                            if (this.state.down[i] == true)
                                                                x[i] = false;
                                                            else x[i] = true;
                                                            this.setState({ down: x });
                                                            console.log(this.state.down); 
                                                    }}>
                                                    {Rank}
                                                    </TouchableOpacity>
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
                                        console.log('vao trinh duyet')
                                        var z = this.state.status;
                                        for (var i = 0; i < this.state.down.length; i++) {
                                            if (this.state.down[i] == true) {       
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