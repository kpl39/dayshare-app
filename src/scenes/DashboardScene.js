import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Dashboard from '../containers/DashboardContainer';
class DashboardScene extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Dashboard />
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

export default DashboardScene;