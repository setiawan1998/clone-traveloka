import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { Button, ListItem  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopBarNav from 'top-bar-nav';


const Notifikasi  = (index) => (
	<View style={{flex: 1, alignItems: 'center', backgroundColor: '#e6eaed', padding: 10}}>
		<Image
			style={{width: '100%', height: 200, resizeMode: 'cover', marginTop: 100}}
			source={require('./images_inbox/1.png')}/>
		<Text style={{fontSize: 15, marginTop: 10}}>Belum Ada Notifikasi</Text>
		<Text style={{fontSize: 12, marginTop: 10, alignItems: 'center', color: '#999'}}>Semua notifikasi yang kami kirim akan muncul disini</Text>
		<Text style={{fontSize: 12, alignItems: 'center', color: '#999'}}>supaya anda bisa mengeceknyadengan mudah</Text>
		<Text style={{fontSize: 12, alignItems: 'center', color: '#999'}}>kapanpun dan dimanapun</Text>
	</View>
);
const Pesan  = (index) => (
	<View style={{flex: 1, alignItems: 'center', backgroundColor: '#e6eaed', padding: 10}}>
		<Image
			style={{width: '100%', height: 200, resizeMode: 'cover', marginTop: 100}}
			source={require('./images_inbox/1.png')}/>
		<Text style={{fontSize: 15, marginTop: 10}}>Perlu bantuan terkait pesanan anda?</Text>
		<View style={{flexDirection: 'row'}}>
			<View style={{flex: 1, padding: 10}}>
				<View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
					<TouchableOpacity style={{width: 100,backgroundColor: '#fff', padding: 10, borderRadius: 5}}>
						<Text style={{color: '#2b9fdc', alignItems: 'center', fontWeight: 'bold'}}>Kirim Pesan</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{flex: 1, padding: 10}}>
				<View style={{width: 100}}>
					<TouchableOpacity style={{backgroundColor: '#2b9fdc', padding: 10, borderRadius: 5}}>
						<Text style={{color: '#fff', alignItems: 'center', fontWeight: 'bold'}}>Pelajari FAQ</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	</View>
);

const ROUTES = {
	Notifikasi,
	Pesan
};

const ROUTESTACK = [
	{ element: <Text style={{color: '#2b9fdc'}}>NOTIFIKASI</Text>, title: 'Notifikasi' },
	{ element: <Text style={{color: '#2b9fdc'}}>PESAN</Text>, title: 'Pesan' }
];

export default class inboxScreen extends Component{
	static navigationOptions = {
		title: "Inbox",
		headerTintColor: '#fff',
		titleStyle: {
			fontWeight: 'bold'
		},
		headerStyle: {
			backgroundColor: '#2b9fdc'
		},
	    headerLeft: null
	}

	render(){
		return (
		<View style={{flex: 1, flexDirection: 'column'}}>
			<View style={{flex: 9}}>
				<TopBarNav
					routeStack = { ROUTESTACK }
					renderScene = {(route, i) => {
						let Component = ROUTES[route.title];
						return <Component index={i}/>
					}}
					headerStyle = {styles.headerStyle}
					labelStyle = {styles.labelStyle}
					underlineStyle = {styles.underlineStyle}
					sidePadding={0}
					inactiveOpacity={0.5}
					fadeLabels={true}
				/>
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
            <Icon name='bookmark' color='#999' size={25}/>
            <Text style={{color: '#999', fontSize: 10}}>Simpan</Text>
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
            <Icon name='envelope' color='#3b5998' size={25}/>
            <Text style={{color: '#3b5998', fontSize: 10}}>Inbox</Text>
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


const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#fff',
        paddingTop: 15
    },
    labelStyle: {
        fontSize: 12,
        fontWeight: '500',
        color: '#fff',
    },
    underlineStyle: {
    	marginTop: 10,
        height: 2.0,
        backgroundColor: '#2b9fdc',
        width: '100%'
    }
});