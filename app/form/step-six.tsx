import { ScrollView, Text } from "react-native";
import { styles } from "@/styles/form/steps";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/form/Button";
import { router } from "expo-router";
import { useQuestForm } from "@/hooks/useQuestForm";
import { QuestProps } from "@/contexts/QuestFormContext";
import { RadioWithInput } from "@/components/form/Radio";

export default function StepSix() {
  const { updateFormData, questFormData } = useQuestForm();

  const { control, handleSubmit } = useForm<QuestProps>();

  // ------------ funcao para passar de step -----------------
  function handleNextStep(data: QuestProps) {
    updateFormData(data);
    router.push({
      pathname: "/form/finish", // caminho do próximo step
    });
  }

  return (
    <ScrollView style={styles.container}>
      <RadioWithInput
        control={control}
        title="Como você classifica a qualidade do seu sono na maioria das noites (Você dorme bem)?"
        name="classificaSono"
        options={[
          { label: "Muito boa", value: 1 },
          { label: "Boa", value: 2 },
          { label: "Regular", value: 3 },
          { label: "Ruim", value: 4 },
          { label: "Muito ruim", value: 5 },
        ]}
      />
      <RadioWithInput
        control={control}
        title="Com que frequência você acorda sentindo cansaço ou dor no corpo?"
        name="freqAcorda"
        options={[
          { label: "Nunca", value: 1 },
          { label: "Raramente", value: 2 },
          { label: "Às vezes", value: 3 },
          { label: "Quase sempre", value: 4 },
          { label: "Sempre", value: 5 },
        ]}
      />

      <RadioWithInput
        control={control}
        title="Com que frequência a ansiedade ou preocupações atrapalham seu sono?"
        name="freqAnsiedadeSono"
        options={[
          { label: "Nunca", value: 1 },
          { label: "Raramente", value: 2 },
          { label: "Às vezes", value: 3 },
          { label: "Quase sempre", value: 4 },
          { label: "Sempre", value: 5 },
        ]}
      />

      <Text style={styles.buttonSubtitle}>
        Avance para continuar a responder o formulário
      </Text>

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </ScrollView>
  );
}
