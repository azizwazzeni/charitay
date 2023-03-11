import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
// import MapDs from "./Map1/MapDs";
// import MapVal from "./Map1/MapVal"
import { useState,useEffect } from "react";
// import Card from "./Map1/Cart";
// import SigninScreen from "./screens/SigninScreen/SigninScreen";
// import SignupScreen from "./screens/SignupScreen/SignupScreen";

// import ForgetPassword from "./screens/ForgetPassword/ForgetPassword";
// import Navigation from "./screens/Navigation/Navigation";
// import Onboarding from "./components/Onboarding"
import TabNavigator from "./components/Navigator/Navigator";
// import SigninScreen from "./screens/SigninScreen/SigninScreen";
// import SignupScreen from "./screens/SignupScreen/SignupScreen";
// import ForgetPassword from "./screens/ForgetPassword/ForgetPassword";
import Navigation from "./screens/Navigation/Navigation";
import { NativeBaseProvider} from "native-base";
// import Eventimage from "./components/Eventimage";


const App = () => {
  
  return (
              
<NativeBaseProvider>
    <SafeAreaView style={styles.root}>
    
      <Navigation/>
      {/* <TabNavigator/> */}
    {/* <MapDs/> */}
    {/* <MapVal/> */}
   </SafeAreaView></NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
export default App;
