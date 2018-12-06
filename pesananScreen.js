import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { Button, ListItem  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import PesananScreen_save from './pesananScreen_save';

export default class PesananScreen extends Component{
	static navigationOptions = {
		title: 'Pesanan',
		headerStyle: {
			backgroundColor: '#2b9fdc'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		},
    headerLeft: null
	}
	render(){
		return(
      <View style={{ flex: 1 }}>
      	<View style={{flex: 9,backgroundColor: '#f1f1f1'}}>
      		<View style={{height:'100%'}}>
	        <ScrollView style={{height: '100%'}}> 
	        	<PesananScreen_save />
	        </ScrollView>
	        </View>
        </View>
		<View 
        	style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection: 'row', borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff'
        }}>
          
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
            <Icon name='bookmark' color='#999' size={25}/>
            <Text style={{color: '#999', fontSize: 10}}>Simpan</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity 
              style={{ alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('PesananScreen')}
            >
            <Icon name='book' color='#3b5998' size={25}/>
            <Text style={{color: '#3b5998', fontSize: 10}}>Pesanan</Text>
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
		)
	}
}