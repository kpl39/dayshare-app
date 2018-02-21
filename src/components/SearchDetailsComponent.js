import React, { PropTypes, Component } from 'react';
import {Text, View, TextInput, SectionList, StyleSheet, Picker } from 'react-native';
import { MKButton, MKColor } from 'react-native-material-kit';
import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';

class SearchDetails extends Component{
    constructor(props){
        super(props)
    }


    componentWillMount() {
        console.log('this props', this.props);
    }

    submitSearch() {
        console.log('Submit Search');
        const p = {yo: 1};
        // Actions.push('searchResults', p);
        this.props.Actions.submitSearch();
    }

    render() {

        let ageChoices = [
            {value: 0, label: '0 - 12 Months'},
            {value: 1, label: '12 - 24 Months'},
            {value: 2, label: '2 Years Old'}
        ];

        let ageRangeChoices = [
            {value: 0, label: 'Less than 6 months apart'},
            {value: 1, label: 'Less than 1 year apart'},
            {value: 2, label: 'Less than 2 years apart'},
            {value: 3, label: 'Less than 3 years apart'}
        ];

        let distanceChoices = [
            {value: 1, label: 'Less than 1 mile away'},
            {value: 2, label: 'Less than 2 miles away'},
            {value: 3, label: 'Less than 3 miles away'},
            {value: 4, label: 'Less than 4 miles away'},
            {value: 5, label: 'Less than 5 miles away'},
            {value: 10, label: 'Less than 10 miles away'}
        ];

        return (
            <View style={styles.container}>
                <Dropdown
                label="Select Your Child's Age"
                selectedItemColor="#CE9CE8"
                baseColor="#CE9CE8"
                // placeholder="Select Age"
                data={ageChoices}
                onChangeText={ (value) => {this.props.updateChildAge(value)} } />

                <Dropdown
                    label="Select Age Range"
                    selectedItemColor="#CE9CE8"
                    baseColor="#CE9CE8"
                    data={ageRangeChoices}
                    onChangeText={ (value) => {this.props.updateAgeRange(value)} } />

                <Dropdown
                    label="Select Distance"
                    selectedItemColor="#CE9CE8"
                    baseColor="#CE9CE8"
                    data={distanceChoices}
                    onChangeText={ (value) => {this.props.updateDistance(value)} } />
                <MKButton
                    style={styles.button}
                    backgroundColor="#CE9CE8"
                    onPress= { () => {this.props.searchParents()} }>
                    <Text style={styles.buttonText}>
                        Search
                    </Text>
                </MKButton>

                
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 15,
        marginRight: 15,
        zIndex: -1
    }, 
    button: {
        marginTop: 20,
        padding: 5,
        borderRadius: 5,
        marginBottom: 20
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
})


export default SearchDetails;