import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  label: { 
    fontSize: 12, 
    marginBottom: 8
  },
  radioGroup: { 
    flexDirection: "column", 
    gap: 8
  },
  radioOption: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginRight: 20 
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#333",
    marginRight: 8,
  },
  radioSelected: { 
    backgroundColor: "#333" 
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  }
});