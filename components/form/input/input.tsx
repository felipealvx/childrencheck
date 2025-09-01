import { Colors } from "@/constants/Colors";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Controller } from "react-hook-form";
import { Feather } from "@expo/vector-icons";

type Props = {
  icon: keyof typeof Feather.glyphMap;
};

export default function Input({ icon }: Props) {
  return (
    <Controller
      render={() => (
        <View>
          <Text></Text>
          <TextInput />
          <Feather name={icon} size={24} color="black" />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {
    fontWeight: "bold",
  },
  inputText: {
    backgroundColor: "#e1e1e1",
    borderRadius: 5,
    marginTop: 5,
    width: "100%",
    height: 50,
  },
});
