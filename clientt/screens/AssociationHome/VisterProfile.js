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
import { associations } from "../../Axios";

import axios from "axios";
import { useNavigation } from "@react-navigation/native";

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

const VisterProfile = ({ route }) => {
  const [id, setid] = useState("");
  const idd = route.params.idd;
  const [data, setdata] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclose();

  useEffect(() => {
    axios
      .get(`${associations}/${idd}`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                  source={{ uri: data.image }}
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
                <Heading>{data.name}</Heading>
                <Heading style={{ color: "#525252", fontSize: 20 }}>
                  <MaterialCommunityIcons
                    name="email-receive-outline"
                    size={24}
                    color="#525252"
                  />
                  {data.email}
                </Heading>
                <Text style={{ fontSize: 16 }}>{data.description}</Text>
              </Stack>
            </Stack>
          </HStack>
         
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

export default VisterProfile;
