import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MKButton, MKColor } from 'react-native-material-kit';

import SearchResultsContainer from '../containers/SearchResultsContainer';


class SearchResultsScene extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }

    backToSearch = () => {
        console.log('back to search')
        Actions.pop();
    }
    
    render() {

        return(
            <View>
                <SearchResultsContainer />
            </View>
        )
    }

}


export default SearchResultsScene