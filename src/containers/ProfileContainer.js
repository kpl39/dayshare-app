import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Actions as RouteActions } from 'react-native-router-flux';
import { Scene, Router, TabBar, Icon, Tabs } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as ActionCreators from '../actions/actions';
import EditProfileComponent from '../components/EditProfileComponent';
let loading = true;

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }
    

    componentDidMount() {
            
            let userid = this.props.profile.firebaseCredentials.uid;

            // this.props.Actions.getParentByUseridRequested();
            // this.props.Actions.getParentByUserid(userid);
    } 
        

    render() {
       
        let {profile} = this.props.profile;

        console.log('Props in Profile Contianer', this.props);

        if (!this.props.profile.profileLoaded) {
            return(
                <View style={styles.loadingContainer}>
                    <Image
                        source={require('../assets/dayShareLoading.gif')}
                    />
                </View>
            )
        } else {
            return(
        
                <View>
                    <EditProfileComponent
                        username={profile.username}
                        updateUsername={this.props.Actions.updateUsername}
                        email={profile.email}
                        updateEmail={this.props.Actions.updateEmail}
                        firstName={profile.firstName}
                        updateFirstName={this.props.Actions.updateFirstName}
                        lastName={profile.lastName}
                        updateLastName={this.props.Actions.updateLastName}
                        address1={profile.address1}
                        updateAddress1={this.props.Actions.updateAddress1}
                        address2={profile.address2}
                        updateAddress2={this.props.Actions.updateAddress2}
                        city={profile.city}
                        updateCity={this.props.Actions.updateCity}
                        state={profile.state}
                        updateState={this.props.Actions.updateState}
                        zipcode={profile.zipcode}
                        updateZipcode={this.props.Actions.updateZipcode}
                        profileImage={profile.profileImageUrl}
                        updateprofileImage={this.props.Actions.updateProfileImage}
                        // profilePicture={this.props.picture.profileBase64}
                    />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    blue: {
        color: 'blue'
    },
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function mapStateToProps(state) {
    return { profile: state.auth,
             picture: state.picture
     };
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(ActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);