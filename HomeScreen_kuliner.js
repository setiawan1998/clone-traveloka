import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { Icon, Button, Card } from 'react-native-elements';

export default class HomeScreen_kuliner extends Component{
  rekomendasi = [
    {
      key: 1,
      title: 'Bebek Bakar pak opo',
      text: "Kreasi Lezat Bebek Bakar pak opo",
      image: require('./images_kuliner/1.jpg'),
    },
    {
      key: 2,
      title: 'Sushi Susanti',
      text: "Rasakan nikmatnya sushi khas jepang",
      image: require('./images_kuliner/2.jpg'),
    },
    {
      key: 3,
      title: 'Steak Pak ora',
      text: "Rasakan Lezatnya Steak Pak ora yang luar biasa lezatnya",
      image: require('./images_kuliner/3.jpg'),
    },
    {
      key: 4,
      title: 'Warteg Pak Jono',
      text: "Rasa bintang lima harga kaki lima",
      image: require('./images_kuliner/4.jpg'),
    }
  ]
  arr_rekomendasi = [];

  render(){
    this.rekomendasi.map((row)=>(
      this.arr_rekomendasi.push(
        <Card key={row.key} containerStyle={{backgroundColor: '#fff', borderWidth: 0, justifyContent: 'center', borderRadius: 5, width: 220}}>
          <Image style={{width: '100%', height: 120}} source={row.image}/>
          <Text style={{color: '#555',padding: 0, alignItems: 'center',fontSize: 15, fontWeight: 'bold'}}>{row.title}</Text>
          <Text style={{color: '#555',padding: 0, alignItems: 'center',fontSize: 10}}>{row.text}</Text>
        </Card>
    )));
    return( this.arr_rekomendasi );
  }
}