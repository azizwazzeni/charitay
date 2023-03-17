import { Button, HStack, VStack, Input,Center,IconButton,AntDesign } from "native-base";
import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import colors from "./colors";
import { shadow, sizes, spacing } from "./theme";
import { useNavigation } from "@react-navigation/native";
import { event, associations } from "../../clientt/Axios";
import axios from "axios";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { EvilIcons } from '@expo/vector-icons'; 

const CARD_WIDTH = 175;
const CARD_HEIGTH = 220;

const AllEvents = () => {
  const [search, settSearch] = useState("");
  const [data, setData] = useState([]);
const [searchedData,setSearchedData]=useState([])
console.log(searchedData,"ff");
const sea=(text)=>{
  let s=data.filter(e=>e.title.includes(text))
  setSearchedData(s)
  console.log({s,text});
}
const handleChange = text => {
  sea(text)
  settSearch(text)};

  useEffect(() => {
    axios
      .get(`${event}`)
      .then((response) => {
        setData(response.data);
        setSearchedData(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  console.log(search,'jjjjjj');
  const navigation = useNavigation();
  return (
    <ScrollView>
      <VStack w="100%" space={7} alignSelf="center">
    
        <Input
        onChangeText={handleChange}
          placeholder="Search People & Places"
          width="90%"
          borderRadius="120"
          py="4"
          px="5"
          fontSize="20"
         left={-21}
         margin={10}
         
        
        />
        
  <EvilIcons name="search" size={30}  color="black" style={{top:-110,left:340}} />
      </VStack>
      <HStack flexWrap={1}>
        {searchedData.map((item, index) => (
          <ScrollView>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EventDetails", {
                idd: item.id,
                associationId: item.associationId,
              })
            }
            style={styles.cardContainer}
            key={index}
          >
            <View style={styles.container}>
              <View key={item.id} style={[styles.card, shadow.light]}>
                <View style={styles.imageBox}>
                  <Image source={{ uri: item.picture }} style={styles.image} />
                </View>
                <View style={styles.footer}>
                  <View style={styles.titleBox}>
                    <Text style={styles.title}>{item.title.slice(0,19)}...</Text>
                    {/* <Text style={styles.description}>{item.description}</Text> */}
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          </ScrollView>
        ))}
      </HStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: spacing.l,
    marginBottom: spacing.l,
  },

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGTH,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },

  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGTH - 60,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    overflow: "hidden",
  },

  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGTH - 60,
    resizeMode: "cover",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
    
  },
  titleBox: {
    flex: 1,
    
  },
  title: {
    marginVertical: 2,
    fontSize: sizes.body,
    fontWeight: "bold",
    color: colors.primary,
    
  },

  description: {
    fontSize: sizes.body,
    color: colors.light,
  },
});

export default AllEvents;
