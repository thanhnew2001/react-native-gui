

import React from 'react'
import { View, Text } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';



export default class Menu extends React.Component {
    render() {
        return (

            <Form>
               
                <Button onPress={this.props.goFunction}
                >
                    <Text>Go go go go </Text>
                </Button>
            </Form>

        );
    }
}
