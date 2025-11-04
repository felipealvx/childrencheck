import { Stack } from "expo-router";

export default function FormLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerBackTitle: "Voltar",
        headerTintColor: "#108ab1",
      }}
    >
      <Stack.Screen
        name="aboutScreen"
        options={{
          title: "Sobre o Aplicativo",
        }}
      />
    </Stack>
  );
}
