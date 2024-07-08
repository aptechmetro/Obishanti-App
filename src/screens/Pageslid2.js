import { View, Text,ImageBackground,Image,TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

import React from 'react'

const Pageslid2 = ({navigation}) => {
  return (
    <View>
    <ImageBackground source={require("../assest/images/background.png")} style={{ height: '100%' }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: "white", fontSize: 40, marginTop: 80 }}>
        All You Need Is Love And A Dog</Text>
        <Text style={{ color: "white", fontSize: 15, padding: 20, marginRight: 15 }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        </Text>
      </View>
      <View>
        <Image
          style={{ resizeMode: 'contain', width: "100%", alignSelf: 'center', marginTop: 10,height:350

          }}
          source={require("../assest/images/dog.png")}
        /> 
      </View>
      <TouchableOpacity style={{alignItems:'center',padding:10}}onPress={() => navigation.navigate('Pageslid3')}>
      <View style={{marginTop: 20,backgroundColor:"#9BEDFF",height:60,width:60,borderRadius:30}}>
        
          <AntDesign name="arrowright" color={"black"} size={40}style={{alignSelf:'center',padding:10}} />
        
       
      </View>
      </TouchableOpacity>
    </ImageBackground>
  </View>
  )
}

export default Pageslid2