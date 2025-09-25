import { Text, TextInput, TextInputProps, View } from "react-native";
import { Controller, UseControllerProps } from "react-hook-form";
import { styles } from "./styles";
import { forwardRef } from "react";

type Props = {
  error?: String;
  formProps: UseControllerProps<any>;
  inputProps: TextInputProps;
  title: String;
};

const Input = forwardRef<TextInput, Props>(
  ({ formProps, inputProps, title, error = "" }, ref) => {
    return (
      <Controller
        render={({ field }) => (
          <View style={styles.container}>
            <View style={styles.group}>
              <Text style={styles.title}>{title}</Text>
              <TextInput
                value={field.value}
                onChangeText={field.onChange}
                ref={ref}
                {...inputProps}
                style={styles.input}
              />
              {error.length > 0 && (
                <Text style={styles.errorMessage}>{error}</Text>
              )}
            </View>
          </View>
        )}
        {...formProps}
      />
    );
  }
);

export { Input };
