import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {Actions as RouteActions} from 'react-native-router-flux';
import AddressSearch from '../components/AddressSearch';
import MapComponent from '../components/MapComponent';
import { MKButton, MKColor, MKTextField } from 'react-native-material-kit';
import { Dropdown } from 'react-native-material-dropdown';

import SearchDetailsComponent from '../components/SearchDetailsComponent';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../actions/actions';

class HomeContainer extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        console.log('props in home container', this.props);
    }

    handleSubmit = () => {
        const date = new Date();
        date.setFullYear(date.getFullYear() - this.props.searchForm.childAge);
    
        const birthdate = date.toISOString().slice(0, 10);


        let pkg = {
            latitude: this.props.searchForm.latitude,
            longitude: this.props.searchForm.longitude,
            distance: this.props.searchForm.distance,
            unit: 'miles',
            birthdate: birthdate,
            ageRange: this.props.searchForm.ageRange,
            tags: ''
        };
        console.log('handle submit props', pkg);
        this.props.Actions.searchParentsRequested();
        this.props.Actions.searchParents(pkg);
        RouteActions.searchResults();
    }

    render() {

        let {searchForm} = this.props;
        console.log('searchFrom', searchForm)
        // const updateAddress = bindActionCreators(ActionCreators.updateAddress, dispatch);
        // const updateCoords = bindActionCreators(ActionCreators.updateCoords, dispatch);
        // const updateChildAge = bindActionCreators(ActionCreators.updateChildAge, dispatch);
        // const updateAgeRange = bindActionCreators(ActionCreators.updateAgeRange, dispatch);
        // const updateDistance = bindActionCreators(ActionCreators.updateDistance, dispatch);
        // const searchParents = bindActionCreators(Action)

        return(
            <View style={styles.container}>
                {/* <Text style= {styles.blue}>Home</Text> */}
                <AddressSearch 
                    updateAddress={this.props.Actions.updateSearchAddress}
                    updateCoords={this.props.Actions.updateCoords} />
                <SearchDetailsComponent 
                    updateChildAge={this.props.Actions.updateChildAge}
                    updateAgeRange={this.props.Actions.updateAgeRange}
                    updateDistance={this.props.Actions.updateDistance} 
                    searchParents={this.handleSubmit} />
                {/* <MKTextField
                    style={styles.textBoxContainer}
                    placeholder="Address"
                    floatingLabelEnabled={true}
                    label="textField"
                    // textInputStyle={styles.textBox}
                    onTextChange={ (text) => {console.log('text change', text)} }>
                </MKTextField> */}
                {/* <Image
                    style={{width: 300, height: 300, zIndex: -1}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                /> */}
                {/* <Text>Yo What's Up</Text> */}
                {/* <MapComponent /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    blue: {
        color: 'blue'
    },
    container: {
        flex: 1,
        // position: 'absolute',
        // justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#fff',
        left: 0,
        // top: 70,
        // alignItems: 'center',
        // justifyContent: 'center',
      },
      textBoxContainer: {
        margin: 15,
        paddingTop: 15,
        zIndex: -1
      },
});


function mapStateToProps(state) {
    console.log('$$$$$$$$$$', state);
    return { searchForm: state.search };
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(ActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);