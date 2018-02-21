import React, { PropTypes } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import { MKButton } from 'react-native-material-kit';


const FacebookLogin = props => {
    // console.log('props login component', props)
    return (
        <View>
            <MKButton
              backgroundColor="#CE9CE8"
              style={styles.button}
              onPress= {props.facebookLogin}>
                <Text style={styles.buttonText}>
                    Facebook Login
                </Text>
            </MKButton>
        </View>
    );
};

// Parent.propTypes = {
//     index: PropTypes.number,
//     username: PropTypes.string,
// };
const styles = StyleSheet.create({
    // container: {
    //     marginLeft: 15,
    //     marginRight: 15,
    //     zIndex: -1
    // }, 
    button: {
        marginTop: 20,
        padding: 5,
        borderRadius: 5,
        marginBottom: 20
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
})

export default FacebookLogin;