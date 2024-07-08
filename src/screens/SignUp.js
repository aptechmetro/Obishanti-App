import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SignUp = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" color={'black'} size={30} />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 20, color: '#9F2CBF', marginLeft: 40 }}>
              My Petz
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: 'white' }}>My Petz</Text>
          </View>
        </View>
      </View>
      
      <View style={{gap:15,padding:20,}}>
       <Text style={{color:"black",alignSelf:'center',marginTop:40,fontSize:30}}>Sign Up For Free</Text>
      <TouchableOpacity
            style={{
              backgroundColor: '#9BEDFF',
              marginTop: 70,
              height: 50,
              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'row',
               marginTop:30,
              paddingHorizontal: 20,
            }}>
               <AntDesign name="apple1" color={'black'} size={30} />
           
            <View style={{alignItems: 'center', flexGrow: 1}}>
              <Text style={{color: 'black', alignSelf: 'center', right: 10}}>
                login with Apple
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
              style={{
                backgroundColor: '#9BEDFF',
              
                height: 50,
                borderRadius: 10,
                alignItems:'center',
                flexDirection:'row',
                paddingHorizontal:20,
                

              }}>
                <Image source={require("../assest/images/Google.png" )} style={{ height:50,width:30 }}/>
              
              <View style={{alignItems:'center',flexGrow:1,}}>
              <Text style={{color: 'black',alignSelf: 'center',right:10 }}>
                login with Google
              </Text>
              </View>
     
              
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#9BEDFF',
              
                height: 50,
                borderRadius: 10,
                alignItems:'center',
                flexDirection:'row',
                paddingHorizontal:20,
                

              }}>
              

              <Entypo name="facebook-with-circle" color={'black'} size={30} />

              <View style={{alignItems:'center',flexGrow:1,}}>
              <Text style={{color: 'black',alignSelf: 'center',right:10 }}>
                login with Facebook
              </Text>
              </View>
     
              
            </TouchableOpacity>
            </View>
            <View style={{padding:20}}>
            <TouchableOpacity
            style={{
              backgroundColor: '#4D1970',
              marginTop: 70,
              height: 50,
              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'row',
               marginTop:30,
              paddingHorizontal: 20,
              
            }}  onPress={() => navigation.navigate('Register')}>
              
               <Fontisto name="email" color={'white'} size={30} />
           
            <View style={{alignItems: 'center', flexGrow: 1}}
            >
                
              <Text style={{color: 'white', alignSelf: 'center', right: 10}}>
                login with Email
              </Text>
            </View> 
          </TouchableOpacity>

          </View>
          <Image source={require("../assest/images/lightdog.png" )} style={{ resizeMode:'contain',alignSelf:'center', height:200 ,}}/>

            </View>
    
  );
}

export default SignUp;
