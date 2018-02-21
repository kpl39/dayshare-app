import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


import LoginContainer from '../containers/LoginContainer';

class LoginScene extends Component {
    render() {
        return(
            <View>
                <LoginContainer />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch'
      }
});

export default LoginScene;