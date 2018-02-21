import React, { PropTypes } from 'react';
import {Text, View, Image, StyleSheet, FlatList } from 'react-native';
import { MKButton, MKColor, getTheme } from 'react-native-material-kit';

import BirthdateComponent from './BirthdateComponent';

const theme = getTheme();

const SearchResult = props => {
    return (
        <View style={[styles.container, theme.cardStyle]}>
            <View style={styles.imageContainer}>
                <Image source={{uri: props.imageUrl}} style={{width: 100, height: 100}} />
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.usernameContainer}>
                    <Text style={styles.usernameText}>{props.username}</Text>
                </View> 

                <View style={styles.bioContainer}>
                    <Text style={styles.descriptionText}>{props.description}</Text>
                </View>

                <View style={styles.ageContainer}>
                    <Text style={styles.childAgeHeaderText}>Child Age(s)</Text>
                    <FlatList 
                        data={props.childrenAges}
                        keyExtractor={ (item, index) => index}
                        renderItem={ (item, index) => <BirthdateComponent
                                                        date={item.item} />}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <MKButton
                    backgroundColor="#CE9CE8"
                    style={styles.profileButton}
                    onPress={ () => {
                        console.log('View Profile MK Button Pressed', props);
                        props.selectProfile(props)} 
                        }>
                    <Text style={styles.profileButtonText}>View Profile</Text>
                </MKButton>
                <MKButton
                    backgroundColor="#5508a5"
                    style={styles.profileButton}>
                    <Text style={styles.profileButtonText}>Contact</Text>
                </MKButton>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 110,
        // backgroundColor: '#ffffff',
        // borderRadius: 2,
        // borderColor: '#ffffff',
        // borderWidth: 1,
        // shadowColor: 'rgba(0, 0, 0, 0.12)',
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // shadowOffset: {
        //   height: 1,
        //   width: 2,
        // },
        marginBottom: 5,
        padding: 5
    },
    imageContainer: {
        width: '32%'
    },
    descriptionContainer: {
        display: 'flex',
        width: '40%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    usernameContainer: {
        height: '20%'
    },
    bioContainer: {
        height: '39%',
        overflow: 'hidden'
    },
    ageContainer: {
        height: '39%'
    },
    buttonContainer: {
        display: 'flex',
        margin: 'auto',
        width: '25%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 10
    },
    usernameText: {
        color: "#CE9CE8",
        fontWeight: 'bold'
    },
    descriptionText: {
        fontSize: 8
    },
    childAgeHeaderText: {
        color: "#CE9CE8",
        fontSize: 11,
        fontWeight: 'bold'
    },
    profileButton: {
        borderRadius: 5,
        padding: 5,
        width: '100%',
        alignItems: 'center',
        margin: 2
    },
    profileButtonText: {
        color: 'white',
        fontSize: 10
    }
})

// Parent.propTypes = {
//     index: PropTypes.number,
//     username: PropTypes.string,
// };

export default SearchResult;


// key={index} 
// index={index}  
// username={result._source.username}
// description={result._source.description}
// distance={result.sort[0]}
// imageUrl={result._source.profile_image_url}
// childrenAges={result._source.birthdates} />