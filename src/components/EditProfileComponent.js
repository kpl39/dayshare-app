import React, { PropTypes } from 'react';
import {Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import {Actions as RouteActions} from 'react-native-router-flux';

import { MKButton, MKColor, MKTextField } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/FontAwesome';

const EditProfileComponent = props => {
    console.log('edit profile component', props);
    
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={{width: 150, height: 150}}
                            source={{ uri: props.profileImage }}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <MKButton onPress={RouteActions.cameraScene} style={styles.cameraButton}>
                            <Text style={styles.buttonText}><Icon name="camera" /> Take Picture</Text>
                        </MKButton>
                        <MKButton style={styles.cameraButton}>
                            <Text style={styles.buttonText}><Icon name="picture-o" /> Choose From Library</Text>
                        </MKButton>
                        <MKButton style={styles.saveButton}>
                            <Text style={styles.buttonText}><Icon name="floppy-o" /> Save Changes</Text>
                        </MKButton>
                    </View>
                </View>
                <MKTextField
                    style={styles.textInput}
                    labelColor="#CE9CE8"
                    highlightColor="#CE9CE8"
                    placeholder="Username"
                    floatingLabelEnabled={true}
                    type="text"
                    value={props.username}
                    onTextChange={ (value) => {props.updateUsername(value) } }
                />
                <MKTextField
                    style={styles.textInput}
                    labelColor="#CE9CE8"
                    highlightColor="#CE9CE8"
                    placeholder="Email Address"
                    floatingLabelEnabled={true}
                    type="email"
                    value={props.email}
                    onTextChange={ (value) => {props.updateEmail(value) } }
                />
                <MKTextField
                    style={styles.textInput}
                    labelColor="#CE9CE8"
                    highlightColor="#CE9CE8"
                    placeholder="First Name"
                    floatingLabelEnabled={true}
                    type="text"
                    value={props.firstName}
                    onTextChange={ (value) => {props.updateFirstName(value) } }
                />
                <MKTextField
                    style={styles.textInput}
                    labelColor="#CE9CE8"
                    highlightColor="#CE9CE8"
                    placeholder="Last Name"
                    floatingLabelEnabled={true}
                    type="text"
                    value={props.lastName}
                    onTextChange={ (value) => {props.updateLastName(value) } }
                />
                <MKTextField
                    style={styles.textInput}
                    labelColor="#CE9CE8"
                    highlightColor="#CE9CE8"
                    placeholder="Address 1"
                    floatingLabelEnabled={true}
                    type="text"
                    value={props.address1}
                    onTextChange={ (value) => {props.updateAddress1(value) } }
                />
                <MKTextField
                    style={styles.textInput}
                    labelColor="#CE9CE8"
                    highlightColor="#CE9CE8"
                    placeholder="Address 2"
                    floatingLabelEnabled={true}
                    type="text"
                    value={props.address2}
                    onTextChange={ (value) => {props.updateAddress2(value) } }
                />
                <MKTextField
                    style={styles.textInput}
                    labelColor="#CE9CE8"
                    highlightColor="#CE9CE8"
                    placeholder="City"
                    floatingLabelEnabled={true}
                    type="text"
                    value={props.city}
                    onTextChange={ (value) => {props.updateCity(value) } }
                />
                <MKTextField
                    style={styles.textInput}
                    labelColor="#CE9CE8"
                    highlightColor="#CE9CE8"
                    placeholder="State"
                    floatingLabelEnabled={true}
                    type="text"
                    value={props.state}
                    onTextChange={ (value) => {props.updateState(value) } }
                />
                <MKTextField
                    style={styles.textInput}
                    labelColor="#CE9CE8"
                    highlightColor="#CE9CE8"
                    placeholder="Zipcode"
                    floatingLabelEnabled={true}
                    type="text"
                    value={props.zipcode}
                    onTextChange={ (value) => {props.updateZipcode(value) } }
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        backgroundColor: 'white',
    },
    scrollContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    imageContainer: {
        width: '49%'
    },
    textInput: {
        marginBottom: 10
    },
    cameraButton: {
        backgroundColor: '#CE9CE8',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 5,
        width: '100%',
        paddingTop: 12,
        paddingBottom: 12
    },
    saveButton: {
        backgroundColor: '#5508a5',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 5,
        width: '100%',
        paddingTop: 12,
        paddingBottom: 12
    },
    buttonText: {
        color: 'white'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '49%',
        justifyContent: 'space-between'
    }
})

// Parent.propTypes = {
//     index: PropTypes.number,
//     username: PropTypes.string,
// };

export default EditProfileComponent;






