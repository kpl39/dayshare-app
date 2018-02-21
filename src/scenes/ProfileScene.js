import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Dashboard from '../containers/DashboardContainer';
import ProfileContainer from '../containers/ProfileContainer';

class ProfileScene extends Component {
    render() {
        return(
            <View style = {styles.container}>
               <ProfileContainer />
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

export default ProfileScene;