import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';

const Welcome = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assest/images/signupback.png')}
        style={{height: '100%'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{justifyContent: 'space-between', height: 400}}>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <Text style={{fontSize: 50,color:"white"}}>Welcome To</Text>
              <Text style={{fontSize: 50, color: '#9BEDFF'}}>Obishanti</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 20, marginBottom: 10, }}>
                Time To Get Started
              </Text>
             
              
                <TouchableOpacity  style={{
                  backgroundColor: '#9BEDFF',
                  height: 50,
                  width: 300,
                  borderRadius: 10,
                  marginBottom: 10,
                }}onPress={() => navigation.navigate('Login')}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      padding: 15,
                    }}>
                    Get Started! Sign Up
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    alignSelf: 'center',
                    gap: 5,
                  }}>
                  <Text style={{color: 'white', fontSize: 15}}>
                    Already Have An Account{' '}
                  </Text>
                  <Text style={{color: '#9BEDFF', fontSize: 15}}>
                    Login Here{' '}
                  </Text>
               
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
