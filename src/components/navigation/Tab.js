import React, { Component } from 'react'
import {Text, View } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Navigation Tab
 */

const Tab = ({selected, focused, title}) => {

  let defaultStyles = {
    color: focused ? '#CE9CE8' :'black',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    // marginBottom: -6,
    // marginLeft: -5
  };

  let tabStyle = {
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap'
  }

  return (
    <View style={tabStyle}>
        <Text style={defaultStyles}>{title}</Text>
        {/* <Icon style={defaultStyles} name={iconName} /> */}
    </View>
  );

};

export default Tab;
