import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CalendarContainer from '../containers/CalendarContainer';

class CalendarScene extends Component {

    // static onEnter = () => {
    //     console.log('Calendar on Enter');
    //     Actions.refresh();
    // };

    render() {
        return(
            <View style = {styles.container}>
               <CalendarContainer />
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

export default CalendarScene;