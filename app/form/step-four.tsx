import { useQuestForm } from "@/hooks/useQuestForm";
import { Text, View } from "react-native";

export default function StepFour() {
  const { questFormData } = useQuestForm();
  return (
    <View>
      <Text> 
        Olá {questFormData.fullName || 'Usuário'}!
      </Text>
      <Text>
        Dados completos do formulário: {JSON.stringify(questFormData, null, 2)}
      </Text>
    </View>
  )
};
