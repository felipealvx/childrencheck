import { ScrollView, Text } from "react-native";
import { styles } from "../../styles/form/steps";
import { useForm } from "react-hook-form";
import { Button } from "@/components/form/Button";
import { RadioWithInput } from "@/components/form/Radio";
import { router } from "expo-router";
import { useQuestForm } from "@/hooks/useQuestForm";
import { QuestProps } from "@/contexts/QuestFormContext";

export default function StepThree() {
  const { updateFormData } = useQuestForm();

  const { control, handleSubmit } = useForm<QuestProps>();

  // ------------ funcao para passar de step -----------------
  function handleNextStep(data: QuestProps) {
    updateFormData(data);
    router.push({
      pathname: "/form/step-four", // caminho do próximo step
    });
  }

  return (
    <ScrollView style={styles.container}>
      <RadioWithInput
        control={control}
        title="Nos últimos dias, com que frequência você se sentiu nervoso, ansioso ou muito preocupado?"
        name="freqAnsiedade"
        options={[
          { label: "Nunca", value: 1 },
          { label: "Raramentes", value: 2 },
          { label: "Às Vezes", value: 3 },
          { label: "Quase Sempre", value: 4 },
          { label: "Sempre", value: 5 },
        ]}
      />

      <RadioWithInput
        control={control}
        title="Quando você tem uma prova ou tarefa importante, como seu corpo reage?"
        name="reageProva"
        options={[
          { label: "Fico tranquilo", value: 1 },
          {
            label: "Sinto um frio na barriga, mas consigo me concentrar",
            value: 2,
          },
          {
            label:
              "Fico com as mãos suadas, o coração acelerado e a mente a mil",
            value: 3,
          },
          { label: "Sinto dor de barriga ou dor de cabeça", value: 4 },
        ]}
      />

      <RadioWithInput
        control={control}
        title="Você nota que seus ombros ficam tensionados (duros e elevados) ou que você 'trava' a mandíbula quando está concentrado ou estressado?"
        name="membrosTensao"
        options={[
          { label: "Sim", value: 1 },
          { label: "Frequentemente", value: 2 },
          { label: "As vezes", value: 3 },
          { label: "Raramente", value: 4 },
          { label: "Nunca", value: 5 },
        ]}
      />

      <RadioWithInput
        control={control}
        title="Nos últimos meses, como você classificaria seu nível de estresse com as coisas da escola e do dia a dia?"
        name="estresseGeral"
        options={[
          { label: "Nenhum estresse", value: 1 },
          { label: "Um pouco estressado", value: 2 },
          { label: "Estressado", value: 3 },
          { label: "Muito Estressado", value: 4 },
        ]}
      />

      <Text style={styles.buttonSubtitle}>
        Avance para continuar a responder o formulário
      </Text>

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </ScrollView>
  );
}
