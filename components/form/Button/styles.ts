import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6
  },
  title: {
    fontWeight: "bold",
    color: Colors.background,
    fontSize: 20,
  }
})