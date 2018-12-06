import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { Button, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SimpanScreen_save extends Component{
	data = [
		{
			key: 1,
			image: require('./images_simpan/1.jpg'),
			nama: 'Wiz Hotel',
			rating: '8',
			location: 'Pekalongan, Central Java',
			price: 200000
		},
		{
			key: 2,
			image: require('./images_simpan/2.jpg'),
			nama: 'Candi Borobudur',
			rating: '10',
			location: 'Magelang, Jawa Tengah',
			price: 50000
		},
		{
			key: 3,
			image: require('./images_simpan/3.jpg'),
			nama: 'Pantai Nusa 2',
			rating: '10',
			location: 'Nusa2, Bali',
			price: 200000
		},
		{
			key: 4,
			image: require('./images_simpan/4.jpg'),
			nama: 'Hutan Pinus Bogor',
			rating: '8',
			location: 'Antah berantah, Bogor',
			price: 100000
		},
		{
			key: 5,
			image: require('./images_simpan/5.jpg'),
			nama: 'Curug Bajing',
			rating: '9',
			location: 'Petungkriyono, Pekalongan',
			price: 20000
		},
		{
			key: 6,
			image: require('./images_simpan/6.jpg'),
			nama: 'Telaga Sidringo',
			rating: '10',
			location: 'Blado, Batang, Jawa Tengah',
			price: 20000
		}
	]

	arr_data = [];
	render(){
		this.data.map((row)=>(
			this.arr_data.push(
				<View 
					key={row.key} 
					style={{flexDirection: 'row', width: '100%', marginTop: 10, shadowColor: '#ccc', elevation: 3, padding: 10, backgroundColor: '#fff', borderRadius: 2}}
				>
					<View style={{flex: 1}}>
						<Image
							source={row.image}
							style={{width: 50, height: 50, borderRadius: 5}}
						/>
					</View>
					<View style={{flex: 3}}>
						<Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 5}}>{row.nama}</Text>
						<Text style={{fontSize: 10, color: '#555', marginTop: 5}}>Rating {row.rating}/10</Text>
						<Text style={{fontSize: 11, color: '#555', marginTop: 5}}>Lokasi {row.location}</Text>
						<Text style={{fontSize: 13, marginTop: 5, color: '#f90'}}>Rp. {row.price} <Text style={{fontSize: 10, color: '#555'}}>/Pax</Text></Text>
					</View>
					<View style={{flex: 1, alignItems: 'center'}}>
						<Icon
							name='bookmark'
							size={30}
							color='#3b5998'
						/>
					</View>
				</View>
			)
		))
		return( this.arr_data )
	}
}