import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Grid from 'react-native-grid-component';
import HomeScreen_film from './HomeScreen_film';
import HomeScreen_kuliner from './HomeScreen_kuliner';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Traveloka',
    headerStyle: {
      backgroundColor: '#2b9fdc',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: null
  };

  data_product = [
    {
      key: 1,
      nama: "Tiket Pesawat",
      color: "#2b9fdc",
      icon: "plane"
    },
    {
      key: 2,
      nama: "Hotel",
      color: "#2980b9",
      icon: "building"
    },
    {
      key: 3,
      nama: "Tiket Pesawat & Hotel",
      color: "#8e44ad",
      icon: "building"
    },
    {
      key: 4,
      nama: "Aktivitas & Rekreasi",
      color: "#2ecc71",
      icon: "ticket"
    },
    {
      key: 5,
      nama: "Kuliner",
      color: "#e67e22",
      icon: "cutlery"
    },
    {
      key: 6,
      nama: "Tiket Kereta Api",
      color: "#f1c40f",
      icon: "train"
    },
    {
      key: 7,
      nama: "Tiket Bus & Travel",
      color: "#27ae60",
      icon: "bus"
    },
    {
      key: 8,
      nama: "Transportasi Bandara",
      color: "#1abc9c",
      icon: "plane"
    },
    {
      key: 9,
      nama: "Rental Mobil",
      color: "#16a085",
      icon: "car"
    },
    {
      key: 10,
      nama: "Semua Produk",
      color: "#ccc",
      icon: "th"
    }
  ]

  promo = [
    {
      key: 1,
      text: "Diskon Up 50%",
      color: "#3498db",
    },
    {
      key: 2,
      text: "Kupon Diskon 100rb",
      color: "#3498db",
    },
    {
      key: 3,
      text: "Kupon Diskon Pesawat 1jt",
      color: "#3498db",
    },
    {
      key: 4,
      text: "Nikmati Liburan Gratis",
      color: "#3498db",
    }
  ]

    _renderItem = (data, i) => (
      <View key={this.data_product[i].key} style={{ backgroundColor: data, width: '20%', height: 100, alignItems: 'center'}}>
        <View style={{borderRadius: 100, backgroundColor: this.data_product[i].color, height: 50, width: 50, alignItems: 'center', justifyContent: 'center'}}>
          <Icon
            size={25}
            reverse
            name={this.data_product[i].icon}
            color='#fff'
          />
        </View> 
        <Text style={{fontSize: 10, marginTop: 5}}>{this.data_product[i].nama}</Text>
      </View>
    )


  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ flex: 9}}>
        <ScrollView style={{height: '100%'}}> 
          <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ccc' }}>
            <View style={{flex: 1, padding: 5}}>
              <Image 
                style={{borderRadius: 100, width: 50, height: 50}}
                source={{uri: 'https://png2.kisspng.com/20180615/acp/kisspng-computer-icons-user-login-swiggy-5b242906b59ed4.4170042515290964547439.png'}}>
              </Image>
            </View>
            <View style={{margin: 12,flex: 7}}>
              <Text stye={{ fontSize: 20}}>Admin</Text>
              <Text style={{fontWeight: 'bold', fontSize: 10}}>0 Points</Text>
            </View>
          </View>
          <View style={{ flex: 8, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>  
              <View style={{alignItems: 'center', backgroundColor: '#fff', height: 210, width: '100%', paddingTop: 10}}>
                <Grid
                  style={{flex:1}}
                  renderItem={this._renderItem}
                  data={this.data_product.map((row)=> ('"'+row+'",'))}
                  itemsPerRow={this.data_product.length}
                />
              </View>
            <View style={{ flex: 8, width: '100%',height: 150}}>
                <View style={{paddingLeft: 20, flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>Promo Saat Ini</Text>
                  </View>
                  <View style={{flex: 1}}>
                        <Icon
                          name='chevron-right'
                          color='#2b9fdc'
                          size={17}
                        />
                  </View>
                </View>
                <ScrollView horizontal= {true}>
                  {this.promo.map((row)=>(
                    <View key={row.key}>
                    <Card containerStyle={{backgroundColor: row.color, borderWidth: 0, justifyContent: 'center', borderRadius: 5, height: 90}}>
                      <Text style={{color: '#fff',padding: 10, alignItems: 'center',fontSize: 15, fontWeight: 'bold'}}>
                        {row.text}
                      </Text>
                    </Card>
                    </View>
                  ))}
                </ScrollView>
            </View>



            <View style={{ flex: 8, width: '100%'}}>
                <View style={{paddingLeft: 15, flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 10}}>
                    <Text style={{ fontSize: 17}}>Rekomendasi dari Traveloka</Text>
                  </View>
                  <View style={{flex: 1}}>
                        <Icon
                          name='chevron-right'
                          color='#2b9fdc'
                          size={17}
                        />
                  </View>
                </View>

                <View>
                  <View style={{paddingLeft: 15, paddingTop: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>Pilihan Film Terbaik</Text>
                    <Text style={{fontSize: 10, color: '#aaa'}}>Film-film untuk ditonton bersama orang tercinta</Text>
                  </View>
                  <ScrollView horizontal={true}>
                    <HomeScreen_film />
                  </ScrollView>
                </View>

                <View>
                  <View style={{paddingLeft: 15, paddingTop: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>Mau Makan di Mana?</Text>
                    <Text style={{fontSize: 10, color: '#aaa'}}>Temukan berbagai restoran pilihan di kota anda</Text>
                  </View>
                  <ScrollView horizontal={true}>
                    <HomeScreen_kuliner />
                  </ScrollView>
                </View>
            </View>
            <View>
              <Text style={{color: '#999', margin: 10}}>Nantikan cerita-cerita menarik selanjutnya</Text>
            </View>
          </View>
        </ScrollView>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection: 'row', borderWidth: 1, borderColor: '#ccc'  }}>
          
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity 
              style={{ alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
            >
            <Icon name='home' color='#3b5998' size={25}/>
            <Text style={{color: '#3b5998', fontSize: 10}}>Awal</Text>
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
            <Icon name='user' color='#999' size={25}/>
            <Text style={{color: '#999', fontSize: 10}}>Akun Saya</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default HomeScreen;