import { Text, TextInput, TextInputProps, View } from "react-native";
import { Controller, UseControllerProps } from "react-hook-form";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { Colors } from "@/constants/Colors";

type Props = {
  icon: keyof typeof Feather.glyphMap;
  formProps: UseControllerProps;
  inputProps: TextInputProps;
  title: String;
};

export default function Input({ icon, formProps, inputProps, title }: Props) {
  return (
    <Controller
      render={() => (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.inputContainer}>
            <TextInput {...inputProps} />
            <Feather name={icon} size={24} color={Colors.text} />
          </View>
        </View>
      )}
      {...formProps}
    />
  );
}
