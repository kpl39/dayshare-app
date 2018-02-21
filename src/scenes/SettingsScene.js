import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Dashboard from '../containers/DashboardContainer';
class SettingsScene extends Component {
    render() {
        return(
            <View style = {styles.container}>
               <Text>Settings</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    blue: {
        color: 'blue'
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch'
      }
});

export default SettingsScene;