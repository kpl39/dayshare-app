import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { Actions as RouteActions } from 'react-native-router-flux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../actions/actions';

import FacebookLogin from '../components/FacebookLogin';

import * as firebaseApi from '../api/FireBaseApi';

class InitialContainer extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
      console.log('COMPONENT DID MOUNT', this.props);
      this.props.Actions.getAuthStateRequested();
      this.props.Actions.getAuthState();
    }

    componentDidUpdate() {
       console.log("COMPONENT DID UPDATE", this.props);
       if (this.props.auth.authenticated) {
           if (Object.keys(this.props.auth.profile) < 1 ) {
            RouteActions.dash();
           }
       } else {
           console.log('NOT AUTHENTICATED');
       }
    }

    facebookLogin = () => {
        console.log('facebook Login called')
        this.props.Actions.facebookLoginRequested();
        this.props.Actions.facebookLogin();
        // RouteActions.dashboard();
    };

    render() {
        let {auth} = this.props;
        // console.log('Login container props', this.props)
        return(
            <View>
                <Text>Welcome to DayShare</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(InitialContainer);