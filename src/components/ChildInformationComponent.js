import React, { PropTypes } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import BirthdateComponent from './BirthdateComponent';
import ChildGenderComponent from './ChildGenderComponent';


const ChildInformationComponent = props => {

    console.log('PROPS IN CHILD INFORMATION', props);

    return (
        <View style={styles.container}>
            <ChildGenderComponent gender={props.gender} />
            <BirthdateComponent date={props.date} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        borderBottomColor: '#CE9CE8',
        borderBottomWidth: 2
    },
    ageText: {
        fontSize: 10
    }
})

// BirthdateComponent.propTypes = {
//     index: PropTypes.number,
//     username: PropTypes.string,
// };

export default ChildInformationComponent;