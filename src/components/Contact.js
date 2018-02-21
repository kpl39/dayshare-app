import React, { PropTypes } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MKButton, MKColor, getTheme } from 'react-native-material-kit';

const theme = getTheme();

const Contact = props => {
    return (
        <TouchableOpacity   style={[styles.container, theme.cardStyle]} 
                            onPress={() => {
                                console.log('clicked on user', props.contact);
                                props.changeUser(props.contact);
                                props.closeDrawer();
                            }} >
            <View style={styles.imageContainer}>
                <Image source={{uri: props.contact.profileImageUrl}} style={{width: 50, height: 50}} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.username}>{props.contact.username}</Text>
                <Text style={styles.status}>Online</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        padding: 5
    },
    imageContainer: {
        width: '20%'
    },
    detailsContainer: {
        width: '78%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    username: {
        fontSize: 20,
        color: '#CE9CE8'
    },
    status: {
        color: 'green',
        fontSize: 15
    }
    // primary: {
    //     backgroundColor: '#CE9CE8',
    //     marginRight: 'auto',
    //     padding: 8,
    //     width: '40%',
    //     marginBottom: 5,
    //     borderRadius: 5
    // },
    // secondary: {
    //     backgroundColor: '#5508a5',
    //     marginLeft: 'auto',
    //     marginRight: 5,
    //     padding: 8,
    //     width: '40%',
    //     marginBottom: 5,
    //     borderRadius: 5
    // },
    // text: {
    //     color: 'white'
    // }
})


export default Contact;