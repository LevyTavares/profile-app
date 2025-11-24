import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function EditProfileScreen({ route, navigation }) {
  const { profileData, setProfileData } = route.params;

  const [formData, setFormData] = useState({ ...profileData });

  const handleSave = () => {
    setProfileData(formData);
    navigation.goBack();
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Editar Perfil</Text>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={formData.name}
          onChangeText={(text) => updateField("name", text)}
          placeholder="Nome do personagem"
          placeholderTextColor="#666"
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Título:</Text>
        <TextInput
          style={styles.input}
          value={formData.title}
          onChangeText={(text) => updateField("title", text)}
          placeholder="Título ou alcunha"
          placeholderTextColor="#666"
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Origem:</Text>
        <TextInput
          style={styles.input}
          value={formData.origin}
          onChangeText={(text) => updateField("origin", text)}
          placeholder="Cidade ou reino"
          placeholderTextColor="#666"
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Região:</Text>
        <TextInput
          style={styles.input}
          value={formData.region}
          onChangeText={(text) => updateField("region", text)}
          placeholder="Áreas principais"
          placeholderTextColor="#666"
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Aparência:</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          value={formData.appearance}
          onChangeText={(text) => updateField("appearance", text)}
          placeholder="Descrição visual"
          placeholderTextColor="#666"
          multiline
          numberOfLines={3}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Papel na narrativa:</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          value={formData.role}
          onChangeText={(text) => updateField("role", text)}
          placeholder="Função na história"
          placeholderTextColor="#666"
          multiline
          numberOfLines={2}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Arma:</Text>
        <TextInput
          style={styles.input}
          value={formData.weapon}
          onChangeText={(text) => updateField("weapon", text)}
          placeholder="Arma principal"
          placeholderTextColor="#666"
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Habilidades:</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          value={formData.abilities}
          onChangeText={(text) => updateField("abilities", text)}
          placeholder="Lista de habilidades"
          placeholderTextColor="#666"
          multiline
          numberOfLines={2}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Personalidade:</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          value={formData.personality}
          onChangeText={(text) => updateField("personality", text)}
          placeholder="Traços de personalidade"
          placeholderTextColor="#666"
          multiline
          numberOfLines={2}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Curiosidade:</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          value={formData.trivia}
          onChangeText={(text) => updateField("trivia", text)}
          placeholder="Fatos interessantes"
          placeholderTextColor="#666"
          multiline
          numberOfLines={2}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar Alterações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelButtonText}>Cancelar</Text>
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#c4394f",
    marginBottom: 20,
    textAlign: "center",
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#c4394f",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  input: {
    backgroundColor: "#2a2a2a",
    color: "#ddd",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#444",
  },
  multiline: {
    minHeight: 80,
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: "#c4394f",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  cancelButtonText: {
    color: "#ddd",
    fontSize: 16,
  },
});
