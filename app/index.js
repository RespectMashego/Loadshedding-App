import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Image, TextInput } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";
import StagesItem from "../components/StagesItem";
import { LinearGradient } from "expo-linear-gradient";

const LoadAreas = [
  "Mankweng",
  "Polokwane",
  // Add more load areas here
];

export default function TabOneScreen() {
  const [seeMore, setShowMore] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;

  const handleSeeMore = () => {
    setShowMore(true);
    Animated.timing(translateY, {
      toValue: -Dimensions.get("window").height * 0.6, // Adjust this value based on your needs
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
            fontSize: 30,
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
          <TextInput style={{ flex: 1 }} placeholder="Search Areas" />
          <TouchableOpacity>
            <Octicons name="search" size={30} color="black" />
          </TouchableOpacity>
        </View>
        {/* <LinearGradient
          colors={["#FF5A5F", "#FF9A8B"]}
          start={[0, 0]}
          end={[1, 1]}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 18,
            marginLeft: 8,
            backgroundColor: colors.primary.blue,
          }}
        >
          <Ionicons name="add-outline" size={30} color="white" />
          <Text style={{ fontSize: 16,color:"white" }}>Add area</Text>
        </LinearGradient> */}
      </View>
      {/* <View style={{ marginVertical: 18 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {LoadAreas.map((area, index) => (
            <TouchableOpacity key={index} style={styles.loadArea}>
              <Text style={styles.loadAreaText}>{area}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View> */}

      <View>
        <View
          style={{
            backgroundColor: colors.primary.lightgrey,
            borderRadius: 20,
            padding: 10,
            marginTop:30
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
            No load shedding at the moment. Stage 2 starts at 16:00.
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
            Sun 15 October: Due to continued stable performance, no load
            shedding on Sunday. The pattern of no load shedding during the day
            followed by Stage 2 in the evening will continue starting Monday.
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
              style={styles.slideDownButton}
            >
              <Feather name="x" size={24} color="white" />{/* Change color to white */}
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
  loadArea: {
    marginTop: 10,
    paddingHorizontal: 6,
    paddingVertical: 3,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary.blue,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 10,
    height: 40,
  },
  loadAreaText: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.primary.blue,
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
    flex:1
  },
  slideDownButton: {
    backgroundColor: colors.primary.blue,
    padding: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  
});
