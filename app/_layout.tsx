import { Stack } from "expo-router";
import { ClassesProvider } from "@/contexts/ClassesContext";

export default function RootLayout() {
  return (
    <ClassesProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="form" options={{ headerShown: false }} />
        <Stack.Screen name="about" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ClassesProvider>
  );
}
