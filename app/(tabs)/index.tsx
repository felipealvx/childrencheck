import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Image, StatusBar } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={"#23202ca4"} barStyle={"default"} />
      <Image
        style={style.image}
        source={require("../../assets/images/logo/identity.png")}
      />

      <Link
        style={style.button}
        href={{
          pathname: "../form/step-one",
        }}
      >
        <Text style={style.buttonText}>Iniciar Coleta</Text>
      </Link>

      <Text style={style.text}>
        <Text style={style.textDanger}>Atenção:</Text> antes de iniciar o questionário vá em turmas e crie uma turma. 😉
      </Text>

      <Link
        style={style.buttonAbout}
        href={{
          pathname: "../about",
        }}
      >
        <Text style={style.buttonAboutText}>Sobre</Text>
      </Link>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    resizeMode: "contain",
    width: 300,
    height: 500,
  },
  button: {
    width: "100%",
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.surface,
    textAlign: "center",
  },
  buttonAbout: {
    width: "100%",
    marginVertical: 16,
    padding: 10,
  },
  buttonAboutText: {
    textAlign: "center",
    fontSize: 18,
    color: Colors.deepBlue,
    textDecorationLine: "underline",
  },
  text: {
    fontSize: 12,
    marginTop: 10,
    textAlign: "center"
  },
  textDanger: {
    color: Colors.danger,
    fontWeight: "bold"
  }
});
