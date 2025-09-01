import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StepOne from './stepOne/stepOne';
import { Colors } from '@/constants/Colors';
// import { Stack } from 'expo-router';

const Stack = createNativeStackNavigator();

export default function FormNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: Colors.primary,
        // },
        // headerTitleStyle: {
        //   color: Colors.surface
        // }
      }}>
      <Stack.Screen name="Informações" component={StepOne}/>
    </Stack.Navigator>
  )
}