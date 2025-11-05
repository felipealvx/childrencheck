import { ScrollView, Text, View } from "react-native";
import { styles } from "../../styles/form/steps";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/form/Button";
import { RadioWithInput } from "@/components/form/Radio";
import { router } from "expo-router";
import { useQuestForm } from "@/hooks/useQuestForm";
import { QuestProps } from "@/contexts/QuestFormContext";
import { SelectImage } from "@/components/form/SelectImage";

export default function StepFour() {
  const { updateFormData, questFormData } = useQuestForm();
  

  const { control, handleSubmit } = useForm<QuestProps>();

  // ------------ funcao para passar de step -----------------
  function handleNextStep(data: QuestProps) {
    updateFormData(data);
    router.push({
      pathname: "/form/step-five", // caminho do próximo step
    });
  }
  const sexo = questFormData.sexo;

  return (
    <ScrollView style={styles.container}>
      {sexo == 1 ? (
        // --------------- masculino questionário -----------------
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

          <SelectImage
            control={control}
            title="Como você costuma sentar em uma cadeira ou em um banco para conversar com os amigos?"
            name="sentarCadeiraConversar"
            options={[
              {
                value: 1,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarCadeiraConversar/0201.png"),
              },
              {
                value: 2,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarCadeiraConversar/0202.png"),
              },
              {
                value: 3,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarCadeiraConversar/0203.png"),
              },
              {
                value: 4,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarCadeiraConversar/0204.png"),
              },
              {
                value: 5,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarCadeiraConversar/0205.png"),
              },
              { value: 6, image: require("../../assets/formImages/outro.png") },
            ]}
          />

          <SelectImage
            control={control}
            title="Como você costuma sentar para utilizar o computador?"
            name="sentarComputador"
            options={[
              {
                value: 1,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarComputador/0301.png"),
              },
              {
                value: 2,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarComputador/0302.png"),
              },
              {
                value: 3,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarComputador/0303.png"),
              },
              {
                value: 4,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarComputador/0304.png"),
              },
              {
                value: 5,
                image: require("../../assets/formImages/backpeiImages/masculino/sentarComputador/0305.png"),
              },
              { value: 6, image: require("../../assets/formImages/outro.png") },
            ]}
          />
        </View>
      ) : (
        <View>
          <SelectImage
            control={control}
            title="Como você costuma sentar na escola para escrever à mesa?"
            name="sentarEscreverMesa"
            options={[
              {
                value: 1,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarEscreverMesa/01.png"),
              },
              {
                value: 2,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarEscreverMesa/02.png"),
              },
              {
                value: 3,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarEscreverMesa/03.png"),
              },
              {
                value: 4,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarEscreverMesa/04.png"),
              },
              {
                value: 5,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarEscreverMesa/05.png"),
              },
              { value: 6, image: require("../../assets/formImages/outro.png") },
            ]}
          />

          <SelectImage
            control={control}
            title="Como você costuma sentar em uma cadeira ou em um banco para conversar com os amigos?"
            name="sentarCadeiraConversar"
            options={[
              {
                value: 1,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarCadeiraConversar/01.png"),
              },
              {
                value: 2,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarCadeiraConversar/02.png"),
              },
              {
                value: 3,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarCadeiraConversar/03.png"),
              },
              {
                value: 4,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarCadeiraConversar/04.png"),
              },
              {
                value: 5,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarCadeiraConversar/05.png"),
              },
              { value: 6, image: require("../../assets/formImages/outro.png") },
            ]}
          />

          <SelectImage
            control={control}
            title="Como você costuma sentar para utilizar o computador?"
            name="sentarComputador"
            options={[
              {
                value: 1,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarComputador/01.png"),
              },
              {
                value: 2,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarComputador/02.png"),
              },
              {
                value: 3,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarComputador/03.png"),
              },
              {
                value: 4,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarComputador/04.png"),
              },
              {
                value: 5,
                image: require("../../assets/formImages/backpeiImages/feminino/sentarComputador/05.png"),
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
