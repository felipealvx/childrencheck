import { Colors } from "@/constants/Colors";
import { useClasses } from "@/hooks/useClasses";
import { 
  ScrollView, 
  Text, 
  View, 
  TouchableOpacity, 
  Alert, 
  TextInput,
  Modal,
  FlatList
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/classes/classes";

export default function Classes() {
  const { classes, addNewClass, deleteClass, removeStudentFromClass } = useClasses();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newClassName, setNewClassName] = useState("");
  const [expandedClass, setExpandedClass] = useState<string | null>(null);

  const handleAddClass = () => {
    if (newClassName.trim()) {
      addNewClass(newClassName.trim());
      setNewClassName("");
      setIsModalVisible(false);
    } else {
      Alert.alert("Erro", "Por favor, digite o nome da turma");
    }
  };

  const handleDeleteClass = (classId: string, className: string) => {
    Alert.alert(
      "Confirmar exclusão",
      `Tem certeza que deseja excluir a turma "${className}"? Esta ação não pode ser desfeita.`,
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Excluir", 
          style: "destructive",
          onPress: () => deleteClass(classId)
        }
      ]
    );
  };

  const handleRemoveStudent = (classId: string, studentId: string, studentName: string) => {
    Alert.alert(
      "Confirmar remoção",
      `Tem certeza que deseja remover "${studentName}" da turma?`,
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Remover", 
          style: "destructive",
          onPress: () => removeStudentFromClass(classId, studentId)
        }
      ]
    );
  };

  const toggleClassExpansion = (classId: string) => {
    setExpandedClass(expandedClass === classId ? null : classId);
  };

  const renderStudent = (student: any, classId: string) => (
    <View key={student.id} style={styles.studentItem}>
      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{student.fullName}</Text>
        <Text style={styles.studentDetails}>
          Idade: {student.age} | Peso: {student.weight}kg | Altura: {student.height}cm
        </Text>
        <Text style={styles.studentDate}>
          Adicionado em: {new Date(student.createdAt).toLocaleDateString('pt-BR')}
        </Text>
      </View>
      <TouchableOpacity 
        style={styles.removeButton}
        onPress={() => handleRemoveStudent(classId, student.id, student.fullName)}
      >
        <Ionicons name="trash-outline" size={20} color={Colors.danger} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Turmas</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Ionicons name="add" size={24} color={Colors.background} />
          <Text style={styles.addButtonText}>Nova Turma</Text>
        </TouchableOpacity>
      </View>

      {classes.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="school-outline" size={80} color="#ccc" />
          <Text style={styles.emptyStateText}>Nenhuma turma criada ainda</Text>
          <Text style={styles.emptyStateSubtext}>
            Toque no botão "Nova Turma" para começar
          </Text>
        </View>
      ) : (
        <FlatList
          data={classes}
          keyExtractor={(item) => item.id}
          renderItem={({ item: classItem }) => (
            <View style={styles.classCard}>
              <TouchableOpacity 
                style={styles.classHeader}
                onPress={() => toggleClassExpansion(classItem.id)}
              >
                <View style={styles.classHeaderLeft}>
                  <Text style={styles.className}>{classItem.name}</Text>
                  <Text style={styles.classInfo}>
                    {classItem.students.length} aluno(s) • Criada em{" "}
                    {new Date(classItem.createdAt).toLocaleDateString('pt-BR')}
                  </Text>
                </View>
                <View style={styles.classHeaderRight}>
                  <Ionicons 
                    name={expandedClass === classItem.id ? "chevron-up" : "chevron-down"} 
                    size={20} 
                    color={Colors.primary} 
                  />
                  <TouchableOpacity 
                    style={styles.deleteClassButton}
                    onPress={() => handleDeleteClass(classItem.id, classItem.name)}
                  >
                    <Ionicons name="trash-outline" size={18} color={Colors.danger} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>

              {expandedClass === classItem.id && (
                <View style={styles.studentsSection}>
                  {classItem.students.length === 0 ? (
                    <View style={styles.noStudents}>
                      <Text style={styles.noStudentsText}>
                        Nenhum aluno nesta turma ainda
                      </Text>
                      <Text style={styles.noStudentsSubtext}>
                        Complete um formulário e adicione à esta turma
                      </Text>
                    </View>
                  ) : (
                    <View>
                      <Text style={styles.studentsTitle}>
                        Alunos ({classItem.students.length})
                      </Text>
                      {classItem.students.map((student) => 
                        renderStudent(student, classItem.id)
                      )}
                    </View>
                  )}
                </View>
              )}
            </View>
          )}
        />
      )}

      {/* Modal para adicionar nova turma */}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nova Turma</Text>
            
            <TextInput
              style={styles.modalInput}
              placeholder="Nome da turma (ex: 9º Ano A)"
              value={newClassName}
              onChangeText={setNewClassName}
              autoFocus
            />
            
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setIsModalVisible(false);
                  setNewClassName("");
                }}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleAddClass}
              >
                <Text style={styles.confirmButtonText}>Criar Turma</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
