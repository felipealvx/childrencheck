import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    gap: 6
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: "space-between",
    paddingHorizontal: 8,
    backgroundColor: Colors.background
  }
})