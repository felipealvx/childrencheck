import { NavigationContainer } from "@react-navigation/native";
import { FormRoutes } from "./form.routes";

export function Routes(){
  return (
    <NavigationContainer>
      <FormRoutes />
    </NavigationContainer>
  )
}