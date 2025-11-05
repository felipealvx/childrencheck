import { ScrollView, StyleSheet, Text } from "react-native";

export default function aboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textTitle}>Objetivo</Text>
      <Text style={styles.text}>
Este aplicativo foi desenvolvido com o objetivo de auxiliar na educação postural em contextos escolares e extraescolares, 
promovendo a conscientização sobre a importância de manter uma postura corporal adequada desde a infância.
A ferramenta permite que as crianças usuárias recebam um feedback instantâneo sobre sua saúde postural, de forma simples 
e interativa. Além disso, facilita a coleta e o acompanhamento de informações posturais por parte de professores, profissionais da saúde e 
responsáveis, contribuindo para ações preventivas e educativas voltadas à promoção da saúde infantil.</Text>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
  }
})
