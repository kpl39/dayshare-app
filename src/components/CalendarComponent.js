import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import {Calendar} from 'react-native-calendars';


class CalendarComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Calendar with selectable date and arrows</Text>
            <Calendar
                onDayPress={(day) => console.log('Day pressed', day)}
                style={styles.calendar}
                hideExtraDays />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {

  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    marginRight: 10,
    height: 14,
    flex:1,
    paddingTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#CE9CE8',
  }
});

export default CalendarComponent;