import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
  container: {
    padding: 16,
  },
  congratulations: {
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#c5c5cfff'
  },
  congratulationsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  congratulationsUser: {
    fontSize: 34,
    color: Colors.deepBlue,
    marginTop: 4,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: Colors.text,
  }
})