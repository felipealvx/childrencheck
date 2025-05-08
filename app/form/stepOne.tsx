import Input from "@/components/form/input";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
        {/* <Link
          href={"/male"}
        >
        </Link> */}
        <Text style={styles.textLabel}>Sexo: </Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: Colors.surface, fontWeight: 'bold'}}>Masculino</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: Colors.surface, fontWeight: 'bold'}}>Feminino</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={{textAlign: 'center', marginBottom: 5}}>
          Avançar para o próximo passo.
        </Text>
        <TouchableOpacity style={styles.next}>
          <Text style={{color: Colors.surface, fontWeight: 'bold'}}>Próximo</Text>
        </TouchableOpacity>
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
  },
  textLabel: {
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    flex: 1,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    backgroundColor: Colors.primary,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
})