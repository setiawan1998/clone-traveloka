import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpanScreen_save from './SimpanScreen_save';

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
    headerLeft: null
  };


  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ flex: 9, alignItems: 'center',backgroundColor: '#f1f1f1'}}>
        	<ScrollView style={{width: '100%'}}>
        		<SimpanScreen_save />
        	</ScrollView>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection: 'row', borderWidth: 1, borderColor: '#ccc'  }}>
          
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity 
              style={{ alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
            >
            <Icon name='home' color='#999' size={25}/>
            <Text style={{color: '#999', fontSize: 10}}>Awal</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity 
              style={{ alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('SimpanScreen')}
            >
            <Icon name='bookmark' color='#3b5998' size={25}/>
            <Text style={{color: '#3b5998', fontSize: 10}}>Simpan</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity 
              style={{ alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('PesananScreen')}
            >
            <Icon name='book' color='#999' size={25}/>
            <Text style={{color: '#999', fontSize: 10}}>Pesanan</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity 
              style={{ alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('InboxScreen')}
            >
            <Icon name='envelope' color='#999' size={25}/>
            <Text style={{color: '#999', fontSize: 10}}>Inbox</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity 
              style={{ alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('AccountScreen')}
            >
            <Icon name='user' color='#999' size={25}/>
            <Text style={{color: '#999', fontSize: 10}}>Akun Saya</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default SimpanScreen;