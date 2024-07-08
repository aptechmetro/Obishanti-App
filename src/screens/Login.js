import {
  View,
  Text,
  TouchableOpacity,
  Input,
  Button,
  TextInput,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import React from 'react';
import SignUp from './Welcome';

const Login = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.goBack(SignUp)}>
            <AntDesign name="arrowleft" color={'black'} size={30} />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 20, color: '#9F2CBF', marginLeft: 40}}>
              My Petz
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'white'}}>My Petz</Text>
          </View>
        </View>

        <View style={{marginTop: 30, padding: 10}}>
          <TextInput
            placeholder="Username or Email"
            placeholderTextColor="#707070"
            style={{
              borderRadius: 5,
              marginTop: 20,
              paddingHorizontal: 30,
              width: '100%',
              paddingLeft: 10,
              paddingRight: 10,

              backgroundColor: '#E9E9E9',
            }}
          />
          <View style={{marginTop: 20}}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#707070"
              style={{
                height: 50,
                borderColor: 'black',

                borderRadius: 5,
                paddingHorizontal: 30,
                paddingLeft: 10,
                paddingRight: 40,
                color: 'white',
                backgroundColor: '#E9E9E9',
              }}
            />
          </View>
          <Text
            style={{color: '#9F2CBF', marginTop: 10, alignSelf: 'flex-end'}}>
            Forget Password?
          </Text>

          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: '#9BEDFF',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={{fontSize: 20, color: 'black'}}>Login</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            alignSelf: 'center',
          }}>
          <Text style={{color: '#707070', fontSize: 15}}>
            Don't Have Account?{' '}
          </Text>
          <Text style={{color: '#9F2CBF', fontSize: 15}}>Sign Up </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: '#4D1970',
          flex: 1,
          borderTopRightRadius: 60,
          borderTopLeftRadius: 60,
        }}>
        <View style={{padding: 20,gap:15}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#9BEDFF',
              marginTop: 70,
              height: 50,
              borderRadius: 20,
              alignItems: 'center',
              flexDirection: 'row',

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
                borderRadius: 20,
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
                borderRadius: 20,
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
      </View>
    </View>
  );
};

export default Login;
