import Input from "@/components/form/input/input";
import { View } from "react-native";
import { styles } from "./styles";
import { useForm } from "react-hook-form";

export default function StepOne() {
  const { control } = useForm();
  return (
    <View style={styles.container}>
      <Input
        icon="user"
        title={"Nome Completo"}
        formProps={{ 
          name: "fullName",
          control
        }}
        inputProps={{ 
          placeholder: "Nome Completo" 
        }}
      />

      <Input
        icon="calendar"
        title={"Idade"}
        formProps={{ 
          name: "age",
          control
        }}
        inputProps={{ 
          placeholder: "Idade" 
        }}
      />
    </View>
  );
}
