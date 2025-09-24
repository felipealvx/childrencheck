import { useQuestForm } from "@/hooks/useQuestForm";
import { ScrollView, Text, View } from "react-native";
import { styles } from "@/styles/finish";
import { Button } from "@/components/form/Button";

export default function StepFour() {
  const { questFormData } = useQuestForm();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.congratulations}>
        <Text style={styles.congratulationsText}> 
          PARABÉNS 👋
        </Text>
        <Text style={styles.congratulationsUser}>
          {questFormData.fullName || 'FELIPE ALVES DA SILVA'}
        </Text>
      </View>
      <View>
        <Text style={styles.subtitle}>
          Você concluiu o formulário!
          Exporte os dados para uma planilha EXCEL clicando no botão abaixo, ou salve em uma turma.
        </Text>
      </View>
      <Text>
        Dados completos do formulário: {JSON.stringify(questFormData, null, 2)}
      </Text>
    </ScrollView>
  )
};
