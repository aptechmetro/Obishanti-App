import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Pageslid1 from '../screens/Pageslid1';
import Pageslid2 from '../screens/Pageslid2';
import Pageslid3 from '../screens/Pageslid3';

import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import SignUp from '../screens/SignUp';
import Register from '../screens/Register';
import Forget from '../screens/Forget';
import Verification from '../screens/Verification';
import Reset from '../screens/Reset';
import MyBottomtab from './Bottomtabs';




const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Pageslid1'>
        <Stack.Screen name='Pageslid1' component={Pageslid1} />
        <Stack.Screen name='Pageslid2' component={Pageslid2} />
        <Stack.Screen name='Pageslid3' component={Pageslid3} />
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Forget' component={Forget} />
        <Stack.Screen name='verification' component={Verification} />
        <Stack.Screen name='Reset' component={Reset} />
        <Stack.Screen name='BottomTabs' component={MyBottomtab} />





      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
