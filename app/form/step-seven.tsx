import { ScrollView, Text, View } from "react-native";
import { styles } from "@/styles/steps";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/form/Button";
import { router } from "expo-router";
import { useQuestForm } from "@/hooks/useQuestForm";
import { QuestProps } from "@/contexts/QuestFormContext";

export default function StepSeven() {
  const { updateFormData, questFormData } = useQuestForm();

  const { control, handleSubmit } = useForm<QuestProps>();

  // ------------ funcao para passar de step -----------------
  function handleNextStep(data: QuestProps) {
    updateFormData(data);
    router.push({
      pathname: "/form/finish", // caminho do próximo step
    });
  }

  const sexo = questFormData.sexo;

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.buttonSubtitle}>
        Avance para continuar a responder o formulário
      </Text>
      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </ScrollView>
  );
}
