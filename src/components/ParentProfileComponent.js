import React, { PropTypes } from 'react';
import {Text, View, Image, StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';

import MapComponent from './MapComponent';

import BirthdateComponent from './BirthdateComponent';
import ChildInformationComponent from './ChildInformationComponent';

const ParentProfileComponent = props => {
    console.log('props passed to Parent Profile COmp', props);

    const profile = props.profile.activeParentProfile;
    
    if (props.profile.loading) {
        return (
            <View style={styles.loadingContainer}>
                    <Image source={require('../assets/dayShareLoading.gif')} style={styles.loadingImage} />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer} contentContainerStyle={{alignItems: 'center'}}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.username}>{profile.username}</Text>
                        <Text style={styles.description}>{profile.description}</Text>
                        <View style={styles.ageContainer}>
                            <Text style={styles.childrenHeader}>Children</Text>
                            <FlatList 
                                data={profile.children}
                                keyExtractor={ (item, index) => index}
                                renderItem={ (item, index) => 
                                                            <ChildInformationComponent
                                                                date={item.item.birthDate}
                                                                gender={item.item.gender} />  } 
                            />
                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: profile.profileImageUrl}} style={styles.profileImage} />
                    </View>
                    <View style={styles.mapContainer}>
                        <MapComponent 
                            latitude={profile.latitude} 
                            longitude={profile.longitude} />
                    </View>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    loadingContainer: {
        alignItems: 'center'
    },
    loadingImage: {
        width: Dimensions.get('window').width * 0.9, 
        height: Dimensions.get('window').width * 0.9
    },
    container: {
        padding: 10,
        backgroundColor: 'white'
    },
    scrollContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    infoContainer: {
        width: Dimensions.get('window').width * 0.9,
        marginBottom: 15
    },
    username: {
        color: '#CE9CE8',
        fontSize: 30
    },
    childrenHeader: {
        color: '#CE9CE8',
        fontSize: 20
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    mapContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    profileImage: {
        width: Dimensions.get('window').width * 0.9, 
        height: Dimensions.get('window').width * 0.9
    },
    ageContainer: {

    }
})


export default ParentProfileComponent;