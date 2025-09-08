import { Input } from "@/components/form/Input/input";
import { KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "@/components/form/Button";

export default function StepOne() {
  const { control, handleSubmit } = useForm();

  function handleNextStep(data: any) {
    console.log(data);
  }

  const fullNameRef = useRef<TextInput>(null);
  const ageRef = useRef<TextInput>(null);
  const weightRef = useRef<TextInput>(null);
  const heightRef = useRef<TextInput>(null);
  const parentRef = useRef<TextInput>(null);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Input
        // -------------- nome completo -------------
        ref={fullNameRef}
        icon={{
          iconLib: "Feather",
          name: "user",
          size: 20,
          color: "black",
        }}
        title={"Nome Completo"}
        formProps={{
          name: "fullName",
          control,
        }}
        inputProps={{
          placeholder: "Nome Completo",
          returnKeyType: "next",
          onSubmitEditing: () => ageRef.current?.focus(),
        }}
      />

      <Input
        // -------------- data de nascimento -------------
        ref={ageRef}
        icon={{
          iconLib: "Feather",
          name: "calendar",
          size: 20,
          color: "black",
        }}
        title={"Data de Nascimento"}
        formProps={{
          name: "age",
          control,
        }}
        inputProps={{
          placeholder: "Data de Nascimento",
          keyboardType: "numeric",
          returnKeyType: "next",
          onSubmitEditing: () => weightRef.current?.focus(),
        }}
      />

      <Input
        // -------------- peso -------------
        ref={weightRef}
        icon={{
          iconLib: "MaterialCommunityIcons",
          name: "weight",
          size: 20,
          color: "black",
        }}
        title={"Peso"}
        formProps={{
          name: "weight",
          control,
        }}
        inputProps={{
          placeholder: "Peso em Kg",
          keyboardType: "numeric",
          returnKeyType: "next",
          onSubmitEditing: () => heightRef.current?.focus(),
        }}
      />

      <Input
        // -------------- estatura -------------
        ref={heightRef}
        icon={{
          iconLib: "MaterialCommunityIcons",
          name: "human-male-height",
          size: 20,
          color: "black",
        }}
        title={"Estatura"}
        formProps={{
          name: "height",
          control,
        }}
        inputProps={{
          placeholder: "Altura em metros",
          returnKeyType: "next",
          keyboardType: "numeric",
          onSubmitEditing: () => parentRef.current?.focus(),
        }}
      />

      <Input
        // -------------- responsável -------------
        ref={parentRef}
        icon={{
          iconLib: "Feather",
          name: "users",
          size: 20,
          color: "black",
        }}
        title={"Responsável"}
        formProps={{
          name: "parent",
          control,
        }}
        inputProps={{
          placeholder: "Familiar responsável",
          returnKeyType: "done",
          onSubmitEditing: handleSubmit(handleNextStep),
        }}
      />

      <Text style={styles.buttonSubtitle}>
        Avance para continuar a responder o formulário
      </Text>

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </KeyboardAvoidingView>
  );
}
