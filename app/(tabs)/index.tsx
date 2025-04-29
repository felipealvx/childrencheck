import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View
      style={style.container}
    >
      <Image
        style={style.image}
        source={require("../../assets/images/logo/identity.png")}
      />
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>
          Iniciar Coleta
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
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
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.surface
  }
})
