import React, { PropTypes } from 'react';
import {Text, View, StyleSheet, DatePickerIOS, Button } from 'react-native';


const DatePickerComponent = props => {
    console.log('PROPS in DATE PICKER', props);
    return (
            <View style={styles.dateContainer}>
                <View style={styles.datePickerContainer}>
                    <DatePickerIOS 
                        date={props.date}
                        onDateChange={(date) => props.setDate(date, props.type)}/>
                </View>
                <View style={styles.dateButtonContainer}>
                    <Button 
                        title="Done"
                        onPress={() => props.togglePicker(props.type)}>
                        </Button>
                </View>
            </View>
    );
};


const styles = StyleSheet.create({
    container: {
        display: 'flex'
    },
    dateContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    datePickerContainer:{
        width: '75%'
    },
    dateButtonContainer: {
        width: '25%',
        justifyContent: 'center'
    },
    calendarContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
})

// BirthdateComponent.propTypes = {
//     index: PropTypes.number,
//     username: PropTypes.string,
// };

export default DatePickerComponent;