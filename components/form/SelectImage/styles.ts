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
  },
  subtitle: {
    color: "#9794a0ff",
    fontSize: 12,
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
    borderColor: "#b5b1c4ff"
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