import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { styles } from "./styles";

type Option = {
  label: string;
  value: number;
};

type ExtraInput<T extends FieldValues> = {
  when: number; // valor que ativa o input extra
  name: Path<T>; // nome do campo extra
  placeholder?: string;
};

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>; // nome do campo principal
  options: Option[];
  extraInput?: ExtraInput<T>;
  title: String;
};

export function RadioWithInput<T extends FieldValues>({
  control,
  name,
  options,
  extraInput,
  title,
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.label}>Selecione uma opção:</Text>

          {/* Radio Options */}
          <View style={styles.radioGroup}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={styles.radioOption}
                onPress={() => onChange(option.value)}
              >
                <View
                  style={[
                    styles.radioCircle,
                    value === option.value && styles.radioSelected,
                  ]}
                />
                <Text style={styles.labelInput}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Extra Input condicional */}
          {extraInput && value === extraInput.when && (
            <Controller
              control={control}
              name={extraInput.name}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder={extraInput.placeholder}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          )}
        </View>
      )}
    />
  );
}
