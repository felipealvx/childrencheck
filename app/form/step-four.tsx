import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/form/Button";
import { RadioWithInput } from "@/components/form/Radio";
import { router } from "expo-router";
import { useQuestForm } from "@/hooks/useQuestForm";
import { QuestProps } from "@/contexts/QuestFormContext";
import { MotesImage } from "@/components/form/MotesImage";

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

  const dorGeral = useWatch({ control, name: "dorGeral" });

  const renderContent = () => {
    switch (dorGeral) {
      case 1:
        return (
          <View>
            {/* colocar outro componente  */}
            <MotesImage
              control={control}
              title={"Clique no nível de dor que você sente"}
              name="escalaDor"
              options={[
                {
                  value: 1,
                  image: require("../../assets/formImages/motes/5.png"),
                },
                {
                  value: 2,
                  image: require("../../assets/formImages/motes/4.png"),
                },
                {
                  value: 3,
                  image: require("../../assets/formImages/motes/3.png"),
                },
                {
                  value: 4,
                  image: require("../../assets/formImages/motes/2.png"),
                },
                {
                  value: 5,
                  image: require("../../assets/formImages/motes/1.png"),
                },
              ]}
            />
            <RadioWithInput
              control={control}
              title="Essa dor ou algo parecido já dura mais de 3 meses?"
              name="dorDuracao"
              options={[
                { label: "Sim", value: 1 },
                { label: "Não", value: 2 },
                { label: "Não tenho dor", value: 3 },
              ]}
            />
            <RadioWithInput
              control={control}
              title="Você acha que essa dor piora quando você está mais ansioso ou estressado?"
              name="dorPioraEstresse"
              options={[
                { label: "Sim", value: 1 },
                { label: "Não", value: 2 },
                { label: "Não percebi", value: 3 },
                { label: "Não tenho dor", value: 4 },
              ]}
            />
          </View>
        );
      case 2:
        return (
          <View>
            <Text style={styles.infoText}>Continue a responder. 😉</Text>
          </View>
        );
      default:
        return (
          <View style={styles.containerImage}>
            <Image
              style={styles.image}
              source={require("@/assets/images/ilustrations/painIlustration.png")}
            />
          </View>
        );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <RadioWithInput
        control={control}
        title="Nos últimos 7 dias, você sentiu alguma dor nas costas, no pescoço ou nos ombros?"
        name="dorGeral"
        options={[
          { label: "Sim", value: 1 },
          { label: "Não", value: 2 },
        ]}
      />

      <View>{renderContent()}</View>

      <Text style={styles.buttonSubtitle}>
        Avance para continuar a responder o formulário
      </Text>

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  buttonSubtitle: {
    textAlign: "center",
  },
  infoText: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 16,
  },
  containerImage: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 21,
  },
  image: {
    resizeMode: "contain",
    height: 250,
    width: 250,
  },
});
