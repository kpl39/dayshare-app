import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import { Actions as RouteActions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchResult from '../components/SearchResult';

import Parent from '../components/Parent';

import * as ActionCreators from '../actions/actions';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    selectProfile = (profile) => {
        console.log('profile selected', profile);
        this.props.Actions.getParentByParentId(profile.parentId);
        RouteActions.push('parentProfile', {title: profile.username});
    }

    render() {

        let  { searchResults }  = this.props.searchResults;
        console.log('Search Results', searchResults);
    
        return(
            <View style={styles.container}>
                <FlatList 
                    data={searchResults}
                    keyExtractor={(item, index) => index}
                    renderItem={ ({item, index}) => <SearchResult
                                                key={index} 
                                                index={index}  
                                                username={item._source.username}
                                                parentId={item._source.parent_id}
                                                description={item._source.description}
                                                distance={item.sort[0]}
                                                imageUrl={item._source.profile_image_url}
                                                selectProfile={this.selectProfile}
                                                childrenAges={item._source.birthdates} /> } />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    blue: {
        color: 'blue'
    }
});

function mapStateToProps(state) {
    return { searchResults: state.search };
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(ActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);


//org.reactjs.native.example.DayShare