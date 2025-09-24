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
      <Text>Responda as perguntas abaixo</Text>
      <RadioWithInput
        control={control}
        title="Quantas horas por dia você permanece sentado assistindo televisão?"
        name="horasTv"
        options={[
          { label: "0 a 1 hora", value: 1 },
          { label: "2 a 3 horas", value: 2 },
          { label: "4 a 5 horas", value: 3 },
          { label: "6 a 7 horas", value: 4 },
          { label: "8 ou mais horas", value: 5 },
          { label: "Não sei responder", value: 6 },
        ]}
      />

      <RadioWithInput
        control={control}
        title="Quantas horas você permanece sentado utilizando o computador?"
        name="horasPc"
        options={[
          { label: "0 a 1 hora", value: 1 },
          { label: "2 a 3 horas", value: 2 },
          { label: "4 a 5 horas", value: 3 },
          { label: "6 ou mais horas", value: 4 },
          { label: "Não sei responder", value: 5 },
        ]}
      />

      <RadioWithInput
        control={control}
        title="Você costuma ler e/ou estudar na cama?"
        name="ler"
        options={[
          { label: "Sim", value: 1 },
          { label: "Não", value: 2 },
          { label: "As vezes", value: 3 },
        ]}
      />

      <RadioWithInput
        control={control}
        title="Qual sua posição preferida para dormir?"
        name="posicaoDormir"
        options={[
          { label: "De lado", value: 1 },
          { label: "De bruços (barriga pra baixo)", value: 2 },
          { label: "De costas (barriga pra cima)", value: 3 },
          { label: "Não sei responder", value: 4 },
        ]}
      />

      <RadioWithInput
        control={control}
        title="Quantas horas você dorme por noite?"
        name="horasDorme"
        options={[
          { label: "0 a 6 horas", value: 1 },
          { label: "7 horas", value: 2 },
          { label: "8 a 9 horas", value: 3 },
          { label: "10 horas ou mais", value: 4 },
          { label: "Não sei responder", value: 5 },
        ]}
      />

      <Text style={styles.buttonSubtitle}>
        Avance para continuar a responder o formulário
      </Text>

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </ScrollView>
  );
}
