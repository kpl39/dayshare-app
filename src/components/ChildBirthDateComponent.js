import React, { PropTypes } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const ChildBirthDateComponent = props => {

    convertDate = (date) => {
        const monthName = months[date.getMonth()];
       
        const dateString = `${monthName} ${date.getDate()} ${date.getFullYear()}`;

        return dateString;
    };

    return (
        <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{this.convertDate(props.date)}</Text>
            <Icon style={styles.editIcon} name="pencil-square-o" />
        </View>
    );
};


const styles = StyleSheet.create({
    dateContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dateText: {
        fontSize: 20,
        color: 'white'
    }, 
    editIcon: {
        fontSize: 20,
        color: 'white',
        marginLeft: 'auto'
    }
})

// AddEventDateComponent.propTypes = {
//     index: PropTypes.number,
//     username: PropTypes.string,
// };

export default ChildBirthDateComponent;