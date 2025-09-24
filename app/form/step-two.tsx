import { ScrollView, Text } from "react-native";
import styles from "../../styles/form/stepTwo";
import { useForm } from "react-hook-form";
import { Button } from "@/components/form/Button";
import { RadioWithInput } from "@/components/form/Radio";
import { router } from "expo-router";
import { useQuestForm } from "@/hooks/useQuestForm";
import { QuestProps } from "@/contexts/QuestFormContext";

export default function StepTwo() {
  const { updateFormData } = useQuestForm();

  const { control, handleSubmit } = useForm<QuestProps>({
    defaultValues: { qual: "" },
  });

  // ------------ funcao para passar de step -----------------
  function handleNextStep(data: QuestProps) {
    updateFormData(data);
    router.push({
      pathname: "/form/step-three", // caminho do próximo step
    });
  }

  return (
    <ScrollView style={styles.container}>
      <Text>Responda as perguntas abaixo</Text>
      <RadioWithInput
        control={control}
        title="Você pratica algum exercicio físico ou esporte regularmente? (Na escola ou fora dela)?"
        name="pratica"
        options={[
          { label: "Sim", value: 1 },
          { label: "Não", value: 2 },
        ]}
        extraInput={{
          when: 1,
          name: "qual",
          placeholder: "Qual exercício?",
        }}
      />

      <RadioWithInput
        control={control}
        title="Quantos dias você pratica este exercício/esporte por semana?"
        name="diasPratica"
        options={[
          { label: "De 1 a 2 dias", value: 1 },
          { label: "De 3 a 4 dias", value: 2 },
          { label: "5 ou mais dias", value: 3 },
          { label: "Não sei responder", value: 4 },
        ]}
      />

      <RadioWithInput
        control={control}
        title="Você pratica este exercício físico ou esporte de maneira competitiva (participa de competições)?"
        name="competitivo"
        options={[
          { label: "Sim", value: 1 },
          { label: "Não", value: 2 },
        ]}
      />

      <Text style={styles.buttonSubtitle}>
        Avance para continuar a responder o formulário
      </Text>

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </ScrollView>
  );
}
