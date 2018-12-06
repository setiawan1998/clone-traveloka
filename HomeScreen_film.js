import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { Icon, Button, Card } from 'react-native-elements';

export default class HomeScreen_film extends Component{
  rekomendasi = [
    {
      key: 1,
      title: 'Deadpool2',
      text: "Action, Comedy",
      image: require('./images_film/1.jpg'),
    },
    {
      key: 2,
      title: 'Logan',
      text: "Action, Adventure",
      image: require('./images_film/2.jpg'),
    },
    {
      key: 3,
      title: 'The Nun',
      text: "Horor",
      image: require('./images_film/3.jpg'),
    },
    {
      key: 4,
      title: 'Warkop DKI Reborn',
      text: "Comedy",
      image: require('./images_film/4.jpg'),
    }
  ]
  arr_rekomendasi = [];

  render(){
  	this.rekomendasi.map((row)=>( 
      this.arr_rekomendasi.push(
	    <Card key={row.key} containerStyle={{backgroundColor: '#fff', borderWidth: 0, justifyContent: 'center', borderRadius: 5, width: 150}}>
	        <Image style={{width: '100%', height: 100}} source={row.image}/>
	        <Text style={{color: '#555',padding: 0, alignItems: 'center',fontSize: 15, fontWeight: 'bold'}}>{row.title}</Text>
	        <Text style={{color: '#555',padding: 0, alignItems: 'center',fontSize: 10}}>{row.text}</Text>
	    </Card>
    )));
    return( this.arr_rekomendasi );
  }

}