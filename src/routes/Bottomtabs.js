import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Social from '../screens/Social';
import Discover from '../screens/Discover';
import Create from '../Create';
import Reel from '../screens/Reel';
import Account from '../screens/Account';
import { Image } from 'react-native';




const Tab = createBottomTabNavigator();

export default function MyBottomtab() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#f7037c",
      tabBarLabelStyle: {
        fontSize: 16,
        paddingBottom: 5


      },
      tabBarStyle: { padding: 5, height: 70 },

    }}>
      <Tab.Screen name="Home" component={Social}

        options={
          {
            tabBarIcon: ({ focused }) => {
              return (
                <AntDesign name="home" color={focused ? "#e0517d" : "black"} size={30} />
              )
            },

          }
        } />
      <Tab.Screen name="Discover" component={Discover}
        options={
          {
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialIcons name="explore" color={focused ? "#e0517d" : "black"} size={30} />
              )
            },

          }
        }

      />



      <Tab.Screen name="Create" component={Create}
        options={
          {
            tabBarIcon: ({ focused }) => {
              return (
                <AntDesign name="plussquareo" color={focused ? "#e0517d" : "black"} size={25} />
              )
            },

          }
        }
      />
      

      <Tab.Screen name="Reel" component={Reel}
        options={
          {
            tabBarIcon: ({ focused }) => {
              return (
                <Image  source={require("../assest/images/reel.png" )}  style={{ height:30,width:30 }} color={focused ? "#e0517d" : "black" } />
              )
            },

          }
        }
      />
  <Tab.Screen name="Account" component={Account}
        options={
          {
            tabBarIcon: ({ focused }) => {
              return (
                <Image  source={require("../assest/images/Account.png" )}  style={{ height:30,width:30, borderRadius:30}} color={focused ? "#e0517d" : "black" } />
              )
            },

          }
        }
      />

    </Tab.Navigator>
  );
}