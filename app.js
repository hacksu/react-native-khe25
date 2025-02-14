import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [seed, setSeed] = useState("default");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Picsum Image Generator 🚀</Text>

      <View style={styles.counterContainer}>
        <Text style={styles.counter}>Button pressed: {count} times</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter a seed:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type a seed..."
          value={seed}
          onChangeText={setSeed}
        />
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: `https://picsum.photos/seed/${seed}/200/300` }}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
    textAlign: "center",
  },

  counterContainer: { alignItems: "center", marginBottom: 20 },
  counter: { fontSize: 18, color: "#FFF", marginBottom: 10 },
  button: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: { fontSize: 16, color: "#FFF", fontWeight: "bold" },

  inputContainer: { width: "100%", alignItems: "center", marginBottom: 20 },
  label: { fontSize: 16, color: "#AAA", marginBottom: 5 },
  input: {
    width: "80%",
    backgroundColor: "#333",
    color: "#FFF",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#292929",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  image: { width: 200, height: 300, borderRadius: 10 },
});
