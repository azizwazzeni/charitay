import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "../SigninScreen/SigninScreen";
import SignupScreen from "../SignupScreen/SignupScreen";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import AssociationSignupScreen from "../AssociationSignupScreen/AssociationSignupScreen.js";
import NeedanhelpSignupScreen from "../Need an help SignupScreen copy/NeedanhelpSignupScreen";
import Virfy from "../Virfy";
import Onboarding from "../../components/Onboarding";
import Profile from "../AssociationHome/Profile";
import DHome from "../DisableHome/DHome";
import VHome from "../VolunteerHome/VHome";
import MapDs from "../../Map1/MapDs";
import MapVal from "../../Map1/MapVal";
import EditProfile from "../AssociationHome/EditProfile";
import AddEvent from "../AssociationHome/AddEvent";
import Events from "../AssociationHome/Events";
import TabNavigator from "../../components/Navigator/Navigator";
import AddEvents from "../../components/addEvents";
import Bar from "../AssociationHome/Bar";
import UpdateEvent from "../AssociationHome/UpdateEvent";
import EventDetails from "../AssociationHome/EventDetails";
import Eventimage from "../../components/Eventimage";
import AllEvents from "../../components/AllEvents"
import VisterProfile from "../AssociationHome/VisterProfile";
import AllAssociation from "../AssociationHome/AllAssociation";

const Stack = createNativeStackNavigator();
// const Nav = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="homepage" component={Onboarding} />
         <Stack.Screen name="Signin" component={SigninScreen} />
         <Stack.Screen name="AllAssociation" component={AllAssociation} />
         <Stack.Screen name="VisterProfile" component={VisterProfile} />
         <Stack.Screen name="tabNavigator" component={TabNavigator} />
         <Stack.Screen name="SignUp" component={SignupScreen} />
         <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
         <Stack.Screen name="Virfy" component={Virfy} />
         <Stack.Screen name="Association" component={AssociationSignupScreen} />
         <Stack.Screen name="NeedHelp" component={NeedanhelpSignupScreen} />
         <Stack.Screen name="VolunteerHome" component={VHome} />
         <Stack.Screen name="DisableHome" component={DHome} />
         <Stack.Screen name="MapDs" component={MapDs} />
         <Stack.Screen name="MapVal" component={MapVal} />
         <Stack.Screen name="Home" component={AddEvents} />
         <Stack.Screen name="EditProfileView" component={EditProfile} />
         <Stack.Screen name="AssociationProfile" component={Profile} />
         <Stack.Screen name="AddEvent" component={AddEvent} />
         <Stack.Screen name="Event" component={Events} />
         <Stack.Screen name="demo" component={Bar} />
         <Stack.Screen name="UpdateEvent" component={UpdateEvent} />
         <Stack.Screen name="EventDetails" component={Eventimage} />
         <Stack.Screen name="AllEvents" component={AllEvents} />
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
