import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Pageslid1 = ({navigation}) => {
  return (
    <View>
      <ImageBackground source={require("../assest/images/background.png")} style={{ height: '100%' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: "white", fontSize: 40, marginTop: 80,padding:20  }}>
            A Heavenly Place
            For All Pets
          </Text>
          <Text style={{ color: "white", fontSize: 15, padding: 10, marginRight: 40 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          </Text>
        </View>
        <View>
          <Image
            style={{ resizeMode: 'contain', width: "100%", alignSelf: 'center', marginTop: 50 }}
            source={require("../assest/images/group1.png")}
          />
        </View>
        <TouchableOpacity style={{alignItems:'center',padding:4}}onPress={() => navigation.navigate('Pageslid2')}>
        <View style={{marginTop: 20,backgroundColor:"#9BEDFF",height:60,width:60,borderRadius:30}}>
          
            <AntDesign name="arrowright" color={"black"} size={40}style={{alignSelf:'center',padding:10}} />
          
         
        </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Pageslid1;
