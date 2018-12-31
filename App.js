import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Container, Header, Tabs, Tab, Button } from 'native-base';

import Tab2 from './Tab2';
import Tab3 from './Tab3';

import ListItem from './ListItem';
import MovieItem from './MovieItem';
import Login from './Login';
import Menu from './Menu'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLogined: false,
      showSword: false,
      contacts: [
        { name: 'David', phone: '029284242' },
        { name: 'Tom', phone: '34928382' }
      ],

      movies: [], //because I would get it from json restful server,
      sound: new Expo.Audio.Sound()

    }
  }

  async componentWillMount() {
    await this.state.sound.loadAsync(require('./assets/amb.mp3'));
  }
 
  async playSound() {

    // console.log(this.state.blocks)
    try {
      await this.state.sound.setPositionAsync(0);
      await this.state.sound.playAsync();
      // Your sound is playing!
    } catch (error) {
      console.log(error)
    }
  }
 

  loginFunction(){
    alert('Has been loged in')
    this.setState({isLogined: true})
  }

  add(movie){
    fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: movie.name ,
    releaseYear: movie.releaseYear,
  }),
});
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          movies: responseJson.movies,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  goFunction(){
    alert('Go function triggered')
  }

  slash(){
    this.setState({showSword: !this.state.showSword})
    this.playSound()
  }


  render() {
    return (

      <Container color="red">
        <Header hasTabs />
        <Tabs>
          <Tab heading="List of contacts">
            {this.state.contacts.map((c, i) =>
              <ListItem contact={c} key={i} />
            )}

            {this.state.movies.map((m, i) =>
              <MovieItem movie={m} key={i} />
            )}

            <Button onPress={() => {
              this.setState({ contacts: this.state.contacts.concat({ name: 'New contact', phone: 'new phone' }) })
            }}>
              <Text>Add</Text>
            </Button>
          </Tab>
          <Tab heading="Tab2">
            {!this.state.isLogined?
          <Login loginFunction={this.loginFunction.bind(this)}/>
              :
              <Text>This is a main page</Text>
            }
          </Tab>
          <Tab heading="Tab3">
            
            <Menu goFunction={this.goFunction.bind(this)} />

            <Button onPress={this.playSound.bind(this)}>
                <Text>Play music</Text>
              </Button>

          </Tab>

           <Tab heading="Fruit Ninja">
            <View>
            <Image style={{width:50, height:50}} source={require('./assets/fruit.png')} />

            {this.state.showSword? 
             <Image style={{width: 50, height: 50}} source={require('./assets/sword.png')} />
              :
              <View></View>
            }

               <Button onPress={this.slash.bind(this)}>
                <Text>Slash</Text>
              </Button>

            </View>
          </Tab>
        </Tabs>
      </Container>
    )
        
          
  }
}
