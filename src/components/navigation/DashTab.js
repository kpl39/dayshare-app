import React, { Component } from 'react'
import {Text, View,  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Navigation Tab
 */

const DashTab = ({selected, focused, title, iconName}) => {
  let defaultStyles = {
    color: focused ? '#5508a5' :'#797e83',
    fontSize: 30
  };

  let tabStyle = {
    // margin: 'auto',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: '100%'
  }

  return (
    <View style={tabStyle}>
        {/* <Text style={defaultStyles}>{title}</Text> */}
        <Icon style={defaultStyles} name={iconName} />
    </View>
  );

};

export default DashTab;
