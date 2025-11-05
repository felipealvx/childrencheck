import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: "center",
  },
  radioGroup: { 
    flexWrap: "wrap",
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#9794a0ff",
    fontSize: 12,
    marginBottom: 10,
  },
  radioOption: { 
    height: 60,
    width: 60,
    marginRight: 10,
  },
  radioSelected: { 
  },
  image: {
    borderRadius: 30,
    height: "100%",
    width: "100%",
    borderWidth: 1,
    borderColor: "#b5b1c4ff"
  },
  imageSelected: {
    borderWidth: 4,
    borderColor: Colors.text,
  },
  label: {
    backgroundColor: "red",
    color: "black",
    fontSize: 70,
  }
});