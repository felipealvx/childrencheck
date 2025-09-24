import { Alert, ScrollView, Text, View } from "react-native";
import { styles } from "@/styles/form/stepSeven";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/form/Button";
import { router } from "expo-router";
import { useQuestForm } from "@/hooks/useQuestForm";
import { QuestProps } from "@/contexts/QuestFormContext";
import { RadioWithInput } from "@/components/form/Radio";
import { SliderWithInput } from "@/components/form/SliderInput";

export default function StepSeven() {
  const { updateFormData } = useQuestForm();

  const { control, handleSubmit } = useForm<QuestProps>();

  // ------------ funcao para passar de step -----------------
  function handleNextStep(data: QuestProps) {
    updateFormData(data);
    router.push({
      pathname: "/form/finish", // caminho do próximo step
    });

    Alert.alert;
  }

  const sentiuDor = useWatch({ control, name: "sentiuDor" });

  return (
    <ScrollView style={styles.container}>
      <RadioWithInput
        control={control}
        title="Você sente ou já sentiu dor nas costas nos últimos 3 meses?"
        name="sentiuDor"
        options={[
          { label: "Sim", value: 1 },
          { label: "Não", value: 2 },
          { label: "Não sei responder", value: 3 },
        ]}
      />

      {sentiuDor == 1 && (
        <View>
          <RadioWithInput
            control={control}
            title="Esta dor nas costas ocorre ou ocorreu com frequência?"
            name="dorFrequente"
            options={[
              { label: "Foi apenas uma vez", value: 1 },
              { label: "Uma vez por mês", value: 2 },
              { label: "Uma vez por semana", value: 3 },
              { label: "De duas a três vezes por semana", value: 4 },
              { label: "Quatro vezes ou mais por semana", value: 5 },
              { label: "Não sei responder", value: 6 },
            ]}
          />
          <RadioWithInput
            control={control}
            title="Esta dor nas costas impede ou impediu de realizar atividades como: brincar, estudar, praticar esportes...?"
            name="dorImpede"
            options={[
              { label: "Sim", value: 1 },
              { label: "Não", value: 2 },
              { label: "Não sei responder", value: 3 },
            ]}
          />

          <SliderWithInput
            control={control}
            name="escalaDor"
            title="Arraste de 0 a 10 baseado na intensidade da dor nas costas nos últimos 3 meses."
            min={0}
            max={10}
            step={1}
          />
        </View>
      )}

      <Text style={styles.buttonSubtitle}>
        Avance para continuar a responder o formulário
      </Text>
      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </ScrollView>
  );
}
