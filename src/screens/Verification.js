import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

const Forget = ({ navigation }) => {
  const [value, setValue] = useState('');

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
        <Text style={{ fontSize: 30 }}>Verification Code</Text>
        <Text style={{ fontSize: 12, marginLeft: 10, marginTop: 20 }}>
          4 Digit Code Has Been Sent To
        </Text>
        <Text style={{ fontSize: 12, marginLeft: 10 }}>
          +123-456-7890
        </Text>

        <View style={styles.codeFieldContainer}>
          <CodeField
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        
        <TouchableOpacity
          style={styles.sendCodeButton}
          onPress={() => navigation.navigate('Reset')}
        >
          <Text style={{ fontSize: 20, color: 'black' }}>Send Code</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ForgetPassword')}
          style={styles.forgetPasswordContainer}
        >
          <Text style={styles.forgetPasswordText}>
            Forget Password?
          </Text>
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
  codeFieldContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  codeFieldRoot: {
    width: 240,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    margin: 5,
  },
  focusCell: {
    borderColor: '#000',
  },
  forgetPasswordContainer: {
    marginTop: 10,
    alignSelf: 'flex-end',
    padding: 5,
    marginBottom: 10,
  },
  forgetPasswordText: {
    color: '#9F2CBF',
  },
  bottomView: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 20,
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
    width: 250, 
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

export default Forget;
