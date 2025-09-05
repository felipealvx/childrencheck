import { Text, TextInput, TextInputProps, View } from "react-native";
import { Controller, UseControllerProps } from "react-hook-form";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Colors } from "@/constants/Colors";

const iconLibraries = {
  Feather,
  MaterialCommunityIcons,
  Ionicons,
};

type IconConfig = {
  iconLib: keyof typeof iconLibraries;
  name: string;
  size?: number;
  color?: string;
};

type Props = {
  // icon?: keyof typeof Feather.glyphMap;
  formProps: UseControllerProps;
  inputProps: TextInputProps;
  title: String;
  icon: IconConfig;
};

export default function Input({
  formProps,
  inputProps,
  title,
  icon
}: Props ) {

  const IconLib = icon ? iconLibraries[icon.iconLib] : null;

  return (
    <Controller
      render={() => (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.inputContainer}>
            <TextInput {...inputProps} style={styles.input} />

            {IconLib && (
              <IconLib 
                name={icon.name as any}
                size={icon.size}
                color={icon.color}
              />
            )}
          </View>
        </View>
      )}
      {...formProps}
    />
  );
}
