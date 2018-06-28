import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    StatusBar,
    Dimensions,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');

class UpdateInfoScreen extends Component {
    componentDidMount(){
        console.log(this.props.profile);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        resizeMode='contain'
                        source={{uri:`${this.props.profile.avatar}`}}
                    />
                </View>
                <View>
                    <View style={{ padding: 10 }}>
                        <View>
                            <Text style={styles.fieldName}>Full Name</Text>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.contextInput1}
                            >
                                {this.props.profile.fullName}
                            </TextInput>
                        </View>
                    </View>

                    <View style={{ padding: 10, flexDirection: 'row',justifyContent:'space-between' }}>
                        <View>
                            <Text style={styles.fieldName}>Ngày sinh</Text>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.contextInput2}
                            >
                                {this.props.profile.fullName}
                            </TextInput>
                        </View>

                        <View>
                        <Text style={styles.fieldName}>Giới tính</Text>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.contextInput2}
                            >
                                {this.props.profile.gender}
                            </TextInput>
                        </View>
                    </View>

                    <View style={{ padding: 10 }}>
                        <View>
                            <Text style={styles.fieldName}>Email</Text>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.contextInput1}
                            >
                                {this.props.profile.email}
                            </TextInput>
                        </View>
                    </View>

                    <View style={{ padding: 10 }}>
                        <View>
                            <Text style={styles.fieldName}>Số điện thoại</Text>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.contextInput1}
                            >
                                {this.props.profile.phone}
                            </TextInput>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: width / 2,
        height: width / 2,
        borderRadius: width / 2
    },
    contextInput1: {
        height: height / 14,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 5,
        paddingLeft: 10
    },
    contextInput2: {
        height: height / 14,
        width:width/2-30,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 5,
        paddingLeft: 10
    },
    fieldName: {
        fontSize: 16,
        color: '#005391'
    },
});

function mapStateToProps(state) {
    return { profile: state.todos.profile };
}
export default connect(mapStateToProps)(UpdateInfoScreen);