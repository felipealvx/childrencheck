import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    
  },
  group: {
    
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#a1a3afff",
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },
  errorMessage: {
    color: Colors.danger,
    fontSize: 12,
    marginTop: 4,
  }
})