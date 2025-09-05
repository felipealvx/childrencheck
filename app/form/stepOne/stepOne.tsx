import Input from "@/components/form/input/input";
import { KeyboardAvoidingView, View } from "react-native";
import { styles } from "./styles";
import { useForm } from "react-hook-form";
import { Feather } from "@expo/vector-icons";

export default function StepOne() {
  const { control } = useForm();
  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <Input
          icon={{
            iconLib: "Feather",
            name: "user",
            size: 20,
            color: "black"
          }}
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
          icon={{
            iconLib: "Feather",
            name: "calendar",
            size: 20,
            color: "black"
          }}
          title={"Data de Nascimento"}
          formProps={{ 
            name: "age",
            control
          }}
          inputProps={{ 
            placeholder: "Data de Nascimento", 
            keyboardType: "numeric"
          }}
        />

        <Input
            icon={{
            iconLib: "MaterialCommunityIcons",
            name: "weight",
            size: 20,
            color: "black"
          }}
          title={"Peso"}
          formProps={{ 
            name: "weight",
            control
          }}
          inputProps={{ 
            placeholder: "Peso em Kg",
          }}
        />

        <Input
            icon={{
            iconLib: "MaterialCommunityIcons",
            name: "height",
            size: 20,
            color: "black"
          }}
          title={"Estatura"}
          formProps={{ 
            name: "height",
            control
          }}
          inputProps={{ 
            placeholder: "Altura em metros",
          }}
        />

        <Input
            icon={{
            iconLib: "Ionicons",
            name: "users",
            size: 20,
            color: "black"
          }}
          title={"Responsável"}
          formProps={{ 
            name: "parent",
            control
          }}
          inputProps={{ 
            placeholder: "Familiar responsável",
          }}
        />

      </View>
    </KeyboardAvoidingView>
  );
}
