import { Colors } from "@/constants/Colors";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Classes() {
  return (
    <ScrollView style={style.container}>
      <Text>Oi</Text>
    </ScrollView>
  )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
  },
})
