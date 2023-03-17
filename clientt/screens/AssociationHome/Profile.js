import { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Touchable,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { disable, volunter, associations } from "../../Axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { getAuth, deleteUser } from "firebase/auth";
import { authentication } from "../firebase";
import {
  Box,
  AspectRatio,
  Center,
  Stack,
  HStack,
  Heading,
  Button,
  AlertDialog,
  Icon,
  Flex,
  useDisclose,
  Actionsheet,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Events from "./Events";
import { Entypo } from "@expo/vector-icons";
import { signOut } from "firebase/auth";

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [user, setuser] = useState({});
  const [id, setid] = useState("");

  const fetchUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        const jsonValue = JSON.parse(value);

        setid(jsonValue.id);

        const userdata = await axios.get(`${associations}/${jsonValue.id}`);

        setuser(userdata.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const deletee = () => {
    axios
      .delete(`${associations}/${id}`)
      .then(() => {
        deletefromLocalStorage();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handeldelete = () => {
    const userr = authentication.currentUser;
    deleteUser(userr)
      .then((result) => {
        deletee();
        return true;
      })
      .then(() => {
        navigation.navigate("Signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deletefromLocalStorage = async () => {
    try {
      await AsyncStorage.removeItem("user");
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    signOut(authentication)
      .then(() => {
        deletefromLocalStorage();
      }).then(()=>{
        navigation.navigate("Signin")
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <HStack
            w="100%"
            maxW="450"
            borderWidth="1"
            space={1}
            rounded="md"
            borderColor="coolGray.400"
          >
            <Box maxW="100%" maxH="690">
              <AspectRatio w="100%" ratio={20 / 15}>
                <Image
                  resizeMode="contain"
                  source={{ uri: user.image }}
                  alt="image"
                />
              </AspectRatio>
            </Box>
          </HStack>

          <HStack
            w="100%"
            maxW="450"
            space={1}
            rounded="md"
            borderColor="coolGray.400"
          >
            <Stack p="3" space={7}>
              <Stack space={3}>
                <Heading>{user.name}</Heading>
                <Heading style={{ color: "#525252", fontSize: 20 }}>
                  <MaterialCommunityIcons
                    name="email-receive-outline"
                    size={24}
                    color="#525252"
                  />
                  {user.email}
                </Heading>
                <Text style={{ fontSize: 16 }}>{user.description}</Text>
              </Stack>
            </Stack>
          </HStack>
          <Button borderRadius={6} onPress={onOpen}>
            Details
          </Button>
          <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
            <Actionsheet.Content>
              <Actionsheet.Item onPress={()=>navigation.navigate("Event")}>Events</Actionsheet.Item>
              <Actionsheet.Item onPress={()=>navigation.navigate("AddEvent")}>Create an Events</Actionsheet.Item>
              <Actionsheet.Item onPress={()=>navigation.navigate("EditProfileView")}>Edit Profile</Actionsheet.Item>
              <Actionsheet.Item onPress={()=>handeldelete}>Delete Account</Actionsheet.Item>
              <Actionsheet.Item onPress={()=>{logout()}}>logOut</Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
export default Profile;
