import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';



class GroupScene extends Component {
    render() {
        return(
            <View style = {styles.container}>
               <Text>Group</Text>
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

export default GroupScene;