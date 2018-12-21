import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Container, Header, Tabs, Tab} from 'native-base';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

export default class App extends React.Component {
  render() {
    return (
      
      <Container color="red">
      <Header hasTabs />
      <Tabs>
        <Tab heading="Tab1">
          <Tab1 />
        </Tab>
        <Tab heading="Tab2">
          <Tab2 />
        </Tab>
        <Tab heading="Tab3">
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>

    );
  }
}
