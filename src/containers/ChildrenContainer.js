import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { Actions as RouteActions } from 'react-native-router-flux';
import { Scene, Router, TabBar, Icon, Tabs } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as ActionCreators from '../actions/actions';
import ChildProfileComponent from '../components/ChildProfileComponent';
import ChildTab from '../components/ChildTab';

let loading = true;

class ChildrenContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.Actions.getChildMetadataCategories();
    }  

    changeActiveChild = (index) => {
       this.props.Actions.changeActiveChild(this.props.children.children[index], index);
    }

    updateValue = (value, propertyName, index) => {
        console.log('UPDATE VALUE', value);
        this.props.Actions.updateChildValue(value, propertyName, index);
    };

    updateMetadata = (metadata, childIndex) => {
        metadata.child = this.props.children.children[this.props.children.activeChildIndex].childId;
        this.props.Actions.updateChildMetadata(metadata, childIndex);
    }
    
    render() {
       
        let {profile, children} = this.props;

        console.log('Props in Children Contianer', children);
            return(
                <View style={styles.container}>
                    {/* <Text>Children Container</Text> */}
                        <View style={styles.listContainer}>
                            <FlatList
                                data={children.children}
                                keyExtractor={(item, index) => index}
                                horizontal={true}
                                refreshing={true}
                                renderItem={ ({item, index}) => 
                                   <ChildTab 
                                        activeId={children.activeChild.childId}
                                        child={item}
                                        changeChild={this.changeActiveChild}
                                        index={index}
                                        numOfChildren={children.children.length}
                                   />
                                }
                            />
                        </View>
                    <ChildProfileComponent 
                        child={children.children[children.activeChildIndex]}
                        childIndex={children.activeChildIndex}
                        updateValue={this.updateValue}
                        metadataCategories={children.metadataCategories}
                        updateMetadata={this.updateMetadata}
                    />
                </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        marginTop: 15
    },
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 0.2
    }
});

function mapStateToProps(state) {
    return { 
        profile: state.auth,
        children: state.children
     };
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(ActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenContainer);