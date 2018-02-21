import React, { PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';


const Message = props => {
        // console.log('PROPS IN MESSAGE', props);

        // if (props.senderId == props.userId) {
        //     console.log('match');
        // } else {
        //     console.log('false');
        // }

        // return (
        //     <View>
        //         <Text>Message</Text>
        //     </View>
        // )
        if (props.senderId == props.userId) {
            return (
                <View style={styles.primary}>
                    <Text style={styles.text} >{props.messageText}</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.secondary}>
                    <Text style={styles.text} >{props.messageText}</Text>
                </View>
            )
        }

};

const styles = StyleSheet.create({
    primary: {
        backgroundColor: '#CE9CE8',
        marginRight: 'auto',
        padding: 8,
        width: '40%',
        marginBottom: 5,
        borderRadius: 5
    },
    secondary: {
        backgroundColor: '#5508a5',
        marginLeft: 'auto',
        marginRight: 5,
        padding: 8,
        width: '40%',
        marginBottom: 5,
        borderRadius: 5
    },
    text: {
        color: 'white'
    }
})


export default Message;