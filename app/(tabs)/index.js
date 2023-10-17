import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Image, TextInput } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import StagesItem from "../../components/StagesItem";

export default function TabOneScreen() {
  const [seeMore, setShowMore] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;

  const handleSeeMore = () => {
    setShowMore(true);
    Animated.timing(translateY, {
      toValue: -400, // Adjust this value based on your needs
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleSlideDown = () => {
    setShowMore(false);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text
          style={{
            fontSize: 25,
            color: colors.primary.blue,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          Mzansi Power
        </Text>
        <Image
          resizeMode="contain"
          style={{
            height: 60,
            width: 60,
          }}
          source={{
            uri: "https://media.istockphoto.com/id/1252349612/vector/electric-line-flat-vector-icon.jpg?s=612x612&w=0&k=20&c=auEoRazYcn2RSgEOFgn1606OWdjLHymRYWx7XueeJRg=",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <SimpleLineIcons name="location-pin" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: 20,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginLeft: 5,
          }}
        >
          <TextInput style={{}} placeholder="Search Areas" />
          <TouchableOpacity>
            <Octicons name="search" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              marginTop: 20,
            }}
          >
            Mankweng
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              marginTop: 20,
              color: "#4fa9f7",
            }}
          >
            ,Polokwane
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: colors.primary.lightgrey,
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "red",
              fontFamily: fonts.medium,
            }}
          >
            Power next off: 21:00 - 23:30
          </Text>
          <Text
            style={{
              fontFamily: fonts.medium,
              color: "#038320",
              marginVertical: 10,
            }}
          >
            No loadshedding at the moment. Stage 2 starts 16:00.
          </Text>
          <Text
            style={{
              color: "black",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
              }}
            >
              Update:
            </Text>
            Sun 15 October: Due to continued stable performance, no loadshedding
            on Sunday. The pattern of no loadshedding during the day followed by
            Stage 2 in the evening will continue starting Monday
          </Text>
          <View></View>
        </View>
      </View>
      <View style={styles.scheduleHeader}>
        <Text style={styles.scheduleTitle}>Mankweng Schedule</Text>
        <TouchableOpacity onPress={handleSeeMore}>
          <Text>See more</Text>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[styles.scheduleContainer, { transform: [{ translateY }] }]}
      >
        {seeMore && (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
             onPress={handleSlideDown}
              style={{
                justifyContent: "flex-end",
              }}
            >
              <Feather name="x" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}

        <ScrollView style={{ marginTop: 0 }}>
          <StagesItem isCurrentOutage={true} />
          {/* <StagesItem /> */}
          {seeMore && (
            <>
              <StagesItem />
              <StagesItem />
              <StagesItem />
              <StagesItem />
              <StagesItem />
              <StagesItem />
            </>
          )}
        </ScrollView>

      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  headerContainer: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  scheduleHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scheduleTitle: {
    fontFamily: fonts.medium,
    color: "#000",
    marginVertical: 25,
  },
  scheduleContainer: {
    backgroundColor: colors.primary.lightgrey,
    borderRadius: 20,
    padding: 10,
  },
  slideDownButton: {
    backgroundColor: colors.primary.blue,
    padding: 10,
    alignItems: "center",
  },
});
