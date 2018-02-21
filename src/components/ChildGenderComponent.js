import React, { PropTypes } from 'react';
import {Text, View, StyleSheet } from 'react-native';


const ChildGenderComponent = props => {

    let gender = props.gender === 'M' ? 'Boy' : 'Girl';

    return (
        <View>
            <Text style={styles.text}>{gender}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    text: {
        fontSize: 10
    }
})

// BirthdateComponent.propTypes = {
//     index: PropTypes.number,
//     username: PropTypes.string,
// };

export default ChildGenderComponent;