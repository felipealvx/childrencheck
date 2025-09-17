import { Text, TextInput, View } from "react-native";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "@/components/form/Button";
import { RadioWithInput } from "@/components/form/Radio";

type FormData = {
  pratica: "sim" | "nao";
  qual?: string;
};

export function StepTwo() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { pratica: "nao", qual: "" },
  });

  function handleNextStep(data: FormData) {
    console.log(data);
  }

  // ---------- refs para navegação entre inputs ----------
  const praticeRef = useRef<TextInput>(null);
  const ageRef = useRef<TextInput>(null);
  const weightRef = useRef<TextInput>(null);
  const heightRef = useRef<TextInput>(null);
  const parentRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <Text>Responda as perguntas abaixo</Text>
      <RadioWithInput
        control={control}
        title="Você pratica algum exercicio físico ou esporte regularmente? (Na escola ou fora dela)?"
        name="pratica"
        options={[
          { label: "Sim", value: "sim" },
          { label: "Não", value: "nao" },
        ]}
        extraInput={{
          when: "sim",
          name: "qual",
          placeholder: "Qual exercício?",
        }}
      />

      <Text style={styles.buttonSubtitle}>
        Avance para continuar a responder o formulário
      </Text>

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  );
}
