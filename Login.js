

import React from 'react'
import { View, Text } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';



export default class Login extends React.Component {
    render() {
        return (

            <Form>
                <Item fixedLabel>
                    <Label>Username</Label>
                    <Input />
                </Item>
                <Item fixedLabel last>
                    <Label>Password</Label>
                    <Input />
                </Item>
                <Button onPress={this.props.loginFunction}
                >
                    <Text>Login</Text>
                </Button>
            </Form>

        );
    }
}
