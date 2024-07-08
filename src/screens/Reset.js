import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Reset = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" color={'black'} size={30} />
          </TouchableOpacity>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: '#9F2CBF' }}>
              My Petz
            </Text>
          </View>
        </View>
      </View>

      <Text style={{ color: 'black', alignSelf: 'center', marginTop: 30, fontSize: 30 }}>Reset Password</Text>

      <View style={{ padding: 20 }}>
        <TextInput
          placeholder="New Password"
          placeholderTextColor="#707070"
          style={styles.input}
        />
        <TextInput
          placeholder="Confrim Password"
          placeholderTextColor="#707070"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <TouchableOpacity
          style={styles.sendCodeButton}
          onPress={() => navigation.navigate('BottomTabs')}
        >
          <Text style={{ fontSize: 20, color: 'black' }}>Reset & Go To Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomView}>
        <View style={{ flexDirection: 'row', gap: 1 }}>
          <TextInput
            placeholder="Text here"
            placeholderTextColor="#9C9C9C"
            style={styles.bottomInput}
          />
          <TouchableOpacity>
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
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: 30,
    backgroundColor: '#E9E9E9',
    color: 'black',
  },
  sendCodeButton: {
    height: 50,
    backgroundColor: '#9BEDFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, 
    width: '100%',
  },
  bottomView: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  bottomInput: {
    height: 50,
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    color: 'white',
    backgroundColor: '#565358',
  },
  sendIconContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#9F2CBF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Reset;
