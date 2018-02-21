import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, Image, Dimensions, ScrollView, DatePickerIOS, TouchableOpacity, Button, Switch, Slider } from 'react-native';
import { Actions as RouteActions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import AgendaComponent from '../components/AgendaComponent';
import * as ActionCreators from '../actions/actions';
import EditProfileComponent from '../components/EditProfileComponent';

import { MKButton, MKColor, MKTextField } from 'react-native-material-kit';
import CalendarComponent from '../components/CalendarComponent';
import DatePickerComponent from '../components/DatePickerComponent';
import AddEventDateComponent from '../components/AddEventDateComponent';

import Icon from 'react-native-vector-icons/FontAwesome';

class AddEventContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // startDate: this.roundTime(0),
            // endDate: this.roundTime(1),
            // startDateVisible: false,
            // endDateVisible: false,
            // title: '',
            // description: '',
            // reminder: false,
            reminderTime: 10,
            // reminderTimeType: 'minutes',
            // personalEvent: false
        };

        
    }

    componentWillMount() {
        this.props.Actions.updateEventStartDate(this.roundTime(0));
        this.props.Actions.updateEventEndDate(this.roundTime(1));
    }   

    roundTime = (offset) => {
        const d = new Date();
        d.setHours(d.getHours() + 1 + offset);
        d.setMinutes(0, 0, 0);
        return d;
    }

    makeReminderTime(number) {
        if (this.props.calendar.reminderTimeType === 'minutes') {
            return `Remind me ${number} minutes before.`
        } else {
            let hourText = number > 1 ? 'hours' : 'hour';
            return `Remind me ${number} ${hourText} before`;
        }
    
    }

    setDate = (date, type) => {
        type == 'start' ? this.props.Actions.updateEventStartDate(date) : this.props.Actions.updateEventEndDate(date);
    }

    toggleDatePicker = (type) => {
        const {calendar} = this.props;
        console.log('ACTIONS', this.props.Actions);
        if (type == 'start') {
            this.props.Actions.updateEventStartDateVisible(!calendar.startDateVisible);
            this.props.Actions.updateEventEndDateVisible(false);
            // this.setState({startDateVisible: !this.state.startDateVisible, endDateVisible: false});
            
        } else {
            this.props.Actions.updateEventEndDateVisible(!calendar.endDateVisible);
            this.props.Actions.updateEventStartDateVisible(false);
            // this.setState({endDateVisible: !this.state.endDateVisible, startDateVisible: false});
        }
        
    }

    submitEvent = () => {
        const {calendar} = this.props;
        const dateKey = calendar.startDate.toISOString().slice(0,10);
        console.log('dateKEy', dateKey);


        var reminderDate = new Date(calendar.startDate.getTime());

        if (calendar.reminderTimeType === 'minutes') {
            reminderDate.setMinutes(reminderDate.getMinutes() - calendar.reminderTime);
        } else {
            reminderDate.setHours(reminderDate.getHours() - calendar.reminderTime);
        }

        console.log('REMINDER DATE', reminderDate);
        console.log('START DATE', calendar.startDate);

        const eventDetails = {
            eventTitle: calendar.title,
            eventDescription: calendar.description,
            startTime: calendar.startDate.toISOString(),
            endTime: calendar.endDate.toISOString(),
            groupId: this.props.profile.profile.groups[0].groupId,
            primaryParentId: this.props.profile.profile.parentId,
            personal: calendar.personalEvent,
            eventDate: dateKey,
            reminder: calendar.reminder,
            reminderTime: reminderDate
        };

        console.log('event details', eventDetails, dateKey);

        this.props.Actions.addEventToCalendar(dateKey, eventDetails);
        this.props.Actions.resetAddNewEvent();
        RouteActions.pop();
    }

    render() {
        let {profile, calendar} = this.props;
            return(
                <View style={styles.container}>
                    <MKTextField
                        style={styles.textInput}
                        labelColor="#CE9CE8"
                        highlightColor="#CE9CE8"
                        placeholder="Title"
                        floatingLabelEnabled={true}
                        type="text"
                        value={calendar.title}
                        textInputStyle={{fontSize: 20}}
                        onTextChange={ (value) => {this.props.Actions.updateEventTitle(value)} }
                    />
                    <MKTextField
                        style={styles.textInput}
                        labelColor="#CE9CE8"
                        highlightColor="#CE9CE8"
                        placeholder="Description"
                        floatingLabelEnabled={true}
                        type="text"
                        value={calendar.description}
                        textInputStyle={{fontSize: 20}}
                        onTextChange={ (value) => {this.props.Actions.updateEventDescription(value)} }
                    />
                    <Text style={styles.labelText}>Start Time</Text>
                    <TouchableOpacity 
                        onPress={() => this.toggleDatePicker('start')}
                        style={styles.dateButton}>
                       <AddEventDateComponent date={calendar.startDate} />
                    </TouchableOpacity>
                    { calendar.startDateVisible ? <DatePickerComponent 
                                                        setDate={this.setDate} 
                                                        date={calendar.startDate}
                                                        togglePicker={this.toggleDatePicker}
                                                        type="start" /> : null
                    }
                    <Text style={styles.labelText}>End Time</Text>
                    <TouchableOpacity 
                        onPress={() => this.toggleDatePicker('end')}
                        style={styles.dateButton}>
                        <AddEventDateComponent date={calendar.endDate} />
                    </TouchableOpacity>
                    { calendar.endDateVisible ? <DatePickerComponent 
                                                        setDate={this.setDate} 
                                                        date={calendar.endDate}
                                                        togglePicker={this.toggleDatePicker}
                                                        type="end" /> : null
                    }
                    <View style={styles.reminderContainer}>
                        <View style={styles.reminderToggleContainer}>
                            <Text style={styles.reminderText}>Set Reminder?</Text>
                            <Switch 
                                onValueChange={(value) => {this.props.Actions.updateEventReminder(value)} } 
                                value={calendar.reminder}
                                tintColor="#CE9CE8"
                                onTintColor="#CE9CE8"
                                style={styles.switch} />
                        </View>
                        {calendar.reminder ? 
                            <View style={styles.reminderTimeContainer}>
                                <View style={styles.sliderContainer}>
                                    <Slider
                                        style={styles.slider}
                                        minimumValue={calendar.reminderTimeType === 'minutes' ? 5 : 1}
                                        maximumValue={calendar.reminderTimeType === 'minutes' ? 60 : 24}
                                        step={calendar.reminderTimeType === 'minutes' ? 5 : 1}
                                        onValueChange={(value) => {this.setState({reminderTime: value})} }
                                        onSlidingComplete={(value) => {this.props.Actions.updateEventReminderTime(value)} }
                                        minimumTrackTintColor="#CE9CE8"
                                        value={this.state.reminderTime} />
                                    <View style={styles.sliderButtonContainer}>
                                        <TouchableOpacity 
                                            style={[styles.minuteButton, {backgroundColor: calendar.reminderTimeType === 'minutes' ? '#CE9CE8' : '#797e83'}]}
                                            onPress={() => {
                                                this.props.Actions.updateEventReminderTimeType('minutes');
                                                this.setState({reminderTime: 10});
                                                this.props.Actions.updateEventReminderTime(10);
                                            } }>
                                            <Text style={styles.minuteButtonText}>M</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                            style={[styles.hourButton, {backgroundColor: calendar.reminderTimeType === 'hours' ? '#CE9CE8' : '#797e83'}]}
                                            onPress={() => {
                                                this.props.Actions.updateEventReminderTimeType('hours');
                                                this.setState({reminderTime: 2});
                                                this.props.Actions.updateEventReminderTime(2);
                                            } }>
                                            <Text style={styles.hourButtonText}>H</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={styles.reminderTimeText}>{this.makeReminderTime(this.state.reminderTime)}</Text>
                            </View>
                            : 
                            null
                        }
                    </View>
                    <View style={styles.privateToggleContainer}>
                        <View style={styles.privateTextContainer}>
                            <Text style={styles.privateText}>Private?</Text>
                            <Text style={styles.privateTextInfo}>Will not show on group calendar</Text>
                        </View>
                            <Switch 
                                onValueChange={(value) => {this.props.Actions.updateEventPersonal(value)} } 
                                value={calendar.personalEvent}
                                tintColor="#CE9CE8"
                                onTintColor="#CE9CE8"
                                style={styles.switch} />
                        </View>
                   <TouchableOpacity
                        onPress={this.submitEvent}
                        style={styles.submitButton}>
                        <Text style={styles.submitButtonText}><Icon name="check" style={styles.submitButtonIcon}></Icon> Submit</Text>
                    </TouchableOpacity>
                    
                </View>
            )
    }
}

const styles = StyleSheet.create({
    blue: {
        color: 'blue'
    },
    labelText: {
        color: '#797e83',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10
    },
    dateButton: {
        backgroundColor: '#CE9CE8',
        padding: 7,
        borderRadius: 7,
        marginBottom: 25,
    },
    dateContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    datePickerContainer:{
        width: '75%'
    },
    dateButtonContainer: {
        width: '25%',
        justifyContent: 'center'
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
        padding: 10
    },
    textInput: {
        marginBottom: 10,
    },
    reminderContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    reminderToggleContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    reminderText: {
        fontSize: 20,
        color: '#797e83'
    },
    reminderTimeText: {
        fontSize: 18,
        color: '#CE9CE8',
        marginBottom: 20
    },
    switch: {
        marginLeft: 'auto',
        marginRight: 10
    }, 
    reminderTimeContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
        marginTop: 20
    },
    privateToggleContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15
    },
    privateTextContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    privateText: {
        fontSize: 20,
        color: '#797e83'
    },
    privateTextInfo: {
        fontSize: 14,
        color: '#CE9CE8'
    },
    sliderContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15
    },
    slider: {
        width: '66%'
    },
    sliderButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '33%',
        marginRight: 'auto'
    },
    minuteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 5,
        width: 50,
        borderBottomLeftRadius: 7,
        borderTopLeftRadius: 7,
        // backgroundColor: this.state.reminderTimeType === 'minutes' ? '#CE9CE8' : '#797e83'
    },
    minuteButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    hourButton: {
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 5,
        width: 50,
        borderBottomRightRadius: 7,
        borderTopRightRadius: 7,
        // backgroundColor: this.state.reminderTimeType === 'hours' ? '#CE9CE8' : '#797e83'
    },
    hourButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    submitButton: {
        backgroundColor: '#CE9CE8',
        padding: 7,
        borderRadius: 7,
        marginTop: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitButtonText: {
        fontSize: 20,
        color: 'white'
    },
    submitButtonIcon: {
        fontSize: 20
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

export default connect(mapStateToProps, mapDispatchToProps)(AddEventContainer);