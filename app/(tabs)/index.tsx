import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={require("../../assets/images/logo/identity.png")}
      />
        <Link
          style={style.button}
          href={{
            pathname: "../form/step-four",
          }}> 
          <Text style={style.buttonText}>Iniciar Coleta</Text>
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
    width: 180,
    height: 400,
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
    textAlign: "center"
  },
});
