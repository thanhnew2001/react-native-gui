import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      
      <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>

        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}>
          <View style={{height: 50, backgroundColor: 'steelblue'}}>
            <Text style={{fontSize: 20, padding: 5, left:10, textAlign: 'center'}}>Header</Text>
          </View>
        </View>

          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
         
          <View style={{height: 50, backgroundColor: 'powderblue'}}>
            <Text style={{fontSize: 20, padding: 5, left:10, textAlign: 'center'}}>Sign-in</Text>
          </View>
          <View style={{flex: 1, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={{fontSize: 20, padding: 5, left:10, textAlign: 'center'}}>Username</Text>
            <TextInput style={{fontSize: 20, padding: 5, left:10, textAlign: 'center'}}/>
          </View>

          <View style={{flex: 1, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={{fontSize: 20, padding: 5, left:10, textAlign: 'center'}}>Password</Text>
            <TextInput style={{fontSize: 20, padding: 5, left:10, textAlign: 'center'}}/>
          </View>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}>
          <View style={{height: 50, backgroundColor: 'steelblue'}}>
            <Text style={{fontSize: 20, padding: 5, left:10}}>Footer</Text>
          </View>
        </View>


      </View>

    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
