import { QuestProvider } from '@/contexts/QuestFormContext';
import { Stack } from 'expo-router';

export default function FormLayout() {
  return (
    <QuestProvider>
      <Stack
        screenOptions={{
          headerShown: true,
          headerBackTitle: "Voltar",
          headerTintColor: "#108ab1"
        }}
      >
        <Stack.Screen
          name="step-one"
          options={{
            title: "Informações Pessoais",
          }}
        />
        <Stack.Screen
          name="step-two"
          options={{
            title: "Hábitos Posturais em Sala",
          }}
        />
        <Stack.Screen
          name="step-three"
          options={{
            title: "Saúde Mental",
          }}
        />
        <Stack.Screen
          name="step-four"
          options={{
            title: "Dor e Desconforto",
          }}
        />
        <Stack.Screen
          name="step-five"
          options={{
            title: "Atividade Física",
          }}
        />
        <Stack.Screen
          name="step-six"
          options={{
            title: "Qualidade do Sono",
          }}
        />
        <Stack.Screen
          name="finish"
          options={{
            title: "Finalizar questionário",
          }}
        />
        <Stack.Screen
          name="feedback"
          options={{
            title: "Saúde Postural",
          }}
        />
      </Stack>
    </QuestProvider>
  );
}