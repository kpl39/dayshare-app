import React, { PropTypes, Component } from 'react';
import {Text, View, ScrollView, StyleSheet, DatePickerIOS, TouchableOpacity, Modal, Button, FlatList, Dimensions } from 'react-native';
import { MKButton, MKColor, MKTextField } from 'react-native-material-kit';
import DatePickerComponent from './DatePickerComponent';
import ChildBirthDateComponent from '../components/ChildBirthDateComponent';
import MetadataModalComponent from '../components/MetadataModalComponent';
import MetadataListItem from '../components/MetadataListItem';

class ChildProfileComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dateVisible: false,
            modalVisible: false,
            currentMetadata: {},
            modalStatus: 'new',
            selectedMetaIndex: 0
        };
    }

    newMetaModal() {
        this.setState({modalVisible: true, modalStatus: 'new', selectedMetaIndex: -1})
    }


    closeModal(pkg) {
        this.setState({modalVisible: false });

        if (pkg) {
            pkg.metadataId = this.state.currentMetadata.childMetadataId;
            pkg.index = this.state.selectedMetaIndex;
            if (this.state.modalStatus === 'edit') {
                pkg.modalStatus = 'edit';
                console.log("Close Modal pkg", pkg);
                this.props.updateMetadata(pkg, this.props.childIndex);
            } else {
                pkg.modalStatus = 'new';
                console.log("Close Modal pkg", pkg);
                this.props.updateMetadata(pkg, this.props.childIndex);
            }
        } else {
            console.log('metadata cancelled');
        }
    }

    editMetaModal = (index) => {
        this.setState({
            currentMetadata: this.props.child.childMetadata[index],
            modalVisible: true,
            modalStatus: 'edit',
            selectedMetaIndex: index
        })
    }

    render() {
        console.log('SCREEN HEIGHT', Dimensions.get('window').height);

        const child = this.props.child;

        if (child) {
            let bday;
            if (typeof child.birthDate === 'string') {
                bday = new Date(child.birthDate);
                bday.setDate(bday.getDate() + 1);
            } else {
                bday = child.birthDate;
            };

            return (
                <View style={styles.container}>
                    <ScrollView style={styles.scollContainer}>
                        {/* <Text>{child.firstName}</Text> */}
                        <MKTextField
                            style={styles.textInput}
                            labelColor="#CE9CE8"
                            highlightColor="#CE9CE8"
                            placeholder="First Name"
                            floatingLabelEnabled={true}
                            type="text"
                            value={child.firstName}
                            onTextChange={ (value) => {this.props.updateValue(value, 'firstName', this.props.childIndex)} }
                        />
                        <MKTextField
                            style={styles.textInput}
                            labelColor="#CE9CE8"
                            highlightColor="#CE9CE8"
                            placeholder="Last Name"
                            floatingLabelEnabled={true}
                            type="text"
                            value={child.lastName}
                            onTextChange={ (value) => {this.props.updateValue(value, 'lastName', this.props.childIndex)} }
                        />

                        <TouchableOpacity 
                            onPress={() => this.setState({dateVisible: !this.state.dateVisible})}
                            style={styles.dateButton}>
                        <ChildBirthDateComponent date={bday} />
                        </TouchableOpacity>
                        { this.state.dateVisible ? <DatePickerIOS
                                                        mode="date"
                                                        date={bday}
                                                        onDateChange={(date) => this.props.updateValue(date, 'birthDate', this.props.childIndex) }/> 
                                                 : null
                        }

                        <FlatList
                            data={child.childMetadata}
                            keyExtractor={(item, index) => index}
                            refreshing={true}
                            renderItem={ ({item, index}) => 
                               <MetadataListItem
                                    category={item.metadataCategory.name}
                                    name={item.name}
                                    description={item.description}
                                    index={index}
                                    editMeta={this.editMetaModal}
                               />
                            } />
                        
                    </ScrollView>
                    <Modal
                        visible={this.state.modalVisible}
                        animationType={'slide'}
                        onRequestClose={() => this.closeModal()} >
                        <MetadataModalComponent 
                            metadata={this.state.currentMetadata}
                            categories={this.props.metadataCategories} 
                            closeModal={(pkg) => {this.closeModal(pkg) }} />
                    </Modal>
                    <Button
                        style={styles.addInfoButton}
                        onPress={() => this.newMetaModal()} 
                        title="Add Information">
                    </Button>
                </View>
            );
        } else {
            return null;
        }
    }

};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
    },
    scollContainer: {
        height: Dimensions.get('window').height * 0.65
    },
    textInput: {
        marginBottom: 10
    },
    dateButton: {
        backgroundColor: '#CE9CE8',
        padding: 7,
        borderRadius: 7,
        marginBottom: 25,
    },
    addInfoButton: {
        marginTop: 'auto'
    }
});

export default ChildProfileComponent;