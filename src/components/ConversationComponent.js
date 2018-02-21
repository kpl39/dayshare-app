import React, { Component } from 'react';
import {Text, View, StyleSheet, FlatList, Image, TextInput, PixelRatio, KeyboardAvoidingView, Keyboard, Button } from 'react-native';
import { MKButton, MKTextField } from 'react-native-material-kit';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/FontAwesome';

import Message from './MessageComponent';




class ConversationComponent extends Component {
    constructor(props) {
        super(props);
    }



   componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
   }

   _keyboardDidShow = () => {
    this.props.changeKeyboardVisibility(true);

  }

  _keyboardDidHide = () => {
    this.props.changeKeyboardVisibility(false);
  }

//   sendNewMessage = (message) => {
//     console.log('new message', message);
//   }

    render() {
        console.log('convo compoennt rendered')
        return (
                <View style={styles.conversationContainer}>
                    <View style={styles.conversationHeader}>
                        <View style={styles.buttonContainer}>
                            <MKButton onPress={this.props.openDrawer} style={styles.menuButton}>
                                <Icon style={styles.menuIcon} name="bars" />
                                <Text style={styles.buttonText}>Contacts</Text>
                            </MKButton>
                        </View>
                        <View style={styles.conversationTitle}>
                            <Text style={styles.secondary}>{this.props.currentContact.username}</Text>
                        </View>
                        <View style={styles.avatar}>
                            <Image source={{uri: this.props.currentContact.profileImageUrl}} style={{width: 50, height: 50}} />
                        </View>
                    </View>
                    <View style={this.props.keyboardVisible ? styles.conversationBodyKBA : styles.conversationBody}>
                        <FlatList 
                                data={this.props.currentConversation}
                                keyExtractor={(item, index) => index}
                                renderItem={ ({item, index}) => <Message
                                                            key={index} 
                                                            index={index}  
                                                            userId={27}
                                                            senderId={item.senderId}
                                                            recipientId={item.recipientId} 
                                                            messageText={item.messageText}
                                                            dateTime={item.dateTime} /> } />
                    </View>
                    <View style={styles.textInputContainer}>
                            <TextInput
                                    value={this.props.messageInProgress}
                                    placeholder="New Message"
                                    style={styles.textInput}
                                    onChangeText={(text) => {this.props.updateNewMessage(text)} }>
                            </TextInput>
                            <MKButton style={styles.submitButton} onPress={this.props.sendNewMessage}>
                                <Icon style={styles.submitIcon} name="arrow-circle-up"/> 
                            </MKButton>
                    </View>
                </View>
        );
    }
};

const styles = StyleSheet.create({
    conversationContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    conversationHeader: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        height: '13%',
        marginBottom: 10,
        // backgroundColor: '#e4e4e4'
    },
    conversationBody: {
        height: '77%'
    },
    conversationBodyKBA: {
        height: '38%'
    },
    buttonContainer: {
        width: '15%',
        paddingLeft: 5,
    },
    conversationTitle: {
        display: 'flex',
        flexDirection: 'column',
        width: '69%',
        alignItems: 'center',
        paddingTop: 7
    },
    avatar: {
        width: '15%'
    },
    secondary: {
        color: '#5508a5',
        fontSize: 30,
        fontWeight: 'bold'
    },
    menuButton: {
        backgroundColor: '#CE9CE8',
        alignItems: 'center',
        borderRadius: 5,
        paddingTop: 5,
        paddingBottom: 5,
        width: '100%'
    },
    menuIcon: {
        fontSize: 30,
        color: 'white'
    },
    buttonText: {
        fontSize: 8,
        color: 'white'
    },
    textInputContainer: {
        display: 'flex',
        backgroundColor: '#CE9CE8',
        height: 44,
        // borderTopColor: '#7e7e7e',
        borderBottomColor: '#b5b5b5',
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        flexDirection: 'row',
      },
      textInput: {
        backgroundColor: '#FFFFFF',
        height: 28,
        borderRadius: 5,
        paddingTop: 4.5,
        paddingBottom: 4.5,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 7.5,
        marginLeft: 8,
        marginRight: 5,
        fontSize: 15,
        flex: 1,
        width: '89%'
      },
      submitButton: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center'
      }, 
      submitIcon: {
          fontSize: 24,
          color: 'white'
      }
})


export default ConversationComponent;

