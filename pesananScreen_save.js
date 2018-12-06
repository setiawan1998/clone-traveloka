import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { Button, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PesananScreen_save extends Component{
	data = [
		{
			key: 1,
			pemesan: 'Setiawan',
			tanggal: '2018-11-1',
			no_pesanan: '2018111001',
			jenis_pemb: 'BCA Klikpay',
			status_pemb: 'Lunas',
			dari: 'Pekalongan',
			tujuan: 'Jakarta',
			maskapai: 'Garuda'
		},
		{
			key: 2,
			pemesan: 'Setiawan',
			tanggal: '2017-11-1',
			no_pesanan: '2017111001',
			jenis_pemb: 'Transfer',
			status_pemb: 'Lunas',
			dari: 'Pekalongan',
			tujuan: 'Manado',
			maskapai: 'Lion Air'
		},
		{
			key: 3,
			pemesan: 'Setiawan',
			tanggal: '2018-10-1',
			no_pesanan: '2018101001',
			jenis_pemb: 'Debit/Credit Card',
			status_pemb: 'Lunas',
			dari: 'Semarang',
			tujuan: 'Pekalongan',
			maskapai: 'Sriwijaya'
		},
	]

	arr_data = [];
	render(){
		this.data.map((row)=>(
			this.arr_data.push(
				<View 
					key={row.key} 
					style={{flexDirection: 'column', width: '100%', marginTop: 10, shadowColor: '#ccc', elevation: 3, backgroundColor: '#fff', borderRadius: 2}}
				>
					<View style={{flex: 1,flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ccc'}}>
						<View style={{flex:2, padding: 15}}>
							<Text>{row.dari} -> {row.tujuan}</Text>
							<View style={{fontSize: 10, color: '#999', marginTop: 5, flexDirection: 'row'}}>
								<View style={{flex: 1}}>
									<Text style={{fontSize: 13}}>Status Pesanan :</Text> 
								</View>
								<View style={{flex: 1, justifyContent: 'center'}}>
									<TouchableOpacity 
										style={{width: 60,alignItems: 'center', alignItems: 'center', padding: 2, backgroundColor: '#27ae60', borderRadius: 10}}>
										<Text style={{color: '#fff', fontSize: 10}}>{row.status_pemb}</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
						<View style={{flex:1, padding: 15, justifyContent: 'flex-end'}}>
							<Text style={{fontSize: 10, color: '#999'}}>No Pesanan: {row.no_pesanan}</Text>
						</View>
					</View>
					<View style={{flex: 1,flexDirection: 'row'}}>
						<View style={{flex:1, padding: 15, alignItems: 'center'}}>
							<Text>{row.maskapai}</Text>
						</View>
						<View style={{flex:2, padding: 15}}>
							<Text style={{fontSize: 10, color: '#999'}}>Pergi:</Text>
							<Text style={{fontSize: 12, color: '#999'}}>{row.tanggal}</Text>
						</View>
						<View style={{flex:1, padding: 15,flexDirection: 'row', justifyContent: 'flex-end'}}>
							<TouchableOpacity 
								style={{width: 60, height: 30, backgroundColor: '#2b9fdc', alignItems: 'center', justifyContent: 'center'}}
							>
								<Text style={{color: '#fff'}}>Detail</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
		)))
		return ( this.arr_data );
	}
}

// <View style={{flex: 2}}>
// 						<Text>{row.tanggal}</Text>
// 						<Text>{row.dari} - {row.tujuan}</Text>
// 					</View>
// 					<View style={{flex: 3}}>
// 						<Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 5}}>{row.pemesan}</Text>
// 						<Text style={{fontSize: 10, color: '#555', marginTop: 5}}>{row.no_pesanan}</Text>
// 						<Text style={{fontSize: 11, color: '#555', marginTop: 5}}>Pembayaran {row.jenis_pemb}</Text>
// 					</View>
// 					<View style={{flex: 1, justifyContent: 'center'}}>
// 						<Text style={{fontSize: 10}}>Lihat Detail</Text>
// 					</View>