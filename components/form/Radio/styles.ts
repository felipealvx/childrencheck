import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: { 
    fontSize: 12, 
    marginBottom: 8,
    color: "gray"
  },
  radioGroup: { 
    flexDirection: "column",
    gap: 8,
  },
  radioOption: { 
    flexDirection: "row", 
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#b8b8b8ff",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#e7e7e7ff",
  },
  selected: {
    backgroundColor: "#67e06dff",
    color: "#fff",
  },
  textSelected: {
    color: "#1f2719ff",
    fontWeight: "bold",
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.text,
    marginRight: 8,
  },
  radioSelected: { 
    backgroundColor: Colors.text, 
  },
  labelInput: {
    fontSize: 16,
    paddingVertical: 5,
    paddingRight: 20,
  },
  titleLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  }
});