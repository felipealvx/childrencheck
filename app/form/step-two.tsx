import { ScrollView, Text } from "react-native";
import styles from "../../styles/form/stepTwo";
import { useForm } from "react-hook-form";
import { Button } from "@/components/form/Button";
import { RadioWithInput } from "@/components/form/Radio";
import { router } from "expo-router";
import { useQuestForm } from "@/hooks/useQuestForm";
import { QuestProps } from "@/contexts/QuestFormContext";

export default function StepTwo() {
  const { updateFormData } = useQuestForm();

  const { control, handleSubmit } = useForm<QuestProps>({
  });

  // ------------ funcao para passar de step -----------------
  function handleNextStep(data: QuestProps) {
    updateFormData(data);
    router.push({
      pathname: "/form/step-three", // caminho do próximo step
    });
  }

  return (
    <ScrollView style={styles.container}>
      <RadioWithInput
        control={control}
        title="Como você descreve a sua posição mais comum na cadeira da escola?"
        name="posicaoComumCadeira"
        options={[
          { label: "Sentado correto, costas retas e pés no chão", value: 1 },
          { label: "Inclinado para frente, apoiando a cabeça na mão", value: 2 },
          { label: "Escorregado na cadeira, com as costas no final do encosto", value: 3 },
          { label: "Sentado com as pernas cruzadas na cadeira", value: 4 },
          { label: "Inclinado para os lados, apoiando nos cotovelos na carteira", value: 5 },
        ]}
      />

      <RadioWithInput
        control={control}
        title="Com que frequência suas costas ficam encostadas no encosto da cadeira?"
        name="freqEncosto"
        options={[
          { label: "Sempre", value: 1 },
          { label: "Quase Sempre", value: 2 },
          { label: "Às Vezes", value: 3 },
          { label: "Quase Nunca", value: 4 },
          { label: "Nunca", value: 5 },
        ]}
      />

      <RadioWithInput
        control={control}
        title="Onde você costuma apoiar os braços quando está escrevendo ou usando o computador?"
        name="apoioEscrevendoComputador"
        options={[
          { label: "Sobre a mesa, de forma relaxada", value: 1 },
          { label: "Um braço na mesa e o outro no colo", value: 2 },
          { label: "Com os ombros elevados, sem apoio confortável", value: 3 },
        ]}
      />

      <RadioWithInput
        control={control}
        title="Você costuma ajustar a altura da cadeira e a distância da mesa quando senta?"
        name="ajusteCadeiraMesa"
        options={[
          { label: "Sim", value: 1 },
          { label: "Sempre", value: 2 },
          { label: "Às vezes", value: 3 },
          { label: "Nunca", value: 4 },
          { label: "Não dá pra ajustar", value: 5 },
        ]}
      />

      <Text style={styles.buttonSubtitle}>
        Avance para continuar a responder o formulário
      </Text>

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </ScrollView>
  );
}
