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
import picker from './UpdateInfoLib';
import RNFetchBlob from 'rn-fetch-blob';
const { width, height } = Dimensions.get('window');

class UpdateInfoScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            data: null,
            filename: ''
        }
    }
    componentDidMount() {
        console.log(this.props.profile);
    }
    showImage() {
        picker((source, data, filename) => { this.setState({ avatarSource: source, data, filename }) })
    }
    uploadImage() {
        RNFetchBlob.fetch('POST', 'http://auto.500ae.vn:8089/api/profile/update-avatar', {
            Authorization: "Bearer " + this.props.token,
            otherHeader: 'foo',
            PlatformType: 'ADR',
        }, [{ name: 'file', filename: `${this.state.filename}.png`, type: 'image/png', data: this.state.data },]).then((resp) => {
            console.log(resp)
            console.log(this.state.data)
        }).catch((err) => {
            console.log(resp)
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <TouchableOpacity onPress={this.showImage.bind(this)}>
                        <Image
                            style={styles.avatar}
                            resizeMode='contain'
                            source={{ uri: `${this.props.profile.avatar}` }}
                        />
                        <Image
                            style={styles.avatar}
                            resizeMode='contain'
                            source={this.state.avatarSource}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.uploadImage.bind(this)}>
                        <Text>Upload Image</Text>
                    </TouchableOpacity>
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

                    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
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
        width: width / 2 - 30,
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
    return { profile: state.todos.profile, token: state.todos.token };
}
export default connect(mapStateToProps)(UpdateInfoScreen);