import { Button, HStack } from "native-base";
import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import colors from "./colors";
import { shadow, sizes, spacing } from "./theme";
import { useNavigation } from "@react-navigation/native"; 

const CARD_WIDTH = 180;
const CARD_HEIGTH = 210;

const EventsList = (props) => {
  //   console.log("🚀 ~ file: EventsList.js:13 ~ EventsList ~ props:", props);
  // const data=[...props.data,...props.data]
  const navigation=useNavigation()
  console.log(props.data.length);
  return (
    <HStack flexWrap={1}>
      {props.data.filter((e,i)=> i<4).map((item, index) => (
        <TouchableOpacity onPress={() =>
          navigation.navigate("EventDetails", {
            idd: item.id,
            associationId:item.associationId
          })} style={styles.cardContainer} key={index}>
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
      ))}
    </HStack>
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
    marginVertical: 4,
    fontSize: sizes.body,
    fontWeight: "bold",
    color: colors.primary,
  },

  description: {
    fontSize: sizes.body,
    color: colors.light,
  },
});

export default EventsList;
