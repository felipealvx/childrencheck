import { ScrollView, Text, View } from "react-native";
import { styles } from "@/styles/steps";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/form/Button";
import { router } from "expo-router";
import { useQuestForm } from "@/hooks/useQuestForm";
import { QuestProps } from "@/contexts/QuestFormContext";
import { SelectImage } from "@/components/form/SelectImage";

export default function StepThree() {
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
      {sexo == 1 ? (
        // --------------- masculino questionário -----------------
        <View>
          <SelectImage
            control={control}
            title="Como você costuma pegar objeto do chão?"
            name="pegarObjeto"
            options={[
              {
                value: 1,
                image: require("../../assets/formImages/backpeiImages/masculino/pegarObjeto/0401.png"),
              },
              {
                value: 2,
                image: require("../../assets/formImages/backpeiImages/masculino/pegarObjeto/0402.png"),
              },
              {
                value: 3,
                image: require("../../assets/formImages/backpeiImages/masculino/pegarObjeto/0403.png"),
              },
              {
                value: 4,
                image: require("../../assets/formImages/backpeiImages/masculino/pegarObjeto/0404.png"),
              },
              { value: 5, image: require("../../assets/formImages/outro.png") },
            ]}
          />

          <SelectImage
            control={control}
            title="O que você utiliza para carregar o material escolar? Marque uma das opções abaixo."
            name="bolsas"
            options={[
              {
                value: 1,
                image: require("../../assets/formImages/backpeiImages/bolsas/01.png"),
              },
              {
                value: 2,
                image: require("../../assets/formImages/backpeiImages/bolsas/02.png"),
              },
              {
                value: 3,
                image: require("../../assets/formImages/backpeiImages/bolsas/03.png"),
              },
              {
                value: 4,
                image: require("../../assets/formImages/backpeiImages/bolsas/04.png"),
              },
              {
                value: 5,
                image: require("../../assets/formImages/backpeiImages/bolsas/05.png"),
              },
              { value: 6, image: require("../../assets/formImages/outro.png") },
            ]}
          />

          <SelectImage
            control={control}
            title="Como você leva sua mochila escolar?"
            name="levarMochila"
            options={[
              {
                value: 1,
                image: require("../../assets/formImages/backpeiImages/masculino/levarMochila/0501.png"),
              },
              {
                value: 2,
                image: require("../../assets/formImages/backpeiImages/masculino/levarMochila/0502.png"),
              },
              {
                value: 3,
                image: require("../../assets/formImages/backpeiImages/masculino/levarMochila/0503.png"),
              },
              {
                value: 4,
                image: require("../../assets/formImages/backpeiImages/masculino/levarMochila/0504.png"),
              },
              {
                value: 5,
                image: require("../../assets/formImages/backpeiImages/masculino/levarMochila/0505.png"),
              },
              { value: 6, image: require("../../assets/formImages/outro.png") },
            ]}
          />
        </View>
      ) : (
        <View>
          <SelectImage
            control={control}
            title="Como você costuma pegar objeto do chão?"
            name="pegarObjeto"
            options={[
              {
                value: 1,
                image: require("../../assets/formImages/backpeiImages/feminino/pegarObjeto/01.png"),
              },
              {
                value: 2,
                image: require("../../assets/formImages/backpeiImages/feminino/pegarObjeto/02.png"),
              },
              {
                value: 3,
                image: require("../../assets/formImages/backpeiImages/feminino/pegarObjeto/03.png"),
              },
              {
                value: 4,
                image: require("../../assets/formImages/backpeiImages/feminino/pegarObjeto/04.png"),
              },
              { value: 5, image: require("../../assets/formImages/outro.png") },
            ]}
          />

          <SelectImage
            control={control}
            title="O que você utiliza para carregar o material escolar? Marque uma das opções abaixo."
            name="bolsas"
            options={[
              {
                value: 1,
                image: require("../../assets/formImages/backpeiImages/bolsas/01.png"),
              },
              {
                value: 2,
                image: require("../../assets/formImages/backpeiImages/bolsas/02.png"),
              },
              {
                value: 3,
                image: require("../../assets/formImages/backpeiImages/bolsas/03.png"),
              },
              {
                value: 4,
                image: require("../../assets/formImages/backpeiImages/bolsas/04.png"),
              },
              {
                value: 5,
                image: require("../../assets/formImages/backpeiImages/bolsas/05.png"),
              },
              { value: 6, image: require("../../assets/formImages/outro.png") },
            ]}
          />

          <SelectImage
            control={control}
            title="Como você leva sua mochila escolar?"
            name="levarMochila"
            options={[
              {
                value: 1,
                image: require("../../assets/formImages/backpeiImages/feminino/levarMochila/01.png"),
              },
              {
                value: 2,
                image: require("../../assets/formImages/backpeiImages/feminino/levarMochila/02.png"),
              },
              {
                value: 3,
                image: require("../../assets/formImages/backpeiImages/feminino/levarMochila/03.png"),
              },
              {
                value: 4,
                image: require("../../assets/formImages/backpeiImages/feminino/levarMochila/04.png"),
              },
              {
                value: 5,
                image: require("../../assets/formImages/backpeiImages/feminino/levarMochila/05.png"),
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
