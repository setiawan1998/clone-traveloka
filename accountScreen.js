import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { Button, ListItem  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class AccountScreen extends Component {
	travelokaPlay = [
		{
			key: 1,
			jenis: "PayLater",
			ket: "Daftar Sekarang!",
			icon: "info"
		},
		{
			key: 2,
			jenis: "Kartu Saya",
			ket: "Belum Ada Kartu",
			icon: "info"
		},
		{
			key: 3,
			jenis: "Debit Instan",
			ket: "Belum Ada Kartu",
			icon: "info"
		},
	]
	travelokaPlay2 = [
		{
			key: 1,
			jenis: "Refund Saya",
			ket: "Atur refund Anda di satu tempat",
			icon: "info"
		},
		{
			key: 2,
			jenis: "Passenger Quick Pick",
			ket: "Isi detail penumpang sekarang, tinggal pilih penumpang kemudian",
			icon: "info"
		},
		{
			key: 3,
			jenis: "Tagihan Saya",
			ket: "Atur akun Tagihan & Isi ulang anda dengan mudah",
			icon: "info"
		},
		{
			key: 4,
			jenis: "Notifikasi Harga",
			ket: "Jadi yang pertama tahu saat harga tiket berubah",
			icon: "info"
		},
	]

	travelokaPlay3 = [
		{
			key: 1,
			jenis: "Pusat Bantuan",
			ket: "Temukan jawaban terbaik dari pertanyaan Anda",
			icon: "info"
		},
		{
			key: 2,
			jenis: "Password & Keamanan",
			ket: "Tingkatkan keamanan akun Anda",
			icon: "info"
		},
		{
			key: 3,
			jenis: "Pengaturan",
			ket: "Lihat dan atur preferensi akun Anda",
			icon: "info"
		}
	]

	travelokaPlay4 = [
		{
			key: 1,
			jenis: "Keluar",
		}
	]

	static navigationOptions= ({
		title: "My Account",
		headerStyle: {
			backgroundColor: "#2b9fdc"
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
    	headerLeft: null
	})
  render() {
    return (
      <View style={{ flex: 1 }}>
      	<View style={{flex: 8}}>
        <ScrollView style={{height: '100%'}}> 
        	<View style={{width: '100%', height: 200}}>      
	          <View style={{flex: 1, backgroundColor: '#2b9fdc', color: '#fff', justifyContent: 'center', alignItems: 'center'}}>
	          	<Image 
              		style={{borderRadius: 100, width: 100, height: 100}}
              		source={{uri: 'https://png2.kisspng.com/20180615/acp/kisspng-computer-icons-user-login-swiggy-5b242906b59ed4.4170042515290964547439.png'}}>
            	</Image>
				<Text style={{color: '#fff'}}>Admin</Text>
				<Text style={{color: '#fff'}}>Masuk Dengan Google</Text>
	          </View>
          	</View>
          	<View style={{width: '100%', backgroundColor: '#eee', alignItems: 'center'}}>
	          	<View style={{width: '97%', marginTop: -25}}>
	          		<TouchableOpacity
	          		style={{
	          			width: '100%',
	          			backgroundColor: '#fff',
	          			borderRadius: 5,
	          			padding: 15,
	          			flexDirection: "row",
					    shadowColor: '#333',
					    elevation: 3,
	          		}} 
	          		>
	          			<View style={{flex: 1}}>
	          				<Icon
	          					name='money'
	          					color='#555'
	          					size={17}
	          				/>
	          			</View>
	          			<View style={{flex: 8}}>
		          			<Text style={{color: '#555',fontSize: 15}}>0 Points</Text>
	          			</View>
	          			<View style={{flex: 1}}>
	          				<Icon
	          					name='chevron-right'
	          					color='#2b9fdc'
	          					size={17}
	          				/>
	          			</View>
	          		</TouchableOpacity>
	          	</View>
	          	<View style={{width: '97%', marginTop: 10}}>
	          		<TouchableOpacity
	          		style={{
	          			width: '100%',
	          			backgroundColor: '#fff',
	          			borderRadius: 5,
	          			padding: 15,
	          			flexDirection: "row",
					    shadowColor: '#333',
					    elevation: 3,
	          		}} 
	          		>
	          			<View style={{flex: 1}}>
	          				<Icon
	          					name='comments'
	          					color='#555'
	          					size={17}
	          				/>
	          			</View>
	          			<View style={{flex: 8}}>
		          			<Text style={{color: '#555',fontSize: 15}}>Review Saya</Text>
	          			</View>
	          			<View style={{flex: 1}}>
	          				<Icon
	          					name='chevron-right'
	          					color='#2b9fdc'
	          					size={17}
	          				/>
	          			</View>
	          		</TouchableOpacity>
	          	</View>

	          	<View style={{width: '97%', backgroundColor: '#fff', marginTop: 10, elevation: 3}}>
	          	<TouchableOpacity 
	          		style={{
	          			width: '100%',
	          			backgroundColor: '#fff',
	          			borderRadius: 5,
	          			padding: 10,
	          			borderBottomWidth: 1,
	          			borderColor: '#ccc',
	          			flexDirection: "row",
					    shadowColor: '#333',
	          		}}>
	          		<Text>travelokaPlay</Text>
	          	</TouchableOpacity>
	          		{this.travelokaPlay.map((row)=>(
	          			<ListItem
	          				leftIcon={{
	          					name: row.icon
	          				}}
	          				key={row.key}
					        title={
					        	<View style={{flex: 1, flexDirection: 'row'}}>
						        	<View style={{flex: 2}}>
						        		<Text>{row.jenis}</Text>
						        	</View>
						        	<View style={{flex: 1}}>
						        		<Text>{row.ket}</Text>
						        	</View>
					        	</View>
					        }
					      />
	          		))}
	          	</View>

	          	<View style={{width: '97%', backgroundColor: '#fff', marginTop: 10, elevation: 3}}>
	          		{this.travelokaPlay2.map((row)=>(
	          			<ListItem
	          				leftIcon={{
	          					name: row.icon
	          				}}
	          				key={row.key}
					        title={row.jenis}
					        subtitle={
					        	<Text style={{fontSize: 10, marginLeft: 10, color: '#aaa'}}>{row.ket}</Text>
					        }
					      />
	          		))}
	          	</View>

	          	<View style={{width: '97%', backgroundColor: '#fff', marginTop: 10, elevation: 3}}>
	          		{this.travelokaPlay3.map((row)=>(
	          			<ListItem
	          				leftIcon={{
	          					name: row.icon
	          				}}
	          				key={row.key}
					        title={row.jenis}
					        subtitle={
					        	<Text style={{fontSize: 10, marginLeft: 10, color: '#aaa'}}>{row.ket}</Text>
					        }
					      />
	          		))}
	          	</View>

	          	<View style={{width: '97%', backgroundColor: '#fff', marginTop: 10, elevation: 3}}>
	          		{this.travelokaPlay4.map((row)=>(
	          			<ListItem
	          				onPress={() => this.props.navigation.navigate('LoginScreen')}
	          				leftIcon={{
	          					name: 'chevron-right'
	          				}}
	          				key={row.key}
					        title={row.jenis}
					      />
	          		))}
	          	</View>
	          	<Text>{"\n"}</Text>
          	</View>
        </ScrollView>
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
            <Icon name='user' color='#3b5998' size={25}/>
            <Text style={{color: '#3b5998', fontSize: 10}}>Akun Saya</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default AccountScreen;