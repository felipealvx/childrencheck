import { Input } from "@/components/form/Input/input";
import { ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../../styles/form/stepOne";
import { useForm, useWatch } from "react-hook-form";
import { useRef } from "react";
import { Button } from "@/components/form/Button";
import { useRouter } from "expo-router";
import { QuestProps } from "@/contexts/QuestFormContext";
import { useQuestForm } from "@/hooks/useQuestForm";
import { RadioWithInput } from "@/components/form/Radio";
import { MotesImage } from "@/components/form/MotesImage";

export default function StepOne() {
  const { updateFormData } = useQuestForm();

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestProps>();

  function handleNextStep(data: QuestProps) {
    updateFormData(data);
    router.push({
      pathname: "/form/step-two", // caminho do próximo step
    });
  }

  // ---------- refs para navegação entre inputs ----------
  const fullNameRef = useRef<TextInput>(null);
  const ageRef = useRef<TextInput>(null);
  const weightRef = useRef<TextInput>(null);
  const heightRef = useRef<TextInput>(null);
  const parentRef = useRef<TextInput>(null);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputs}>
        <Input
          // -------------- nome completo -------------
          ref={fullNameRef}
          error={errors.fullName?.message}
          title={"Qual é o seu nome?"}
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
          title={"Qual sua data de nascimento?"}
          formProps={{
            name: "age",
            control,
            rules: {
              required: "A idade é obrigatória",
              pattern: {
                value:
                  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
                message: "Formato inválido (DIA-MÊS-ANO)",
              },
            },
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
          title={"Qual seu peso?"}
          formProps={{
            name: "weight",
            control,
            rules: {
              pattern: {
                value: /^\d+(\.\d{1,3})?$/,
                message: "Formato inválido",
              },
            },
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
          title={"Qual sua altura?"}
          formProps={{
            name: "height",
            control,
            rules: {
              pattern: {
                value: /^\d{1,3}?$/,
                message: "Formato inválido",
              },
            },
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
          title={"Quem é seu responsável?"}
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
      </View>

      <RadioWithInput
        control={control}
        title="Qual seu sexo?"
        name="sexo"
        options={[
          { label: "Masculino", value: 1 },
          { label: "Feminino", value: 2 },
          { label: "Prefiro não dizer", value: 3 },
        ]}
      />

      <Text style={styles.buttonSubtitle}>
        Avance para continuar a responder o formulário
      </Text>

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </ScrollView>
  );
}
