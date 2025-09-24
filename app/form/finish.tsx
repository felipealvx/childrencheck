import { useQuestForm } from "@/hooks/useQuestForm";
import { useClasses } from "@/hooks/useClasses";
import { ScrollView, Text, View, Alert, TouchableOpacity, Modal, FlatList } from "react-native";
import { styles } from "@/styles/form/finish";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

export default function FinishScreen() {
  const { questFormData, getCompleteFormData, resetFormData } = useQuestForm();
  const { classes, addStudentToClass } = useClasses();
  const [isClassModalVisible, setIsClassModalVisible] = useState(false);

  const handleSaveToClass = (classId: string, className: string) => {
    try {
      // Usa os dados completos com valores padrão
      const completeData = getCompleteFormData();
      addStudentToClass(classId, completeData);
      setIsClassModalVisible(false);
      
      Alert.alert(
        "Sucesso! ✅",
        `${completeData.fullName} foi adicionado(a) à turma "${className}" com sucesso!`,
        [
          {
            text: "Ver Turmas",
            onPress: () => {
              resetFormData(); // Limpa o formulário
              router.push("/(tabs)/classes");
            }
          },
          {
            text: "Novo Formulário", 
            onPress: () => {
              resetFormData(); // Limpa o formulário
              router.push("/(tabs)");
            }
          }
        ]
      );
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar na turma. Tente novamente.");
    }
  };

  const handleExportExcel = () => {
    // Usa os dados completos com valores padrão
    const completeData = getCompleteFormData();
    
    // Aqui você implementaria a exportação para Excel
    Alert.alert(
      "Dados Completos do Formulário", 
      JSON.stringify(completeData, null, 2),
      [
        {
          text: "Copiar Dados",
          onPress: () => {
            console.log("Dados completos:", completeData);
            // Em um app real, você usaria o Clipboard
          }
        },
        { text: "OK" }
      ]
    );
  };

  const handleNewForm = () => {
    resetFormData(); // Limpa todos os dados
    router.push("/(tabs)");
  };

  // Função para exibir valor mais amigável
  const getDisplayValue = (value: any, defaultText: string = "Não respondido"): string => {
    if (value === 0 || value === "" || value === null || value === undefined) {
      return defaultText;
    }
    return value.toString();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.congratulations}>
        <Text style={styles.congratulationsText}> 
          PARABÉNS 👋
        </Text>
        <Text style={styles.congratulationsUser}>
          {questFormData.fullName || 'ALUNO'}
        </Text>
      </View>

      <View>
        <Text style={styles.subtitle}>
          Você concluiu o formulário!{"\n"}
          Escolha uma das opções abaixo:
        </Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={[styles.actionButton, styles.classButton]}
          onPress={() => setIsClassModalVisible(true)}
        >
          <Ionicons name="people" size={24} color={Colors.background} />
          <Text style={styles.actionButtonText}>Salvar em Turma</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.actionButton, styles.excelButton]}
          onPress={handleExportExcel}
        >
          <Ionicons name="document-text" size={24} color={Colors.background} />
          <Text style={styles.actionButtonText}>Exportar Excel</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.actionButton, styles.newFormButton]}
          onPress={handleNewForm}
        >
          <Ionicons name="add-circle" size={24} color={Colors.background} />
          <Text style={styles.actionButtonText}>Novo Formulário</Text>
        </TouchableOpacity>
      </View>

      {/* Resumo dos dados coletados */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Resumo dos Dados:</Text>
        
        <View>
          <Text>📋 Dados Pessoais</Text>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Nome:</Text>
            <Text style={styles.summaryValue}>{questFormData.fullName || "Não informado"}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Data de Nascimento:</Text>
            <Text style={styles.summaryValue}>{questFormData.age || "Não informado"}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Peso:</Text>
            <Text style={styles.summaryValue}>{questFormData.weight || "Não informado"} kg</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Altura:</Text>
            <Text style={styles.summaryValue}>{questFormData.height || "Não informado"} cm</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Responsável:</Text>
            <Text style={styles.summaryValue}>{questFormData.parent || "Não informado"}</Text>
          </View>
        </View>
        
        <View style={styles.noteContainer}>
          <Ionicons name="information-circle" size={16} color={Colors.primary} />
          <Text style={styles.noteText}>
            Perguntas não respondidas serão salvas com valor 0
          </Text>
        </View>
      </View>

      {/* Modal para selecionar turma */}
      <Modal
        visible={isClassModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsClassModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecionar Turma</Text>
            
            {classes.length === 0 ? (
              <View style={styles.noClassesContainer}>
                <Ionicons name="school-outline" size={50} color="#ccc" />
                <Text style={styles.noClassesText}>Nenhuma turma criada</Text>
                <Text style={styles.noClassesSubtext}>
                  Vá até a aba "Turmas" para criar uma nova turma primeiro
                </Text>
                <TouchableOpacity 
                  style={styles.goToClassesButton}
                  onPress={() => {
                    setIsClassModalVisible(false);
                    router.push("/(tabs)/classes");
                  }}
                >
                  <Text style={styles.goToClassesButtonText}>Ir para Turmas</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <FlatList
                data={classes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.classOption}
                    onPress={() => handleSaveToClass(item.id, item.name)}
                  >
                    <View>
                      <Text style={styles.classOptionName}>{item.name}</Text>
                      <Text style={styles.classOptionInfo}>
                        {item.students.length} aluno(s)
                      </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color={Colors.surface} />
                  </TouchableOpacity>
                )}
              />
            )}
            <View style={styles.modalCloseButtonContainer}>
              <TouchableOpacity 
                style={styles.modalCloseButton}
                onPress={() => setIsClassModalVisible(false)}
              >
                <Text style={styles.modalCloseButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}