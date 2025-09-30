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
            title: "Questionário BackPEI 1/6",
          }}
        />
        <Stack.Screen
          name="step-three"
          options={{
            title: "Questionário BackPEI 2/6",
          }}
        />
        <Stack.Screen
          name="step-four"
          options={{
            title: "Questionário BackPEI 3/6",
          }}
        />
        <Stack.Screen
          name="step-five"
          options={{
            title: "Questionário BackPEI 4/6",
          }}
        />
        <Stack.Screen
          name="step-six"
          options={{
            title: "Questionário BackPEI 5/6",
          }}
        />
        <Stack.Screen
          name="step-seven"
          options={{
            title: "Questionário BackPEI 6/6",
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