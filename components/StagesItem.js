import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";
import { FontAwesome } from "@expo/vector-icons";

const StagesItem = ({ isCurrentOutage }) => {
  return (
    <View style={[styles.container, isCurrentOutage && styles.currentOutage]}>
      <View style={styles.header}>
        <Text style={styles.dateText}>Monday, 16 October 2023</Text>
      </View>
      <View style={styles.stage}>
        {isCurrentOutage && (
          <View style={styles.stageBadge}>
            <FontAwesome name="exclamation-circle" size={18} color={colors.primary.red} />
          </View>
        )}
        <FontAwesome name="bolt" size={16} color={colors.primary.blue} />
        <Text style={styles.stageText}>Stage 2</Text>
      </View>
      <View style={styles.time}>
        <Text style={styles.timeText}>22:00 - 00:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  currentOutage: {
    borderColor: colors.primary.red,
  },
  header: {
    backgroundColor: colors.primary.blue,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
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
    paddingVertical: 8,
  },
  stageBadge: {
    backgroundColor: colors.primary.red,
    borderRadius: 50,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  stageText: {
    fontFamily: fonts.medium,
    fontSize: 16,
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
    color: colors.primary.blue,
  },
});

export default StagesItem;
