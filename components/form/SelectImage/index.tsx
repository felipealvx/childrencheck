import React from "react";
import { View, Text, TouchableOpacity, Image, ImageSourcePropType, ScrollView } from "react-native";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { styles } from "./styles";

type Option = {
  label?: string;
  value: number;
  image?: ImageSourcePropType;
};

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>; // nome do campo principal
  options: Option[];
  title: String;
};

export function SelectImage<T extends FieldValues>({
  control,
  name,
  options,
  title,
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Arraste pro lado para ver as opções</Text>

          <ScrollView horizontal style={styles.radioGroup}>
            {options.map((option) => {
              const isSelected = value === option.value;
              return (
                <TouchableOpacity
                  key={option.value}
                  style={[styles.radioOption, isSelected && styles.radioSelected]}
                  onPress={() => onChange(option.value)}
                >
                  <Image
                    source={option.image}
                    style={[styles.image, isSelected && styles.imageSelected]}
                    resizeMode="stretch"
                  />
                  {option.label && <Text style={styles.label}>{option.label}</Text>}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    />
  );
}
