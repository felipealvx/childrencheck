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
    gap: 8
  },
  radioOption: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginRight: 20, 
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
  labelInput: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  }
});