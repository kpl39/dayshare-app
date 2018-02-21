import React, { PropTypes } from 'react';
import {Text, View, FlatList } from 'react-native';

import { MKButton } from 'react-native-material-kit';
import Contact from './Contact';

const ContactsComponent = props => {

    console.log('PROPS IN CONTACTS COMPONENT', props);



    return (
        <View>
            <FlatList 
                    data={props.contacts}
                    keyExtractor={(item, index) => index}
                    renderItem={ ({item, index}) => <Contact
                                                key={index} 
                                                index={index}  
                                                // username={item.username}
                                                // parentId={item.parentId}
                                                // profileImage={item.profileImageUrl}
                                                contact={item}
                                                closeDrawer={props.closeDrawer}
                                                changeUser={props.changeUser}
                                                /> 
                                } 
            />
       
        </View>
    );
};


export default ContactsComponent;




