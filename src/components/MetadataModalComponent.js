import React, { PropTypes, Component } from 'react';
import {Text, View, TextInput, SectionList, StyleSheet, Picker, Button, TouchableOpacity } from 'react-native';
import { MKButton, MKColor, MKTextField } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/FontAwesome';


class MetadataModalComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoriesListVisible: false,
            // selectedCategoryName: this.props.categories[0].name,
            selectedCategory: this.props.metadata.metadataCategory || this.props.categories[0],
            categories: this.props.categories,
            name: this.props.metadata.name || '',
            description: this.props.metadata.description || ''
        }
    }

    toggleCategoriesList() {
        this.setState({categoriesListVisible: !this.state.categoriesListVisible});
    }

    onSubmit() {
        const pkg = {
            metadataCategory: this.state.selectedCategory,
            name: this.state.name,
            description: this.state.description
        }
        this.props.closeModal(pkg);
    }

    onCancel() {
        this.props.closeModal(null);
    }

    render() {
        const categories = this.props.categories.map((category, index) => {
            return <Picker.Item key={index} value={category} label={category.name} />
        })

        return (
            <View style={styles.container}>
                
                <Text style={styles.labelText}>Category</Text>
                <TouchableOpacity
                    style={styles.categoryButton}
                    onPress={() => this.toggleCategoriesList()} >
                    <View style={styles.buttonView}>
                        <Text style={styles.categoryButtonText}>{this.state.selectedCategory.name}</Text>
                        <Icon style={styles.buttonIcon} name="caret-down"/>
                    </View>
                </TouchableOpacity>
                { this.state.categoriesListVisible ? <Picker
                                                        selectedValue={this.state.selectedCategoryName}
                                                        onValueChange={(category, index) => {
                                                            // this.setState({selectedCategoryName: category});
                                                            this.setState({selectedCategory: this.state.categories[index]});
                                                            this.toggleCategoriesList();
                                                            }
                                                        } >
                                                           {categories}
                                                        {/* <Picker.Item key={1} value="Dog" label="dog" /> */}
                                                    </Picker>
                                                    : null
                }
                <MKTextField
                    style={styles.textInput}
                    labelColor="#CE9CE8"
                    highlightColor="#CE9CE8"
                    placeholder={this.state.selectedCategory.nameFieldTitle}
                    floatingLabelEnabled={true}
                    type="text"
                    value={this.state.name}
                    onTextChange={ (value) => {this.setState({name: value})} }
                />
                <MKTextField
                    style={styles.textInput}
                    labelColor="#CE9CE8"
                    highlightColor="#CE9CE8"
                    placeholder={this.state.selectedCategory.descFieldTitle}
                    floatingLabelEnabled={true}
                    type="text"
                    value={this.state.description}
                    onTextChange={ (value) => {this.setState({description: value})} }
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.cancelButton}>
                        <Button
                            style={styles.button}
                            onPress={() => this.onCancel()} 
                            title="Cancel">
                        </Button>
                    </View>
                    <View style={styles.submitButton}>
                        <Button
                            style={styles.button}
                            onPress={() => this.onSubmit()} 
                            title="Submit">
                        </Button>
                    </View>
                </View>
                
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    categoryButton: {
        backgroundColor: '#CE9CE8',
        padding: 7,
        borderRadius: 7,
        marginBottom: 25,
    },
    buttonView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    categoryButtonText: {
        fontSize: 20,
        color: 'white'
    },
    labelText: {
        fontSize: 18,
        color: '#797e83',
        marginBottom: 10
    },
    textInput: {
        marginBottom: 10
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        width: '100%'
    },
    cancelButton: {
        width: '49%'
    },
    submitButton: {
        width: '49%'
    },
    buttonIcon: {
        marginLeft: 'auto',
        marginRight: 5,
        fontSize: 20,
        color: 'white'
    }
})

export default MetadataModalComponent;