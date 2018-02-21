import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import InitialContainer from '../containers/InitialContainer';
class InitialScene extends Component {
    render() {
        return(
            <View style={styles.container}>
                {/* <Text>Welcome to Day Share!</Text> */}
                <InitialContainer />
               
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

export default InitialScene;