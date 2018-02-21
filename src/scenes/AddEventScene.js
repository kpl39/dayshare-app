import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import AddEventContainer from '../containers/AddEventContainer';

class AddEventScene extends Component {
    render() {
        return(
            <View style = {styles.container}>
               <AddEventContainer />
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

export default AddEventScene;