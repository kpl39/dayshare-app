import React, { PropTypes, Component } from 'react';
import {Text, View, TextInput, SectionList, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class MapComponent extends Component{
    constructor(props){
        super(props)
    }

    render() {

        const circle = {
            center: {
                latitude: this.props.latitude,
                longitude: this.props.longitude,
            },
            radius: 700
        }

        return(
        <View>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                minZoomLevel = {13}
                // maxZoomLevel = {14}
                initialRegion={{
                latitude: this.props.latitude,
                longitude: this.props.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}>
                    <MapView.Circle
                        center={circle.center}
                        radius={circle.radius}
                        fillColor="rgba(206, 156, 232, 0.4)"
                        strokeColor="rgba(0,0,0,0.5)"
                        zIndex={2}
                        strokeWidth={2}
                    />
            </MapView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    map: {
      height: Dimensions.get('window').width * 0.9,
      width: Dimensions.get('window').width * 0.9
    },
  });

export default MapComponent;