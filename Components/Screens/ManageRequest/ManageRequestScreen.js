import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    Image
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import OverViewScreen from './TabOverView/OverViewScreen';
import AccountantApproveScreen from './TabAccountantApprove/AccountantApproveScreen';

const Tab = TabNavigator(
    {
        OverView: {
            screen: OverViewScreen,
            navigationOptions: ({ navigation }) => ({
                title: `Tổng Quan`,
            }),
        },
        AccountantApprove: {
            screen: AccountantApproveScreen,
            navigationOptions: ({ navigation }) => ({
                title: `Kế Toán Đã Duyệt`,
            }),
        },
    },
    {
        tabBarOptions: {
            upperCaseLabel: false,
            activeTintColor: '#FFF',
            inactiveTintColor: '#DFDFDF',
            style: {
                backgroundColor: '#005391',
            },
            labelStyle: {
                fontSize: 14
            }
        },
        animationEnabled: true,
        swipeEnabled: true,
    }
);

const { height, width } = Dimensions.get('window');
const headerBar = height / 10;

export default class ManageRequestScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Quản lý phiếu đề nghị',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../../src/icon/docs.png')}
                style={[{ width: 20, height: 20 }, { tintColor: tintColor }]}
            />
        ),
    };
    render() {
        return (
            <View style={styles.container}>
                <Tab />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})