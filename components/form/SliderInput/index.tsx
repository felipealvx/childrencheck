import React from "react";
import { View, Text } from "react-native";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import Slider from "@react-native-community/slider";
import { styles } from "./styles";
import { Colors } from "@/constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>; // nome do campo principal
  title: string;
  min?: number;
  max?: number;
  step?: number;
};

export function SliderWithInput<T extends FieldValues>({
  control,
  name,
  title,
  min = 0,
  max = 100,
  step = 1,
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.label}>
            {value ?? min}
          </Text>
          <View style={styles.slider}>
            <Ionicons name="sad-outline" size={24} color={Colors.danger} />
            <Slider
              style={styles.input}
              minimumValue={min}
              maximumValue={max}
              step={step}
              value={value ?? min}
              minimumTrackTintColor={Colors.primary}
              maximumTrackTintColor="#8E8E93"
              thumbTintColor={Colors.secondary}
              onValueChange={onChange}
            />
            <Ionicons name="happy-outline" size={24} color={Colors.secondary} />
          </View>
        </View>
      )}
    />
  );
}
