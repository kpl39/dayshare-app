import React, { PropTypes } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const AddEventDateComponent = props => {

    convertDate = (date) => {
        const monthName = months[date.getMonth()];
        const dayName = days[date.getDay()];
        const dateString = `${dayName} ${monthName} ${date.getDate()} - ${this.convertTime(date)}`;

        return dateString;
    };

    convertTime = (date) => {
        return date.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
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

export default AddEventDateComponent;