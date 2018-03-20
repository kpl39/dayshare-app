import React, { PropTypes } from 'react';
import {Text, View, StyleSheet, Image, ScrollView, Button, TouchableOpacity, Alert } from 'react-native';
import {Actions as RouteActions} from 'react-native-router-flux';
import { MKButton } from 'react-native-material-kit';

import Icon from 'react-native-vector-icons/FontAwesome';

import SignupTextInput from './SignupTextInput';

import { Field, reduxForm } from 'redux-form'

const required = value => (value ? undefined : 'Required')
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const stateLength = value =>
  value && value.length !== 2 ? `ex. OH` : undefined

const addressTooltip = () => {
    Alert.alert(
        'Your address is private', 
        'It will not be shared with any members until your are in their Day Share group.',
        [
            {text: 'OK', onPress: () => console.log('OK pressed')}
        ]
    );
}

const SignupComponent = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    console.log("SIGN UP COMPONENT PROPS", props);
    return(
        <ScrollView style={styles.container}> 
            <Field
                name="username"
                type="text"
                component={SignupTextInput}
                label="Username"
                validate={[required]}
            />
            <Field
                name="firstName"
                type="text"
                component={SignupTextInput}
                label="First Name"
                validate={[required]}
            />
            <Field
                name="lastName"
                type="text"
                component={SignupTextInput}
                label="Last Name"
                validate={[required]}
            />
            <Field
                name="email"
                type="email"
                component={SignupTextInput}
                label="Email Address"
                validate={[required, email]}
            />
            <View style={styles.addressTooltipContainer}>
                <View style={styles.addressContainer}>
                    <Field
                        name="address"
                        type="text"
                        component={SignupTextInput}
                        label="Address"
                        validate={[required]}
                    />
                </View>
                <View style={styles.toolTipContainer}>
                    <MKButton fab={true} onPress={ () => addressTooltip() }>
                        <Icon name="exclamation-circle" style={styles.toolTipIcon} />
                    </MKButton>
                </View> 
            </View>
            <View style={styles.cityStateContainer}>
                <View style={styles.cityContainer}>
                    <Field
                        name="city"
                        type="text"
                        component={SignupTextInput}
                        label="City"
                        validate={[required]}
                    />
                </View>
                <View style={styles.stateContainer}>
                    <Field
                        name="state"
                        type="text"
                        component={SignupTextInput}
                        label="State"
                        validate={[required, stateLength]}
                    />
                </View>
            </View>
            <Field
                name="zipcode"
                type="text"
                component={SignupTextInput}
                label="Zip Code"
                validate={[required]}
            />
            <TouchableOpacity style={props.invalid ? styles.invalidSubmitButton : styles.submitButton} onPress={props.handleSubmit} disabled={props.invalid}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            {/* <Button style={styles.submitButton} onPress={props.handleSubmit} disabled={props.invalid} title="Submit" /> */}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        backgroundColor: 'white',
    },
    addressTooltipContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    addressContainer: {
        width: '90%'
    },
    toolTipContainer: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    toolTipIcon: {
        color: '#CE9CE8',
        fontSize: 20,
    },
    cityStateContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cityContainer: {
        width: '70%'
    },
    stateContainer: {
        width: '25%'
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
    submitButton: {
        width: '100%',
        backgroundColor: '#CE9CE8',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    invalidSubmitButton: {
        width: '100%',
        backgroundColor: '#d9dde2',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
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

export default reduxForm({form: 'signupForm'})(SignupComponent);





