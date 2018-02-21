import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
// import { Actions as RouteActions } from 'react-native-router-flux';
import { Scene, Router, TabBar, Icon, Tabs } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Parent from '../components/Parent';

import * as ActionCreators from '../actions/actions';
import ProfileScene from '../scenes/ProfileScene';
import TabIcon from '../components/navigation/Tab';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.Actions.getParents();
        this.props.Actions.getParentsRequested();
    }

    render() {

        let  { parents }  = this.props.parents;

        let parentComponents;
        if (Array.isArray(parents)) {
            parentComponents = parents.map((parent, index) => {
                console.log('parent username', parent.username);
                return(<Parent key={index} index={index} username={parent.username} />);
            });
               
                
    
        } 
            

        
        return(
            <View>
                <Text>Fuck Yout</Text>
                {/* <Text style= {styles.blue}>Dashboard</Text>
                {parentComponents} */}
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
    return { parents: state.parents };
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(ActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);