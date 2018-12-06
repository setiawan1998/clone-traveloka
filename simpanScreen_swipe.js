import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

class SimpanScreen extends Component {
  static navigationOptions = {
    title: 'Simpan',
    headerStyle: {
      backgroundColor: '#2b9fdc',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ flex: 5}}>
          	<Swiper showsButtons>
			  <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
				<View style={{width: 200, height: 200, alignItems: 'center'}}>
				  	<Image
				  		style={{width: '100%', height: '100%'}}
				  		source={require('./images_simpan/1.jpg')}
				  	/>
				  	<Text style={{color: '#555', fontSize: 15, marginTop: 10}}>Hello</Text>
				</View>
			  </View>
			</Swiper>
        </View>
        <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        	<Button
        		buttonStyle={{
        			backgroundColor: '#2980b9',
        			height: 55,
        			width: 200,
        			borderRadius: 5
        		}}
        		title="Tambahkan item Baru"
        	/>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection: 'row', borderWidth: 1, borderColor: '#ccc'  }}>
          
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity 
              style={{ alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
            >
            <Icon name='home' color='#999' size={25}/>
            <Text style={{color: '#999'}}>Awal</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity 
              style={{ alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('SimpanScreen')}
            >
            <Icon name='bookmark' color='#2b9fdc' size={25}/>
            <Text style={{color: '#2b9fdc'}}>Simpan</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity 
              style={{ alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('PesananScreen')}
            >
            <Icon name='book' color='#999' size={25}/>
            <Text style={{color: '#999'}}>Pesanan</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity 
              style={{ alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('InboxScreen')}
            >
            <Icon name='envelope' color='#999' size={25}/>
            <Text style={{color: '#999'}}>Inbox</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity 
              style={{ alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('AccountScreen')}
            >
            <Icon name='user' color='#999' size={25}/>
            <Text style={{color: '#999'}}>Akun Saya</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default SimpanScreen;