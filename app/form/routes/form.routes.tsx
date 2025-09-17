import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StepOne } from "../StepOne";
import { StepTwo } from "../StepTwo";

const { Navigator, Screen } = createNativeStackNavigator();

export function FormRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="stepOne" component={StepOne} />
      <Screen name="stepTwo" component={StepTwo} />
    </Navigator>
  );
}
