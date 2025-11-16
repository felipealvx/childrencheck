import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    
  },
  group: {
    
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#a1a3afff",
    borderRadius: 8,
    padding: 16,
    marginTop: 5,
    fontSize: 16,
    backgroundColor: "white"
  },
  errorMessage: {
    color: Colors.danger,
    fontSize: 14,
    marginTop: 4,
  }
})