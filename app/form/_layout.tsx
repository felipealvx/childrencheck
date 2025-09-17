import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
// import { Stack } from 'expo-router';

const Stack = createNativeStackNavigator();

export default function FormNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Informações" component={StepOne} />
      <Stack.Screen name="Questionário" component={StepTwo} />
    </Stack.Navigator>
  );
}
