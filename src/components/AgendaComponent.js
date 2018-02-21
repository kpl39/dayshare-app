import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import Event from './EventComponent';
import {Actions} from "react-native-router-flux";

class AgendaComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        today: new Date(),
        items: {}
    }
  }

  render() {
    return (
            <Agenda
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                selected={this.state.today}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
                addEvent={this.props.addEvent}
                theme={{
                    agendaDayTextColor: '#797e83',
                    agendaDayNumColor: '#CE9CE8',
                    agendaTodayColor: '#CE9CE8',
                    arrowColor: '#CE9CE8',
                    // selectedDayTextColor: '#CE9CE8',
                    selectedDayBackgroundColor: '#CE9CE8',
                    todayTextColor: '#CE9CE8',
                    dotColor: '#CE9CE8',
                    selectedDotColor: 'white'
                }}
            />
    );
  }

  loadItems(day) {
    const events = this.props.events;
    console.log('Loading Items', events);
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!events[strTime]) {
                    events[strTime] = [];
                }
            }
            console.log('EVENTS with blanks added', events);
            this.setState({
                items: events
            });
        }, 1000);
  };

  renderItem(item) {
    console.log('RENDER ITEM CALLED', item);
    return (
      <Event item={item} />
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}></View>
    );
  }

  rowHasChanged(r1, r2) {
    console.log('row has changed R1', r1)
    console.log('row has changed R2', r2)
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
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

export default AgendaComponent;