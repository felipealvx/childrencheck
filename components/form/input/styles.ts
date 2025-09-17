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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    justifyContent: "space-between",
    paddingHorizontal: 8,
    backgroundColor: Colors.background
  },
  input: {
    flex: 1
  },
  errorMessage: {
    color: Colors.danger,
    fontSize: 12,
    marginTop: 4,
  }
})