import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function ProfileScreen({ navigation }) {
  const [profileData, setProfileData] = useState({
    name: "Hornet",
    title: "Princess-Protector",
    origin: "Hallownest",
    region: "Kingdom's Edge / Deepnest",
    appearance:
      "Manto vermelho/rosa, figura esguia, agulha longa presa a fio de seda, capuz pontudo com máscara branca",
    role: "Guardiã e testadora — protege segredos de Hallownest",
    weapon: "Agulha (needle) + Seda (silk)",
    abilities:
      "Ataques rápidos, combos aéreos, movimentos acrobáticos, estocadas precisas",
    personality:
      "Determinada, reservada, orgulhosa, inteligente, compaixão ocasional",
    trivia: "Sua origem e identidade são centrais para o lore de Hollow Knight",
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{profileData.name}</Text>
        <Image source={require("../assets/hornet.png")} style={styles.image} />
        <Text style={styles.title}>{profileData.title}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Origem / Região:</Text>
        <Text style={styles.value}>
          {profileData.origin} — {profileData.region}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Aparência:</Text>
        <Text style={styles.value}>{profileData.appearance}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Papel na narrativa:</Text>
        <Text style={styles.value}>{profileData.role}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Arma:</Text>
        <Text style={styles.value}>{profileData.weapon}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Habilidades:</Text>
        <Text style={styles.value}>{profileData.abilities}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Personalidade:</Text>
        <Text style={styles.value}>{profileData.personality}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Curiosidade:</Text>
        <Text style={styles.value}>{profileData.trivia}</Text>
      </View>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() =>
          navigation.navigate("EditProfile", { profileData, setProfileData })
        }
      >
        <Text style={styles.editButtonText}>Editar Perfil</Text>
      </TouchableOpacity>

      {/* Botão usando Button component com cor da Hornet */}
      <View style={styles.buttonContainer}>
        <Button
          title="SHAW"
          onPress={() => alert("Guaraná - Hornet")}
          color="#c4394f"
        />
      </View>

      <TouchableOpacity
        style={styles.hornetButton}
        onPress={() => alert("Hegale - Hornet")}
      >
        <Text style={styles.hornetButtonText}>HEGALE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#c4394f",
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#c4394f",
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 75,
  },
  title: {
    fontSize: 18,
    color: "#888",
    fontStyle: "italic",
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#2a2a2a",
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#c4394f",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#c4394f",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  value: {
    fontSize: 16,
    color: "#ddd",
    lineHeight: 22,
  },
  editButton: {
    backgroundColor: "#c4394f",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: "hidden",
  },
  hornetButton: {
    backgroundColor: "#ffffffff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 2,
    borderColor: "#c0aeb0ff",
  },
  hornetButtonText: {
    color: "#c4394f",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
});
