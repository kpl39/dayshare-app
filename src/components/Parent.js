import React, { PropTypes } from 'react';
import {Text, View } from 'react-native';


const Parent = props => {
    return (
        <View>
            <Text>{props.username}</Text>
        </View>
    );
};

// Parent.propTypes = {
//     index: PropTypes.number,
//     username: PropTypes.string,
// };

export default Parent;