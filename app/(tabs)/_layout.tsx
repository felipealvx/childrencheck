import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 16,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: () => <FontAwesome6 name="children" size={24} color={Colors.primary} />
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: "Turmas",
          tabBarIcon: ( ) => <MaterialIcons name="class" size={24} color={Colors.primary} />
        }}
      />
    </Tabs>
  );
}
