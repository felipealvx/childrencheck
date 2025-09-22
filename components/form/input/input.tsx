import { Text, TextInput, TextInputProps, View } from "react-native";
import { Controller, UseControllerProps } from "react-hook-form";
import { styles } from "./styles";
import { forwardRef } from "react";

type Props = {
  // icon?: keyof typeof Feather.glyphMap;
  error?: String;
  formProps: UseControllerProps;
  inputProps: TextInputProps;
  title: String;
};

const Input = forwardRef<TextInput, Props>(
  ({ formProps, inputProps, title, error = '' }, ref) => {

    return (
      <Controller
        render={({ field }) => (
          <View style={styles.container}>
            <View style={styles.group}>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  ref={ref}
                  {...inputProps}
                  style={styles.input}
                />
              </View>
              { 
                error.length > 0 &&
                <Text style={styles.errorMessage}>{error}</Text>
              }
            </View>
          </View>
        )}
        {...formProps}
      />
    );
  }
);

export { Input };
