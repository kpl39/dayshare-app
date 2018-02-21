import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router, TabBar, Icon, Tabs } from 'react-native-router-flux';
import configureStore from './store/store';
import { Provider, connect } from 'react-redux';
const store = configureStore({});
const ConnectedRouter = connect()(Router);

import HomeScene from './scenes/HomeScene';
import DashboardScene from './scenes/DashboardScene';
import LoginScene from './scenes/LoginScene';
import SearchResultsScene from './scenes/SearchResultsScene';
import ProfileScene from './scenes/ProfileScene';
import MessagingScene from './scenes/MessagingScene';
import SettingsScene from './scenes/SettingsScene';
import InitialScene from './scenes/InitialScene';
import CameraScene from './scenes/CameraScene';
import ParentProfileScene from './scenes/ParentProfileScene';
import ChildrenScene from './scenes/ChildrenScene';
import CalendarScene from './scenes/CalendarScene';
import GroupScene from './scenes/GroupScene';
import AddEventScene from './scenes/AddEventScene';

import TabIcon from './components/navigation/Tab';
import DashTab from './components/navigation/DashTab';

const App = () => {

    return (
      <Provider store={store}>
        <ConnectedRouter>
          <Scene key="root" >
            <Scene key="initalScene" initial={true} component={InitialScene} title="Day Share" />
            <Scene key="tabbar" hideNavBar={true} tabs={true} tabBarStyle={{ backgroundColor: '#eee' }} showLabel={false}>
              <Scene key="search" title="Search" icon={TabIcon} initial={true}>
                <Scene key="searchHome" component={HomeScene} title="Search" initial={true}/>
                <Scene key="searchResults" component={SearchResultsScene} title="Search Results" />
              </Scene>
              <Scene key="dash" icon={TabIcon} title="Dashboad">
                  {/* <Scene key="dashTabs" tabs={true} tabBarPosition="bottom" tabBarStyle={{ backgroundColor: '#e7cef4' }} showLabel={false} > */}
                  <Scene key="dashTabs" tabs={true} tabBarPosition="top" tabBarStyle={{ backgroundColor: '#e7cef4', paddingTop: 20 }} showLabel={false} showIcon activeTintColor="purple"
                          inactiveTintColor="black"
                          iconStyle={{ width: '100%'}}
                          indicatorStyle={{ backgroundColor: 'transparent' }} >
                    <Scene key="profile" hideNavBar={true} component={ProfileScene} title="Edit Profile" icon={DashTab} initial={true} iconName="pencil-square-o" />
                    {/* <Scene key="messaging" hideNavBar={true} component={MessagingScene} title="Messaging" icon={DashTab} store={store}/> */}
                    <Scene key="childrenScene" hideNavBar={true} component={ChildrenScene} title="Children" icon={DashTab} iconName="child" />
                    <Scene key="calendar" hideNavBar={true} component={CalendarScene} title="Calendar" icon={DashTab} iconName="calendar" />
                    <Scene key="group" hideNavBar={true} component={GroupScene} title="Group" icon={DashTab} iconName="users" />
                    <Scene key="settings" hideNavBar={true} component={SettingsScene} title="Settings" icon={DashTab} iconName="cog" />
                  </Scene>
              </Scene>
              <Scene key="message" title="Messaging" icon={TabIcon}>
                <Scene key="messaging" component={MessagingScene} title="Messaging" icon={DashTab} store={store}/>
                {/* <Scene key="login" component={LoginScene} title="Login" /> */}
              </Scene>
            </Scene>
            <Scene key="cameraScene" component={CameraScene} hideNavBar={true} title="Camera"></Scene>
            <Scene key="parentProfile" component={ParentProfileScene} title="Profile"></Scene>
            <Scene key="addEvent" component={AddEventScene} title="Add Event"></Scene>
          </Scene>
        </ConnectedRouter>
      </Provider>
    );
}

const styles = StyleSheet.create({

});

export default App;



{/* 
<Provider store={store}>
<Router>
  <Scene key="root">

    <Tabs key='tabbar' tabs showLabel={false} tabBarPosition='bottom'>
          <Scene key="home" component={HomeScene} title="Search" initial={true} icon={TabIcon}/>
        <Scene key="dashboard" component={DashboardScene} title="Dashboard" icon={TabIcon}/>

        <Scene key="login" component={LoginScene} title="Login" icon={TabIcon}/>
    </Tabs>
    <Scene key="searchResults" component={SearchResultsScene} title="Search Results" backTitle="Search" />
    

  </Scene>
 
</Router>
</Provider> */}