import React, { PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import moment from 'moment';

const Event = props => {
    return (
        <View style={styles.item}>
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{convertTime(props.item.startTime, props.item.endTime)}</Text>
            </View>
            <Text style={styles.title}>{props.item.eventTitle}</Text>
            <Text style={styles.description}>{props.item.eventDescription}</Text>
            
        </View>
    )
};

const convertTime = (startTime, endTime) => {

    const startTimeStr = new Date(startTime).toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
    const endTimeStr = new Date(endTime).toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });

    return `${startTimeStr} - ${endTimeStr}`;
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
        height: 80
    },
    timeContainer: {
        marginBottom: 5
    },
    time: {
        fontWeight: 'bold',
        color: '#CE9CE8'
    },
    title: {
        fontWeight: 'bold'
    },
    description: {
        color: '#797e83'
    }
})


export default Event;