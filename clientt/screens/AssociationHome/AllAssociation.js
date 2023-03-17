import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import MainHeader from "../../components/MainHeader";
import ScreenHeader from "../../components/ScreenHeader";
import { shadow, sizes, spacing } from "../../components/theme";
import colors from "../../components/colors";
import Icon from "../../components/Icon";
import FavoriteButton from "../../components/FavoriteButton";
import SectionHeader from "../../components/SectionHeader";
import { event, associations } from "../../Axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Box } from "native-base";

const CARD_WIDTH = sizes.width - 1;

const CARD_HEIGTH = 260;

const AllAssociation = () => {
  const [association, setAssociation] = useState([]);
  const [id, setid] = useState("");

  const navigation = useNavigation();

  const getuser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        setid(jsonValue.id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAssociation();
    getuser();
  }, []);

  const getAssociation = () => {
    axios
      .get(`${associations}`)
      .then((response) => {
        setAssociation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View styles={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <SafeAreaView>
            <ScrollView>
              {association.map((item) => (
                <TouchableOpacity
                  onPress={() => {
                    if (item.email === id) {
                      navigation.navigate("AssociationProfile", {});
                    } else {
                      navigation.navigate("VisterProfile", {
                        idd: item.email,
                      });
                    }
                  }}
                >
                  <View style={[styles.card, shadow.dark]} key={item.id}>
                    <View style={styles.imageBox}>
                      <Image
                        source={{ uri: item.image }}
                        style={{
                          width: 240,
                          height: 200,
                          borderRadius: 20,
                          resizeMode: "cover",
                        }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGTH,
    marginVertical: 19,
    left: 80,
    top: 10,
  },

  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGTH,
    borderRadius: sizes.radius,
    overflow: "hidden",
  },

  titleBox: {
    position: "absolute",
    top: CARD_HEIGTH - 80,
    left: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.white,
  },
});
const styless = StyleSheet.create({
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

export default AllAssociation;
