import React, { PropTypes } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MKButton, MKColor, getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/FontAwesome';

const theme = getTheme();

const MetadataListItem = props => {
    return (
        <View style={[styles.container, theme.cardStyle]} >
            <View style={styles.infoContainer}>
                <Text style={styles.category}>{props.category}</Text>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.description}>{props.description}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {props.editMeta(props.index)} }>
                    <Icon name="edit" style={{fontSize: 30, color: "#5508a5"}} />
                </TouchableOpacity>
            </View>
        </View>
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
    category: {
        color: '#CE9CE8',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 7
    },
    name: {
        fontSize: 18,
        color: '#797e83',
        marginBottom: 7
    },
    description: {
        fontSize: 15,
        marginBottom: 7
    },
    infoContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column'
    },
    buttonContainer: {
        width: '10%'
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


export default MetadataListItem;