import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

// Chaves para diferentes tipos de dados
export const STORAGE_KEYS = {
  CLASSES: '@app_classes_data',
  CURRENT_FORM: '@app_current_form',
  APP_SETTINGS: '@app_settings',
} as const;

// Utilitários para armazenamento de dados
export class StorageManager {
  
  // Função genérica para salvar dados
  static async saveData<T>(key: string, data: T): Promise<boolean> {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);
      return true;
    } catch (error) {
      console.error(`Erro ao salvar dados (${key}):`, error);
      return false;
    }
  }

  // Função genérica para carregar dados
  static async loadData<T>(key: string, defaultValue?: T): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      
      if (jsonValue != null) {
        return JSON.parse(jsonValue) as T;
      }
      
      return defaultValue || null;
    } catch (error) {
      console.error(`Erro ao carregar dados (${key}):`, error);
      return defaultValue || null;
    }
  }

  // Função para remover dados
  static async removeData(key: string): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Erro ao remover dados (${key}):`, error);
      return false;
    }
  }

  // Função para limpar todos os dados do app (útil para debug)
  static async clearAllData(): Promise<boolean> {
    try {
      const keys = Object.values(STORAGE_KEYS);
      await AsyncStorage.multiRemove(keys);
      return true;
    } catch (error) {
      console.error('Erro ao limpar todos os dados:', error);
      return false;
    }
  }

  // Função para verificar o tamanho dos dados armazenados
  static async getStorageInfo(): Promise<{ totalKeys: number; keys: string[] }> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const appKeys = keys.filter(key => key.startsWith('@app_'));
      
      return {
        totalKeys: appKeys.length,
        keys: appKeys,
      };
    } catch (error) {
      console.error('Erro ao obter info do storage:', error);
      return { totalKeys: 0, keys: [] };
    }
  }

  // Função para fazer backup dos dados
  static async exportAllData(): Promise<string | null> {
    try {
      const keys = Object.values(STORAGE_KEYS);
      const data: { [key: string]: any } = {};
      
      for (const key of keys) {
        const value = await AsyncStorage.getItem(key);
        if (value) {
          data[key] = JSON.parse(value);
        }
      }
      
      return JSON.stringify({
        exportDate: new Date().toISOString(),
        appVersion: '1.0.0', // Você pode obter isso de package.json
        data,
      }, null, 2);
    } catch (error) {
      console.error('Erro ao exportar dados:', error);
      return null;
    }
  }

  // Função para importar dados de backup
  static async importData(backupData: string): Promise<boolean> {
    try {
      const parsed = JSON.parse(backupData);
      
      if (!parsed.data) {
        throw new Error('Formato de backup inválido');
      }
      
      // Importa cada chave
      for (const [key, value] of Object.entries(parsed.data)) {
        if (Object.values(STORAGE_KEYS).includes(key as any)) {
          await AsyncStorage.setItem(key, JSON.stringify(value));
        }
      }
      
      return true;
    } catch (error) {
      console.error('Erro ao importar dados:', error);
      return false;
    }
  }
}

// Hook personalizado para usar storage de forma reativa

export function useAsyncStorage<T>(
  key: string, 
  defaultValue: T
): [T, (value: T) => Promise<void>, boolean] {
  const [data, setData] = useState<T>(defaultValue);
  const [isLoading, setIsLoading] = useState(true);

  // Carregar dados iniciais
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const stored = await StorageManager.loadData<T>(key, defaultValue);
      if (stored !== null) {
        setData(stored);
      }
      setIsLoading(false);
    };

    loadData();
  }, [key]);

  // Função para atualizar dados
  const updateData = async (newValue: T) => {
    setData(newValue);
    await StorageManager.saveData(key, newValue);
  };

  return [data, updateData, isLoading];
}

// Hook para configurações do app
export function useAppSettings() {
  const [settings, updateSettings, isLoading] = useAsyncStorage(
    STORAGE_KEYS.APP_SETTINGS,
    {
      theme: 'light' as 'light' | 'dark',
      autoSaveForm: true,
      exportFormat: 'csv' as 'csv' | 'excel',
      language: 'pt-BR',
    }
  );

  return { settings, updateSettings, isLoading };
}