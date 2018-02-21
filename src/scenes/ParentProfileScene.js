import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ParentProfileContainer from '../containers/ParentProfileContainer';

class ParentProfileScene extends Component {
    render() {
        return(
            <View style={styles.container}>
                <ParentProfileContainer />
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
        // justifyContent: 'center',
        // alignSelf: 'stretch'
      }
});

export default ParentProfileScene;