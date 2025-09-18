import { Input } from "@/components/form/Input/input";
import { KeyboardAvoidingView, Text, TextInput } from "react-native";
import { styles } from "../../styles/stepOne";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "@/components/form/Button";
import { useRouter } from "expo-router";

export default function StepOne() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleNextStep(data: any) {
    router.push({
      pathname: "/form/step-two", // caminho do próximo step
      params: { formData: JSON.stringify(data) },
    });
  }

  // ---------- refs para navegação entre inputs ----------
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
        error={errors.fullName?.message}
        title={"Nome Completo"}
        formProps={{
          name: "fullName",
          control,
          rules: { required: "O nome é obrigatório" },
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
        error={errors.age?.message}
        title={"Data de Nascimento"}
        formProps={{
          name: "age",
          control,
          rules: { required: "A idade é obrigatória" },
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
        error={errors.weight?.message}
        title={"Peso"}
        formProps={{
          name: "weight",
          control,
          rules: { required: "O peso é obrigatório" },
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
        error={errors.height?.message}
        title={"Estatura"}
        formProps={{
          name: "height",
          control,
          rules: { required: "A estatura é obrigatória" },
        }}
        inputProps={{
          placeholder: "Altura em centimentros",
          returnKeyType: "next",
          keyboardType: "numeric",
          onSubmitEditing: () => parentRef.current?.focus(),
        }}
      />

      <Input
        // -------------- responsável -------------
        ref={parentRef}
        error={errors.parent?.message}
        title={"Responsável"}
        formProps={{
          name: "parent",
          control,
          rules: { required: "O responsável é obrigatório" },
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
