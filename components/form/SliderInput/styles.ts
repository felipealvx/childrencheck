import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center'
  },
  slider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  input: {
    width: '80%'
  },
})