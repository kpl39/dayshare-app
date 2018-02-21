import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ChildrenComponent from '../containers/ChildrenContainer';
import ChildrenContainer from '../containers/ChildrenContainer';

class ChildrenScene extends Component {
    render() {
        return(
            <View style = {styles.container}>
               <ChildrenContainer />
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

export default ChildrenScene;