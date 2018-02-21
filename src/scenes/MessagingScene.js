import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import MessagingContainer from '../containers/MessagingContainer';

import { Actions as RouteActions } from 'react-native-router-flux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../actions/actions';

import SockJS from 'sockjs-client';
import { subscribeToSocket } from '../actions/actions';

var Stomp = require('stompjs/lib/stomp.js').Stomp;



class MessagingScene extends Component {
    constructor(props) {
        super(props);
    }

    static onEnter = (scope) => {
        console.log('MESSAGING ON ENTER STATE', scope);
    }

    render() {
     
       
        console.log('Props on render messaging sene', this.props);
        // if (this.props.messages.subscriptions[2]) {
        //     console.log('Subs are there', this.props.messages.subscriptions[2]);
        // }
        return(
            <View style = {styles.container}>
                <MessagingContainer />
            </View>
        )
    }

    subscribeToSocket() {
        console.log('Subscribe to Socket Props', this.props);
    }

}

const styles = StyleSheet.create({
    blue: {
        color: 'blue'
    },
    container:{
        flex: 1,
        justifyContent: 'center'
      }
});

function mapStateToProps(state) {
    console.log('state in messaging scene', state);
    return { 
        messages: state.messages,
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(ActionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagingScene);