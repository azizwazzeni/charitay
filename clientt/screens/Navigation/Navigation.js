import React from 'react'
import { Text, View,  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninScreen from '../SigninScreen/SigninScreen';
import SignupScreen from '../SignupScreen/SignupScreen';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import ConfirmePassword from '../ConfirmePassword/CofirmePassword';
import AssociationSignupScreen from '../AssociationSignupScreen/AssociationSignupScreen.js';
import NeedanhelpSignupScreen from '../Need an help SignupScreen copy/NeedanhelpSignupScreen';
import Virfy from '../Virfy';

const Stack = createNativeStackNavigator();

 const  Navigation = ()=>  {

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>

<Stack.Screen name='Signin' component={SigninScreen}/>
<Stack.Screen name='SignUp' component={SignupScreen}/>
<Stack.Screen name='ForgetPassword' component={ForgetPassword}/>
<Stack.Screen name='ConfirmePassword' component={ConfirmePassword}/>
<Stack.Screen name='Virfy' component={Virfy}/>
<Stack.Screen name='Association' component={AssociationSignupScreen}/>
<Stack.Screen name="NeedHelp" component={NeedanhelpSignupScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  
}

export default Navigation