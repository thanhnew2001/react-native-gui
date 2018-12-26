import React from 'react';
import { View, Text } from 'react-native'


export default class MovieItem extends React.Component {
    render() {
        return (

            <View style={{padding:10}}>
                <Text>{this.props.movie.title}||{this.props.movie.releaseYear}</Text>
            </View>

        );
    }
}
