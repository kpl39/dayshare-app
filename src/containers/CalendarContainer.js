import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import { Actions as RouteActions } from 'react-native-router-flux';
import { Scene, Router, TabBar, Icon, Tabs } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import AgendaComponent from '../components/AgendaComponent';
import TestAgenda from '../components/TestAgenda';
import * as ActionCreators from '../actions/actions';
import EditProfileComponent from '../components/EditProfileComponent';
let loading = true;
import { MKButton, MKColor } from 'react-native-material-kit';

const FAButton = MKButton.coloredFab()
                            .withText('Search')
                            .withOnPress( () => console.log('buttonPressed'))
                            .build();

class CalendarContainer extends Component {
    constructor(props) {
        super(props);
    }

    addEvent() {
        console.log('ADD EVENT IN COMPONENT');
        RouteActions.addEvent();
    }

    getEvents = () => {
        if (this.props.profile.profile.groups && this.props.profile.profile.parentId && Object.keys(this.props.calendar.events).length < 1) {
            let groupId = this.props.profile.profile.groups[0].groupId;
            let parentId = this.props.profile.profile.parentId;
            
            this.props.Actions.getEventsByGroupId(groupId, parentId);
        };
    }

    render() {
        let {profile, calendar} = this.props;
       
            return(
                <AgendaComponent 
                    getEvents={this.getEvents} 
                    events={calendar.events}
                    addEvent={this.addEvent}/>
                // <TestAgenda />
            )
    }
}

const styles = StyleSheet.create({
    blue: {
        color: 'blue'
    },
    calendarContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 320,
        width: Dimensions.get('window').width * 0.9
    },
    container: {
        flex: 1,
        paddingTop: 20
    }
});

function mapStateToProps(state) {
    return { 
        profile: state.auth,
        calendar: state.calendar
     };
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(ActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);