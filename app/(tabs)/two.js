import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SavedAreas = () => {
  const data = [
    { id: 1, name: "Area 1" },
    { id: 2, name: "Area 2" },
    { id: 3, name: "Area 3" },
    // Add more saved areas here
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.areaItem}>
      <FontAwesome5 name="map-marker-alt" size={24} color="#FF5722" />
      <Text style={styles.areaName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Areas</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  areaItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    marginBottom: 10,
  },
  areaName: {
    marginLeft: 16,
    fontSize: 18,
  },
});

export default SavedAreas;
