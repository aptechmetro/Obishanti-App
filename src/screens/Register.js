import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Register = ({ navigation }) => {
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

      <View style={{  padding: 20 }}>
        <TextInput
          placeholder=" First Name"
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
        <View style={{ marginTop: 20 }}>
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#707070"
            style={{
              height: 50,
              borderRadius: 5,
              paddingHorizontal: 30,
              paddingLeft: 10,
              paddingRight: 40,
              color: 'white',
              backgroundColor: '#E9E9E9',
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#707070"
            style={{
              height: 50,
              borderRadius: 5,
              paddingHorizontal: 30,
              paddingLeft: 10,
              paddingRight: 40,
              color: 'white',
              backgroundColor: '#E9E9E9',
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#707070"
            style={{
              height: 50,
              borderRadius: 5,
              paddingHorizontal: 30,
              paddingLeft: 10,
              paddingRight: 40,
              color: 'white',
              backgroundColor: '#E9E9E9',
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            placeholder=" Confrim Password"
            placeholderTextColor="#707070"
            style={{
              height: 50,
              borderRadius: 5,
              paddingHorizontal: 30,
              paddingLeft: 10,
              paddingRight: 40,
              color: 'white',
              backgroundColor: '#E9E9E9',
            }}
          />
        </View>
      </View>
      <View style={{padding:20,}}>
      <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: '#9BEDFF',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}
            onPress={() => navigation.navigate('Forget')}>
            <Text style={{fontSize: 20, color: 'black'}}>Login</Text>
          </TouchableOpacity>
          </View>
          <Image source={require("../assest/images/Dogcat.png" )} style={{ resizeMode:'contain',alignSelf:'center',height:150}}/>

    </View>
  ); 
}

export default Register;