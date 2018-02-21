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

import SockJS from 'sockjs-client';
import { MKButton } from 'react-native-material-kit';

import Drawer from 'react-native-drawer'

import ContactsComponent from '../components/ContactsComponent';
import ConversationComponent from '../components/ConversationComponent';

class MessagingContainer extends Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        console.log('PROPS PASSED TO MESSAGE', this.props);

        // this.props.Actions.connectSocket();
        // const url = 'ws://localhost:8080/gs-guide-websocket/websocket';

        
 
        //  console.log('CLIENT', this.client);
        //  const headers = {};
 
        //  this.client.connect({}, (res) => {
        //      console.log('res after connection', this.client);
        //  })
 
    }

    componentDidUpdate() {
        const { messages, auth } = this.props;

        let sockets = this.props.auth.profile.sockets;
        let recipientId;
        let senderId = this.props.auth.profile.parentId;
        
        if (messages.socketConnected && !messages.conversationLoaded) {
            console.log('Socket Connected, conversation NOT loaded', messages.client.subscriptions);
            if (sockets.length > 0) {
                sockets[0].parents.forEach((parent) => {
                    if (parent.parentId !== senderId) {
                        recipientId = parent.parentId;
                        console.log('Recipient Id', recipientId);
                    }
                })
                let socketId = sockets[0].socketId;
                console.log('SOCKET ID ', socketId);
                this.getConversation(senderId, recipientId, socketId);
            }
            
        } else if (messages.socketConnected && messages.conversationLoaded && Object.keys(messages.client.subscriptions).length < 1) {
            console.log('Scoket connected and CONVERSATION LOADED', messages.client.subscriptions);
            
            let socketId = sockets[0].socketId;
            console.log('socket ID', socketId);
            // this.props.Actions.subscribeToSocket(messages.client, socketId);
            // messages.client.subscribe('/topic/conversations/' + socketId, (message) => {
            //    this.onNewMessage(message);
            // // console.log('New Message', message);
            // })
            this.subscribeToSocket(socketId);
        } 

    }

    onContactClicked() {

    }
    
    onNewMessage(message) {
        let socketId = JSON.parse(message.body).socketId;
        console.log('ON MESSAGE', socketId, message);
        let messageText = JSON.parse(message.body);

        this.props.Actions.updateConversation(messageText, socketId);
    }

    getConversation(senderId, recipientId, socketId) {
        this.props.Actions.getConversationRequested();
        this.props.Actions.getConversation(senderId, recipientId, socketId);
    };

    subscribeToSocket = (socketId) => {
        console.log('Subscribe to Socket', this.props);
        this.props.messages.client.subscribe('/topic/conversations/' + socketId, (message) => {
            this.onNewMessage(message);
         // console.log('New Message', message);
        })
        console.log('Client after subscription', this.props.messages.client);
    }

    closeControlPanel = () => {
        console.log('Close Drawer');
        this._drawer.close()
    };
      openControlPanel = () => {
        console.log('Open Drawer');
        console.log('Days since 1970', 1515553759997 / 86400000);
        this._drawer.open()
    };

    changeUser = (contact) => {
        console.log('change contact', contact);
        this.props.Actions.updateCurrentContact(contact);
        if (!this.props.messages.conversations[contact.socketId]) {
            console.log('Getting conversation');
            this.subscribeToSocket(contact.socketId);
            this.getConversation(this.props.auth.profile.parentId, contact.parentId, contact.socketId);
        } else {
            console.log('Convo already Loaded');
        }
    }

    keyboardVisible = (boolean) => {
        this.props.Actions.updateKeyboardVisibility(boolean);
    }

    sendNewMessage = () => {
        let socketId = this.props.messages.currentContact.socketId
        let pkg = {
            senderId: this.props.auth.profile.parentId,
            recipientId: this.props.messages.currentContact.parentId,
            dateTime: new Date().toISOString(),
            messageText: this.props.messages.messageInProgress,
            unread: true,
            socketId: socketId
          };

          console.log('Send New Message', pkg);
        
        this.props.messages.client.send('/app/message/' + socketId, {}, JSON.stringify(pkg));


        // this.props.Actions.updateConversation(pkg, socketId);
        this.props.Actions.updateNewMessage('');
       
    }
 
    render() {
        let {messages} = this.props;

        console.log('Props on Render Messages', this.props);
        let currentConversation = messages.conversations[messages.currentContact.socketId];
        console.log('CURRENT CONVERSATION', currentConversation);
        return(
        // <View style = {styles.container}>
        //     <Text>Messaging Container</Text>
        //     <MKButton onPress={this.subscribeToSocket} style={styles.subscribeButton}>
        //         <Text>Subscribe to Socket</Text>
        //     </MKButton>
        // </View>

            <Drawer
                ref={(ref) => this._drawer = ref}
                type="static"
                content={<ContactsComponent 
                            closeDrawer={this.closeControlPanel}
                            changeUser={this.changeUser}
                            contacts={messages.contactList}
                            key />}
                openDrawerOffset={100}
                tapToClose={true}
                styles={drawerStyles}
                tweenHandler={Drawer.tweenPresets.parallax}
                >
                    <ConversationComponent openDrawer={this.openControlPanel} 
                                           currentConversation={currentConversation}
                                           currentContact={messages.currentContact}
                                           keyboardVisible={messages.keyboardVisible}
                                           changeKeyboardVisibility={this.keyboardVisible}
                                           updateNewMessage={this.props.Actions.updateNewMessage}
                                           sendNewMessage={this.sendNewMessage}
                                           messageInProgress={messages.messageInProgress}/>
            </Drawer>
        )
    }
     
  
}

    const drawerStyles = {
        drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3, backgroundColor: '#e4e4e4'},
        main: {paddingLeft: 3, backgroundColor: 'white'},
    }
     
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
      },
      subscribeButton: {
          backgroundColor: 'pink',
          padding: 5
      }
    });

function mapStateToProps(state) {
    return { 
        messages: state.messages,
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(ActionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagingContainer);