import React, { PropTypes, Component } from 'react';
import {Text, View, TextInput, SectionList, StyleSheet, Picker } from 'react-native';
import { MKButton, MKColor } from 'react-native-material-kit';


class AgeSelect extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <MKButton
                backgroundColor={MKColor.Teal}
                onPress ={ () => {console.log('button pressed')} }>
                <Text>
                    Button
                </Text>
            </MKButton>
        );
    }
}