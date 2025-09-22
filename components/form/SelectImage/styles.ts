import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  radioGroup: { 
    flexWrap: "wrap",
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  radioOption: { 
    height: 220,
    width: 150,
    marginRight: 10
  },
  radioSelected: { 
  },
  image: {
    borderRadius: 8,
    height: "100%",
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(181, 177, 196, 1)"
  },
  imageSelected: {
    borderWidth: 3,
    borderColor: Colors.primary,
  },
  label: {
    backgroundColor: "red",
    color: "black",
    fontSize: 70,
  }
});