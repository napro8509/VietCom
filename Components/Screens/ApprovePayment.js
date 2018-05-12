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
export default class ApprovePayment extends Component {
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
            checkAll:false,
        }
    }
    componentDidMount() {
        var a = new Array(this.state.list.length);
        var b = new Array(this.state.list.length);
        for (var i = 0; i < a.length; ++i) { a[i] = false; b[i] = false; }
        this.setState({ down: a, check: b })
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
            style={{ height: 30, width: 30,}}
            resizeMode='contain'
            />
        );
        var uncheck=(
            <Image
            source={require('../../src/icon/uncheck.png')}
            style={{ height:30, width: 30,}}
            resizeMode='contain'
            />
        );
        return (

            <View style={styles.container}>

                <StatusBar
                    backgroundColor='#005391'
                    barStyle='light-content'
                />
  
                <HeaderWait title='Lên duyệt chi'/>

                <View style={styles.body}>
                    <PopupDialog
                        dialogTitle={<DialogTitle title="Đặt tên bảng duyệt chi" />}
                        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                        width={0.8}
                        height={0.28}
                        containerStyle={{marginTop:0,justifyContent:'flex-start'}}
                        dialogStyle={{ zIndex: 99,marginTop:40 }}
                    >
                        <View style={{flex:1}}>
                        <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInput1}>
                    
                    </TextInput>
                        <View style={{flex:1,flexDirection:'row',borderTopWidth:1,borderColor:'#DFDFDF'}}>
                            <View style={{flex:1}}>
                            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',borderRightWidth:1,borderColor:'#DFDFDF'}}
                            onPress={()=>{
                                console.log(this.state.checkAll);
                                console.log(this.state.check);
                                this.popupDialog.dismiss();
                                Keyboard.dismiss();
                            }}
                            >
                            <View >
                            <Text>OK</Text>
                            </View>
                            </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <View >
                            <Text>CANCEL</Text>
                            </View>
                            </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                    </PopupDialog>
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
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Mã phiếu</Text>
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Thời Gian</Text>
                            </View>

                            <View style={{flex: 1.5, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'  }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Số Tiền</Text>
                                <TouchableOpacity onPress={()=>{
                                    if(this.state.checkAll==false){
                                        
                                        var flag_true=new Array(this.state.check.length);
                                        for (var i = 0; i < this.state.check.length; ++i) { flag_true[i] = true;}
                                        this.setState({check:flag_true})
                                        this.setState({checkAll:true});
                                    }
                                    else{
                                        
                                        var flag_false=new Array(this.state.check.length);
                                        for (var i = 0; i < this.state.check.length; ++i) { flag_false[i] = false;}
                                        this.setState({check:flag_false});
                                        this.setState({checkAll:false})
                                    }
                                }}>
                                    {this.state.checkAll?checked:uncheck}
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View>

                            {
                                this.state.list.map((data, i) => {
                                    return (
                                        <View key={data.id}>
                                            <View style={{ flexDirection: 'row', height: 40, borderBottomWidth: 1, borderBottomColor: '#DFDFDF', paddingHorizontal: 10 }}>

                                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                                    <TouchableOpacity onPress={() => {
                                                        var x = this.state.down;
                                                        if (this.state.down[i] == true)
                                                            x[i] = false;
                                                        else x[i] = true;
                                                        this.setState({ down: x });
                                                    }}>
                                                        <Text style={{ color: 'black', fontWeight: 'bold' }}>DA2-CT-032</Text>
                                                    </TouchableOpacity>
                                                </View>

                                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>15-03-2018</Text>
                                                </View>

                                                <View style={{ flex: 1.5, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>10.000.000đ</Text>
                                                    <TouchableOpacity onPress={()=>{
                                                        var temp=this.state.check;
                                                        temp[i]=!this.state.check[i];
                                                        this.setState({check:temp});
                                                    }}>
                                                        {this.state.check[i]?checked:uncheck}
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View display={this.state.down[i] ? 'flex' : 'none'}>
                                                <View
                                                    style={{ padding: 10 }}>
                                                    <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Phiếu đề nghị:
                                        <Text>Tạm ứng</Text>
                                                    </Text>

                                                    <Text style={{ color: 'black', fontWeight: 'bold', marginVertical: 5 }}>Dự án:
                                        <Text>Tôi là ca sĩ</Text>
                                                    </Text>

                                                    <Text style={{ color: 'black', fontWeight: 'bold', marginVertical: 5 }}>Hợp đồng:
                                        <Text>Thuê MC</Text>
                                                    </Text>

                                                    <Text style={{ color: 'black', fontWeight: 'bold', marginVertical: 5 }}>Nội dung</Text>
                                                    <View style={{ padding: 1 }}>

                                                        <FlatList
                                                            data={this.state.open}
                                                            renderItem={({ item }) =>
                                                                <View style={{ flexDirection: 'row', height: 40, borderBottomWidth: 1, borderBottomColor: '#DFDFDF', paddingHorizontal: 10, alignItems: 'center', justifyContent: 'space-between' }}>

                                                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>CP VP</Text>

                                                                    <Text style={{ color: 'black', fontWeight: 'bold', maxWidth: width / 2, textAlign: 'center' }}>(Mua nước lavie)</Text>

                                                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>10.000.000đ</Text>

                                                                </View>
                                                            }
                                                            keyExtractor={(item, index) => item.id}
                                                        />
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
                                <View style={{flex:1}}>
                                <TouchableOpacity onPress={() => {
                                    this.popupDialog.show();
                                }}>
                                    <View style={styles.rightButton}>
                                        <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Lên danh sách</Text>
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
    contextInput1:{
        height:height/14,
        borderWidth:1,
        borderColor:'#DFDFDF',
        margin:10
    },
})