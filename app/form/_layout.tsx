import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StepOne from './stepOne';
import StepTwo from './stepOne'; 
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
      <Stack.Screen name="StepTwo" component={StepTwo}/>
    </Stack.Navigator>
    // <Stack>
    //   <Stack.Screen name="StepOne" />
    //   <Stack.Screen name="StepTwo" />
    // </Stack>
  )
}