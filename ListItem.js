import React from 'react';
import { View, Text } from 'react-native'


export default class ListItem extends React.Component {
    render() {
        return (

            <View style={{padding:10}}>
                <Text>{this.props.contact.name}||{this.props.contact.phone}</Text>
            </View>

        );
    }
}
