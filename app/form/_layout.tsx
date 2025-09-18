import { Stack } from 'expo-router';

export default function FormLayout() {
  return (
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
          title: "Questionário 1/",
        }}
      />
      <Stack.Screen
        name="step-three"
        options={{
          title: "Questionário 2/",
        }}
      />
      <Stack.Screen
        name="step-four"
        options={{
          title: "Questionário 3/",
        }}
      />
    </Stack>
  );
}