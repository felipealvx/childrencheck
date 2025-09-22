import { ScrollView, Text, View } from "react-native";
import styles from "../../styles/stepTwo";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/form/Button";
import { RadioWithInput } from "@/components/form/Radio";
import { router } from "expo-router";
import { useQuestForm } from "@/hooks/useQuestForm";
import { QuestProps } from "@/contexts/QuestFormContext";
import { SelectImage } from "@/components/form/SelectImage";

export default function StepThree() {
  const { updateFormData } = useQuestForm();

  const { control, handleSubmit } = useForm<QuestProps>();

  // ------------ funcao para passar de step -----------------
  function handleNextStep(data: QuestProps) {
    updateFormData(data);
    router.push({
      pathname: "/form/step-five", // caminho do próximo step
    });
  }

  const sexo = useWatch({ control, name: "sexo" });

  return (
    <ScrollView style={styles.container}>
      <RadioWithInput
        control={control}
        title="Sexo"
        name="sexo"
        options={[
          { label: "Masculino", value: 1 },
          { label: "Feminino", value: 2 },
        ]}
      />
      {sexo == 1 && (
        <View>
          <SelectImage
            control={control}
            title="Como você costuma sentar na escola para escrever à mesa?"
            name="sentarEscreverMesa"
            options={[
              {
                value: 1,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarEscreverMesa/0101.png"),
              },
              {
                value: 2,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarEscreverMesa/0102.png"),
              },
              {
                value: 3,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarEscreverMesa/0103.png"),
              },
              {
                value: 4,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarEscreverMesa/0104.png"),
              },
              {
                value: 5,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarEscreverMesa/0105.png"),
              },
              { value: 6, image: require("../../assets/formImages/outro.png") },
            ]}
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
