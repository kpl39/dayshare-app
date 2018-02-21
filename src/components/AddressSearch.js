import React, { PropTypes, Component } from 'react';
import {Text, View, TextInput, SectionList, StyleSheet, Picker } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const windowSize = require('Dimensions').get('window')
const deviceWidth = windowSize.width
const deviceHeight = windowSize.height

class AddressSearch extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            address: 'Address',
            childAge: 0
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Address'
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'default'}
                    fetchDetails={true}
                    currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                    currentLocationLabel="Current location"
                    styles={{
                        textInputContainer: {
                            backgroundColor: '#CE9CE8',
                            // borderWidth: 1,
                            // borderColor: 'blue',
                            // borderRadius: 10,
                            // margin: 5,
                            // height: 30
                        },
                        textInput: {
                            // marginLeft: 0,
                            // marginRight: 0,
                            // marginBottom: 20,
                            // height: 20,
                            // color: '#5d5d5d',
                            // fontSize: 16
                        },
                        listView: {
                            zIndex: 100,
                            marginTop: 44,
                            height: deviceHeight,
                            width: deviceWidth,
                            position: 'absolute',
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb'
                        },
                        description: {
                            fontSize: 12,
                            color: '#000000'
                            
                        },
                        row: {
                            backgroundColor: '#efefef',
                            marginLeft: 5,
                            marginRight: 5
                        }
                    }}
                    currentLocation={false}
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        console.log('Address Data', data);
                        console.log('Address Details', details);
                        const lat = details.geometry.location.lat;
                        const lng = details.geometry.location.lng;
                        this.props.updateAddress(data.description);
                        this.props.updateCoords(lat, lng);
                    }}
                    query={{
                        key: 'AIzaSyBQffWukpC67Nyw9YWd9NN4DXRV6fCJeEc',
                        language: 'en', // language of the results
                    }}
                />
                {/* <View style={styles.textInputContainer}>
                    <TextInput
                            placeholder="Address"
                            onChangeText={ (address) => {this.setState({address}) }}
                            style={styles.textInput}
                            // style={{height: 40, borderColor: 'gray', borderWidth: 1, zIndex: -1}}
                            // value={this.state.address}   
                    />
                </View> */}
                {/* <View>
                    <Picker
                        selectedValue={this.state.childAge}
                        style={ {height: 60} } 
                        itemStyle={{height:100}}
                        onValueChange={ (itemValue, itemIndex) => {this.setState({childAge: itemValue}); console.log('item changed', itemValue) } }>
                    <Picker.Item label="Less than 12 months" value="0" />
                    <Picker.Item label="12 to 24 months" value="1" />
                    <Picker.Item label="2 Years Old" value="2" />
                    <Picker.Item label="3 Years Old" value="3" />
                    <Picker.Item label="4 Years Old" value="4" />
                    <Picker.Item label="5 Years Old" value="5" />
                    </Picker>
                </View> */}
                
                
            </View>
        );
    }
}
  

    const styles = StyleSheet.create({
        blue: {
            color: 'blue'
        },
        container: {
        width: deviceWidth,
        marginLeft: 0,
        marginRight: 0
            // alignItems: 'center',
            // justifyContent: 'center',
        },
        textInputContainer: {
            flex: 1,
            zIndex: -1,
            backgroundColor: '#C9C9CE',
            height: 44,
            // borderColor: 'blue',
            flexDirection: 'row',
            // borderRadius: 10,
            // margin: 5,
        },

        textInput: {
            backgroundColor: '#FFFFFF',
            height: 28,
            borderRadius: 5,
            paddingTop: 4.5,
            paddingBottom: 4.5,
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 7.5,
            marginLeft: 8,
            marginRight: 8,
            fontSize: 15,
            flex: 1,
        }
    });

export default AddressSearch;
