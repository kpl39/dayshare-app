import React, {Component} from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
  } from 'react-native';
  
import Camera from 'react-native-camera';

import RNFS from 'react-native-fs'

import { Actions as RouteActions } from 'react-native-router-flux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../actions/actions';

import Icon from 'react-native-vector-icons/Ionicons';
import { MKButton } from 'react-native-material-kit';


class CameraScene extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Camera props after render", this.props);
        return (
          <View style={styles.container}>
            <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}
              captureTarget={Camera.constants.CaptureTarget.temp}
              captureQuality="medium"
              >
              {/* <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text> */}
              <MKButton fab={true} style={styles.captureButton} onPress={this.takePicture.bind(this)}>
                <Icon color="#CE9CE8" name="ios-aperture-outline" size={100} />
              </MKButton>
              {/* <Icon.Button color="#CE9CE8" name="ios-aperture" size={100} backgroundColor="rgba(0, 0, 0, 0)" onPress={this.takePicture.bind(this)}>
              </Icon.Button> */}
              {/* <Icon color="#CE9CE8" name="circle-o" size={30} backgroundColor="#00FFFFFF" onPress={this.takePicture.bind(this)} /> */}
            </Camera>
          </View>
        );
    }
     
    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({})
          .then((data) => {
              console.log('response from Camera', data);
              this.props.Actions.takeProfilePicture(data.path);
              console.log('Props after picture capture', this.props);
              RNFS.readFile(data.path, "base64")
                .then((res) => {
                    this.props.Actions.convertProfileToBase64('data:image/png;base64,' + res);
                    RouteActions.pop();
                })
          })
          .catch(err => console.error(err));
    }

}
     
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row',
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
      },
      captureButton: {
        backgroundColor: "rgba(0, 0, 0, 0)",
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
      }
    });
    

function mapStateToProps(state) {
    return { auth: state.auth };
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(ActionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraScene);