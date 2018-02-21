import React, { PropTypes } from 'react';
import {Text, View, StyleSheet } from 'react-native';


const BirthdateComponent = props => {

    console.log('props in bday comp', props);

    convertBirthdate = (date) => {
        const currentDate = new Date();
        const d = date.split('-');
        const childDate = new Date(d[0], d[1], d[2]);
        const difference =  currentDate - childDate;
        const yearMs = 31536000000;
    
        const age = difference / yearMs;
        let ageString;
    
        if (age < 1) {
          ageString = 'Less than 12 Months';
        } else if (age >= 1 && age < 2) {
          ageString = '12 to 24 Months';
        } else {
          ageString = Math.floor(age) + ' Years Old';
        }
    
        return ageString;
    }


    return (
        <View>
            <Text style={styles.ageText}>{this.convertBirthdate(props.date)}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    ageText: {
        fontSize: 10
    }
})

// BirthdateComponent.propTypes = {
//     index: PropTypes.number,
//     username: PropTypes.string,
// };

export default BirthdateComponent;