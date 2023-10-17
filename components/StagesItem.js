import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const StagesItem = ({ isCurrentOutage }) => {
  return (
    <LinearGradient
      colors={isCurrentOutage ? ["#FF5A5F", "#FF9A8B"] : ["#4E7AC7", "#74B4E0"]}
      start={[0, 0]}
      end={[1, 1]}
      style={[styles.container]}
    >
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.header}>
          <Text style={styles.dateText}>Monday, 16 October 2023</Text>
        </View>
        <View style={styles.stage}>
          <View style={styles.stageBadge}>
            <FontAwesome5 name="bolt" size={20} color="white" />
          </View>
          <Text style={styles.stageText}>Stage 2</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.timeText}>22:00 - 00:00</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginVertical: 10,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  header: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  dateText: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: "white",
  },
  stage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  stageBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  stageText: {
    fontFamily: fonts.medium,
    fontSize: 18,
    color: "white",
  },
  time: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    fontFamily: fonts.medium,
    fontSize: 18,
    color: "white",
  },
});

export default StagesItem;
