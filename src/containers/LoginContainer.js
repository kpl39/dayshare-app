import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { Actions as RouteActions } from 'react-native-router-flux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../actions/actions';

import FacebookLogin from '../components/FacebookLogin';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

    }

    facebookLogin = () => {
        console.log('facebook Login called')
        this.props.Actions.facebookLoginRequested();
        this.props.Actions.facebookLogin();
        // RouteActions.dashboard();
    };

    render() {
        let {auth} = this.props;
        console.log('Login container props', this.props)
        return(
            <View>
                <Text>Login Page</Text>
                <FacebookLogin 
                    facebookLogin={this.facebookLogin} /> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    blue: {
        color: 'blue'
    }
});

function mapStateToProps(state) {
    return { auth: state.auth };
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(ActionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);