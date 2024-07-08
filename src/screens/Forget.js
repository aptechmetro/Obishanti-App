import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Forget = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Text style={{ fontSize: 30 }}>Forgot Password</Text>
        <Text style={{ fontSize: 12, marginLeft: 10, marginTop: 20 }}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor
        </Text>

        <TextInput
          placeholder="Enter You Email"
          placeholderTextColor="#707070"
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.sendCodeButton}
          onPress={() => navigation.navigate('verification')}
        >
          <Text style={{ fontSize: 20, color: 'black' }}>Send Code</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <View style={{ flexDirection: 'row', gap: 1 }}>
          <TextInput
            placeholder="Text here"
            placeholderTextColor="#9C9C9C"
            style={styles.bottomInput}
          />
          <TouchableOpacity
            
          >
            <View style={styles.sendIconContainer}>
              <Ionicons
                name="send-sharp"
                color={'white'}
                size={25}
                style={{ alignSelf: 'center', padding: 10 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: 'black',
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    color: 'white',
    marginTop: 20,
    backgroundColor: '#E9E9E9',
  },
  sendCodeButton: {
    height: 50,
    backgroundColor: '#9BEDFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  bottomView: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bottomInput: {
    height: 50,
    borderColor: 'black',
    paddingHorizontal: 20,
    borderRadius: 30,
    color: 'white',
    backgroundColor: '#565358',
    width: 300,
  },
  sendIconContainer: {
    
    backgroundColor: '#9F2CBF',
    height: 45,
    width: 45,
    borderRadius: 30,
  },
});

export default Forget;
