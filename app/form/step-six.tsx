import { ScrollView, Text } from "react-native";
import { styles } from "@/styles/steps";
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
      pathname: "/form/step-seven", // caminho do próximo step
    });
  }

  return (
    <ScrollView style={styles.container}>
      <RadioWithInput
        control={control}
        title="Até que série sua mãe (ou sua responsável do sexo feminino) estudou?"
        name="responsavelFemEstudo"
        options={[
          { label: "Não frequentou a escola", value: 1 },
          { label: "Nivel fundamental (1ª a 8ª série)", value: 2 },
          { label: "Nivel médio (1° ao 3° ano)", value: 3 },
          { label: "Nivel superior (Faculdade)", value: 4 },
          { label: "Não sei", value: 5 },
          { label: "Não tenho responsável do sexo feminino", value: 6 },
        ]}
      />

      <RadioWithInput
        control={control}
        title="Até que série seu pai (ou sua responsável do sexo masculino) estudou?"
        name="responsavelMascEstudo"
        options={[
          { label: "Não frequentou a escola", value: 1 },
          { label: "Nivel fundamental (1ª a 8ª série)", value: 2 },
          { label: "Nivel médio (1° ao 3° ano)", value: 3 },
          { label: "Nivel superior (Faculdade)", value: 4 },
          { label: "Não sei", value: 5 },
          { label: "Não tenho responsável do sexo masculino", value: 6 },
        ]}
      />

      <RadioWithInput
        control={control}
        title="Algum de seus pais (ou responsáveis) apresentam dor nas costas?"
        name="responsavelDores"
        options={[
          { label: "Sim", value: 1 },
          { label: "Não", value: 2 },
          { label: "Não sei responder", value: 3 },
        ]}
        extraInput={{
          when: 1,
          name: "qualResponsavelDores",
          placeholder: "Qual o nome do responsável?",
        }}
      />

      <Text style={styles.buttonSubtitle}>
        Avance para continuar a responder o formulário
      </Text>

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </ScrollView>
  );
}
