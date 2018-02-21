import React, {Component} from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
  } from 'react-native';
  

import { Actions as RouteActions } from 'react-native-router-flux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../actions/actions';
import ParentProfileComponent from '../components/ParentProfileComponent';

class ParentProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    // getChildrenAges = () => {
    //     let childrenAges = [];
    //     console.log('Profile in Parent Profile', this.props);
    //     if (this.props.profile.activeParentProfile.children) {
    //         this.props.profile.activeParentProfile.children.forEach((child) => {
    //             childrenAges.push(child.birthDate);
    //         })
    //         return childrenAges;
    //     } else {
    //         return null;
    //     }
        
    // }

    render() {
        const {profile} = this.props;

        // const childrenAges = this.getChildrenAges();

        return (
          <View style={styles.container}>
            <ParentProfileComponent 
                profile={profile} />
          </View>
        );
    }

}
     
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
      }
    });

function mapStateToProps(state) {
    return { profile: state.parents };
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(ActionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ParentProfileContainer);