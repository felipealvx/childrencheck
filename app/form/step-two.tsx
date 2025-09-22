import { Alert, ScrollView, Text } from "react-native";
import styles from "../../styles/stepTwo";
import { useForm } from "react-hook-form";
import { Button } from "@/components/form/Button";
import { RadioWithInput } from "@/components/form/Radio";
import { router, useLocalSearchParams } from "expo-router";
import { useQuestForm } from "@/hooks/useQuestForm";
import { QuestProps } from "@/contexts/QuestFormContext";

// type FormData = {
//   pratica: 1 | 2;
//   qual?: string;
//   diasPratica: 1 | 2 | 3 | 4;
//   competitivo: 1 | 2;
// };

// type StepOneData = {
//   fullName: string;
//   age: string;
//   weight: number;
//   height: number;
//   parent: string;
// };

export default function StepTwo() {

  const { updateFormData, questFormData } = useQuestForm();

  const { formData } = useLocalSearchParams();

  // const stepOneData: StepOneData = formData 
  //   ? JSON.parse(formData as string) 
  //   : {};

  const {
    control,
    handleSubmit,
  } = useForm<QuestProps>({
    defaultValues: { qual: "" },
  });

  // ------------ funcao para passar de step -----------------
  function handleNextStep(data: QuestProps) {
    updateFormData(data);
    router.push({
      pathname: "/form/step-three", // caminho do próximo step
      params: { formData: JSON.stringify(data) },
    });

    const completeData = {
      // ...stepOneData,
      ...data
    };

    console.log("Dados completos do formulário:", completeData);

    // Alert.alert(
    //   "Formulário Concluído!", 
    //   "Dados salvos com sucesso!",
    //   [
    //     {
    //       // text: "OK",
    //       // onPress: () => router.push("/(tabs)")  // Volta para o início
    //     }
    //   ]
    // );
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

      {
        
      }

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
