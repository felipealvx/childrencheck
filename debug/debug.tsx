import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Share,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { StorageManager, STORAGE_KEYS } from '@/utils/storage';
import { useClasses } from '@/hooks/useClasses';

// Esta tela deve ser acessível apenas em desenvolvimento
// Você pode adicionar uma tela oculta ou um gesto especial para acessá-la
export default function DebugStorageScreen() {
  const [storageInfo, setStorageInfo] = useState<{
    totalKeys: number;
    keys: string[];
  }>({ totalKeys: 0, keys: [] });
  const [isLoading, setIsLoading] = useState(false);
  const { classes } = useClasses();

  useEffect(() => {
    loadStorageInfo();
  }, []);

  const loadStorageInfo = async () => {
    const info = await StorageManager.getStorageInfo();
    setStorageInfo(info);
  };

  const handleClearAllData = () => {
    Alert.alert(
      '⚠️ ATENÇÃO',
      'Isso irá apagar TODOS os dados do aplicativo permanentemente. Esta ação não pode ser desfeita!',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'APAGAR TUDO',
          style: 'destructive',
          onPress: async () => {
            setIsLoading(true);
            const success = await StorageManager.clearAllData();
            setIsLoading(false);
            
            if (success) {
              Alert.alert('✅ Sucesso', 'Todos os dados foram apagados. Reinicie o app.');
            } else {
              Alert.alert('❌ Erro', 'Não foi possível apagar os dados.');
            }
            
            await loadStorageInfo();
          },
        },
      ]
    );
  };

  const handleExportData = async () => {
    setIsLoading(true);
    const exportedData = await StorageManager.exportAllData();
    setIsLoading(false);

    if (exportedData) {
      try {
        await Share.share({
          message: 'Backup dos dados do app',
          title: 'Backup dos dados',
          // No React Native, você pode usar o react-native-fs para salvar arquivos
        });
      } catch (error) {
        Alert.alert('Dados exportados', 'Dados copiados. Cole em um arquivo de texto para salvar.');
      }
    } else {
      Alert.alert('❌ Erro', 'Não foi possível exportar os dados.');
    }
  };

  const handleClearFormData = async () => {
    Alert.alert(
      'Limpar formulário',
      'Deseja limpar os dados do formulário atual?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpar',
          onPress: async () => {
            const success = await StorageManager.removeData(STORAGE_KEYS.CURRENT_FORM);
            if (success) {
              Alert.alert('✅', 'Dados do formulário limpos.');
            }
            await loadStorageInfo();
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🔧 Debug & Dados</Text>
        <Text style={styles.subtitle}>Gerenciamento de dados do app</Text>
      </View>

      {/* Informações gerais */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📊 Estatísticas</Text>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Total de turmas:</Text>
          <Text style={styles.statValue}>{classes.length}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Total de alunos:</Text>
          <Text style={styles.statValue}>
            {classes.reduce((acc, cls) => acc + cls.students.length, 0)}
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Chaves no storage:</Text>
          <Text style={styles.statValue}>{storageInfo.totalKeys}</Text>
        </View>
      </View>

      {/* Chaves do storage */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔑 Chaves do Storage</Text>
        {storageInfo.keys.map((key) => (
          <Text key={key} style={styles.storageKey}>
            {key}
          </Text>
        ))}
      </View>

      {/* Ações */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚡ Ações</Text>
        
        <TouchableOpacity
          style={[styles.actionButton, styles.infoButton]}
          onPress={loadStorageInfo}
          disabled={isLoading}
        >
          <Ionicons name="refresh" size={20} color="#fff" />
          <Text style={styles.actionButtonText}>Atualizar Info</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.warningButton]}
          onPress={handleClearFormData}
          disabled={isLoading}
        >
          <Ionicons name="document-text" size={20} color="#fff" />
          <Text style={styles.actionButtonText}>Limpar Formulário Atual</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.successButton]}
          onPress={handleExportData}
          disabled={isLoading}
        >
          <Ionicons name="download" size={20} color="#fff" />
          <Text style={styles.actionButtonText}>Exportar Backup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.dangerButton]}
          onPress={handleClearAllData}
          disabled={isLoading}
        >
          <Ionicons name="trash" size={20} color="#fff" />
          <Text style={styles.actionButtonText}>APAGAR TODOS OS DADOS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ⚠️ Use com cuidado! Essas ações são irreversíveis.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
    marginTop: 4,
  },
  section: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: Colors.text,
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  storageKey: {
    fontSize: 12,
    fontFamily: 'monospace',
    backgroundColor: '#f8f8f8',
    padding: 8,
    borderRadius: 4,
    marginBottom: 4,
    color: '#333',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    gap: 8,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  infoButton: {
    backgroundColor: '#3498db',
  },
  warningButton: {
    backgroundColor: '#f39c12',
  },
  successButton: {
    backgroundColor: '#27ae60',
  },
  dangerButton: {
    backgroundColor: '#e74c3c',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});