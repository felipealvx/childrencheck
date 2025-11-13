import { ScrollView, Text, View } from "react-native";
import { styles } from "@/styles/form/steps";
import { useForm } from "react-hook-form";
import { Button } from "@/components/form/Button";
import { router } from "expo-router";
import { useQuestForm } from "@/hooks/useQuestForm";
import { QuestProps } from "@/contexts/QuestFormContext";
import { RadioWithInput } from "@/components/form/Radio";

export default function StepFive() {
  const { updateFormData, questFormData } = useQuestForm();

  const { control, handleSubmit } = useForm<QuestProps>();

  // ------------ funcao para passar de step -----------------
  function handleNextStep(data: QuestProps) {
    updateFormData(data);
    router.push({
      pathname: "/form/step-six", // caminho do próximo step
    });
  }

  return (
    <ScrollView style={styles.container}>
      <RadioWithInput
        control={control}
        title="Fora das aulas de Educação Física, quantos dias por semana você pratica atividades que te deixam ofegante ou cansado, como correr, jogar futebol, andar de bicicleta, etc.?"
        name="diasPraticaAtv"
        options={[
          { label: "Nenhum dia", value: 1 },
          { label: "1 ou 2 dias", value: 2 },
          { label: "3 ou 4 dias", value: 3 },
          { label: "5 ou mais", value: 4 },
        ]}
      />
      <RadioWithInput
        control={control}
        title="Nos finais de semana, quanto tempo você passa em atividades como essa?"
        name="tempoAtvFimSemana"
        options={[
          { label: "Menos de 1 hora", value: 1 },
          { label: "Entre 1 e 2 horas", value: 2 },
          { label: "Mais de 2 horas", value: 3 },
          { label: "Não pratico", value: 4 },
        ]}
      />
      <RadioWithInput
        control={control}
        title="E, em um dia normal de aula, quantas horas você passa sentado (na escola, fazendo lição, em telas)?"
        name="horasSentado"
        options={[
          { label: "Menos de 2 horas", value: 1 },
          { label: "De 2 a 4 horas", value: 2 },
          { label: "De 4 a 6 horas", value: 3 },
          { label: "Mais de 6 horas", value: 4 },
        ]}
      />
      <Text style={styles.buttonSubtitle}>
        Avance para continuar a responder o formulário
      </Text>
      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </ScrollView>
  );
}
