import { useQuestForm } from "@/hooks/useQuestForm";
import { ScrollView, Text, View } from "react-native";
import { styles } from "@/styles/finish";

export default function StepFour() {
  const { questFormData } = useQuestForm();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.congratulations}>
        <Text> 
          PARABÉNS
        </Text>
        <Text>
          {questFormData.fullName || 'Usuário'}!
        </Text>
      </View>
      <Text>
        Você concluiu o formulário!
        Exporte os dados para uma planilha EXCEL clicando no botão abaixo, ou salve em uma turma.
      </Text>
      <Text>
        Dados completos do formulário: {JSON.stringify(questFormData, null, 2)}
      </Text>
    </ScrollView>
  )
};
