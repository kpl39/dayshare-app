import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeContainer from '../containers/HomeContainer';
class HomeScene extends Component {
    render() {
        return(
            <View style={styles.container}>
                <HomeContainer />
                {/* <Text>Home</Text> */}

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

export default HomeScene;