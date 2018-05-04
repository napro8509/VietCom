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
    ScrollView
} from 'react-native';
import HeaderWait from '../Header/HeaderWait';

const { width, height } = Dimensions.get('window');
export default class WaitApprove extends Component {
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
            e: true
        }
    }
    componentDidMount() {
        var a = new Array(this.state.list.length);
        for (var i = 0; i < a.length; ++i) { a[i] = false; }
        this.setState({ down: a })
        console.log(a);
    }
    openDropDown(id) {
        var x = this.state.down;
        x[id] = true;
        this.setState({ down: x });
    }
    render() {
        const ImageDown=(
            <Image
                source={require('../../src/icon/drop_down.png')}
                style={{ height: 20, width: 20 }}
            />);
        const ImageUp=(
            <Image
                source={require('../../src/icon/slide_up.png')}
                style={{ height: 20, width: 20 }}
            />);
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
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Mã phiếu</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Thời Gian</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Số Tiền</Text>
                        </View>

                    </View>
                    <View>

                            {
                                this.state.list.map((data, i) => {
                                    return (
                                        <View key={data.id}>
                                            <View style={{ flexDirection: 'row', height: 40, borderBottomWidth: 1, borderBottomColor: '#DFDFDF', paddingHorizontal: 10 }}>
                                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>DA2-CT-032</Text>
                                                </View>

                                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>15-03-2018</Text>
                                                </View>

                                                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>10.000.000đ</Text>
                                                    <TouchableOpacity onPress={() => {
                                                        var x=this.state.down;
                                                        if(this.state.down[i]==true)
                                                        x[i]=false;
                                                        else x[i]=true;
                                                        this.setState({down:x});
                                                        console.log(this.state.down);

                                                    }}>
                                                        {this.state.down[i]?ImageUp:ImageDown}
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

                                                    <View style={styles.buttonContainer}>

                                                        <View style={styles.leftButton}>
                                                            <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Hủy Phiếu</Text>
                                                        </View>

                                                        <View style={styles.rightButton}>
                                                            <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Duyệt phiếu</Text>
                                                        </View>

                                                    </View>
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