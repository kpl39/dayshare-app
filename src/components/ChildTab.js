import React, { PropTypes } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';


const ChildTab = props => {
    console.log('PROPS IN CHILD TAB', props)
    let calculatedWidth = Dimensions.get('window').width / props.numOfChildren;

    if (props.child) {
        return (
            <View style={[styles.container, {}]}>
                <TouchableOpacity 
                    style={props.child.active ? styles.active : styles.inactive}
                    onPress={() => {props.changeChild(props.index)} }>
                        <Text style={styles.text}>{props.child.firstName}</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return null;
    }
    
};


const styles = StyleSheet.create({
    container: {
        marginLeft: 20
    },
    text: {
        color: '#797e83',
        fontSize: 20,
        marginBottom: 10
    },
    active: {
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#CE9CE8',
    },
    activeText: {
        color: '#CE9CE8',
        fontSize: 20
    },
    inactive: {
        alignItems: 'center',
    },
    inactiveText: {
        color: '#797e83',
        fontSize: 20
    }
})

// BirthdateComponent.propTypes = {
//     index: PropTypes.number,
//     username: PropTypes.string,
// };

export default ChildTab;