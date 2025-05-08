import Input from "@/components/form/input";
import { StyleSheet, Text, View } from "react-native";

export default function StepOne() {
  return (
    <View style={styles.container}>
      <Input 
        text="Nome:"
        placeText="Nome Completo..."
        value=""
        onChangeText={() => {}}
      />
      
      <View style={styles.bodyInfos}>
        <Input 
          text="Peso: (kg)"
          placeText="Peso em kg..."
          value=""
          onChangeText={() => {}}
          containerStyle={styles.input}
        />
        <Input
          text="Estatura: (cm)"
          placeText="Estatura em cm..."
          value=""
          onChangeText={() => {}} 
          containerStyle={styles.input}
          />
      </View>
      <Input 
        text="Idade:"
        placeText="Idade..."
        value=""
        onChangeText={() => {}}
      />
      <Input 
        text="Responsável:"
        placeText="Nome completo do responsável..."
        value=""
        onChangeText={() => {}}
      />

      <View>
        
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
    gap: 10,
  },
  bodyInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    // backgroundColor: 'blue'
  },
  input: {
    flex: 1,
    width: '100%',
  }
})