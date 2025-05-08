import { Colors } from "@/constants/Colors";
import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from "react-native";

type FormProps = {
  text: string;
  placeText: string;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export default function Input({labelStyle, inputStyle, text, placeText, value, onChangeText, containerStyle}: FormProps){
  return (
    <View style={[style.container, containerStyle]}>
      <Text style={[style.label, labelStyle]}>
        {text}
      </Text>
      <TextInput 
        style={[style.inputText, inputStyle]}
        placeholder={placeText}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    
  },
  label: {
    fontWeight: 'bold'
  },
  inputText: {
    backgroundColor: '#e1e1e1',
    borderRadius: 5,
    marginTop: 5,
    width: "100%",
    height: 50,
  }
})