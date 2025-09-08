import { Text, TextInput, TextInputProps, View } from "react-native";
import { Controller, UseControllerProps } from "react-hook-form";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { forwardRef } from "react";

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

const Input = forwardRef<TextInput, Props> (({
  formProps,
  inputProps,
  title,
  icon
}, ref ) => {

  const IconLib = icon ? iconLibraries[icon.iconLib] : null;

  return (
    <Controller
      render={({ field }) => (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.inputContainer}>
            <TextInput
            value={field.value}
            onChangeText={field.onChange}
            ref={ref} 
            {...inputProps} 
            style={styles.input} />

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
});

export { Input };