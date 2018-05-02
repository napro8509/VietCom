import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    StatusBar,
    Image
} from 'react-native';
import HeaderWait from '../Header/HeaderWait';

export default class Accountant extends Component {
    static navigationOptions = {
        drawerLabel: 'Phiếu trễ hạn',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../src/icon/bell_icon.png')}
                style={[{ height: 20, width: 20 }, { tintColor: tintColor }]}
            />
        ),
    };
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
                            <Text>Số phiếu: </Text><Text style={{ color: 'blue', fontSize: 17 }}>23</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>Tổng tiền: </Text><Text style={{ color: 'blue', fontSize: 17 }}>15.000.000 đ</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', height: 40, borderBottomWidth: 1, borderBottomColor: 'gray', backgroundColor: '#DFDFDF' }}>
                        <View style={{ flex: 1, marginLeft: 10, flexDirection: 'row' }}>
                            <View style={{ flex: 3, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Mã Phiếu</Text>
                            </View>
                            <View style={{ flex: 4, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Người Trễ</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Thời Gian Trễ</Text>
                            </View>
                            <View style={{ justifyContent: 'center', marginRight: 10 }}>
                                <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>Số Tiền</Text>
                            </View>
                        </View>
                    </View>


                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
                        renderItem={({ item }) =>
                            <View style={{ flexDirection: 'row', height: 40, borderBottomWidth: 1, borderBottomColor: '#DFDFDF' }}>
                                <View style={{ flex: 1, marginLeft: 10, flexDirection: 'row' }}>
                                    <View style={{ flex: 3, justifyContent: 'center' }}>
                                        <Text style={{ color: 'black' }}>VP-1554</Text>
                                    </View>
                                    <View style={{ flex: 4, justifyContent: 'center' }}>
                                        <Text style={{ color: 'black' }}>NguyễnThịLan</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ color: 'black' }}>15 Ngày</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', marginRight: 10 }}>
                                        <Text style={{ textAlign: 'right', color: 'blue' }}>12000000 đ</Text>
                                    </View>
                                </View>
                            </View>
                        }
                        keyExtractor={(item, index) => item.id}
                    />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        borderBottomWidth: 2,
        borderBottomColor: 'blue'
    }
})