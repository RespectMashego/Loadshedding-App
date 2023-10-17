import { Entypo } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


export default function TabLayout() {
  return (
    <Tabs >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={35} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "My Schedule",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="collections-bookmark"
              size={35}
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  );
}
