import { createContext, ReactNode, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export type QuestProps = {
  fullName: string;
  age: string;
  weight: number;
  height: number;
  parent: string;
  pratica: 1 | 2;
  qual?: string;
  diasPratica: 1 | 2 | 3 | 4;
  competitivo: 1 | 2;
  horasTv: 1 | 2 | 3 | 4 | 5 | 6;
  horasPc: 1 | 2 | 3 | 4 | 5;
  ler: 1 | 2 | 3;
  posicaoDormir: 1 | 2 | 3 | 4;
  horasDorme: 1 | 2 | 3 | 4 | 5;
  sexo: 1 | 2;
  sentarEscreverMesa: 1 | 2 | 3 | 4 | 5 | 6;
  sentarCadeiraConversar: 1 | 2 | 3 | 4 | 5 | 6;
  sentarComputador: 1 | 2 | 3 | 4 | 5 | 6;
  pegarObjeto: 1 | 2 | 3 | 4 | 5;
  bolsas: 1 | 2 | 3 | 4 | 5 | 6;
  levarMochila: 1 | 2 | 3 | 4 | 5 | 6;
  responsavelFemEstudo: 1 | 2 | 3 | 4 | 5 | 6;
  responsavelMascEstudo: 1 | 2 | 3 | 4 | 5 | 6;
  responsavelDores: 1 | 2 | 3;
  qualResponsavelDores?: string;
  sentiuDor: 1 | 2 | 3;
  dorFrequente: 1 | 2 | 3 | 4 | 5 | 6;
  dorImpede: 1 | 2 | 3;
  escalaDor: 1 | 2 | 3 | 4 | 5;
};

type QuestFormContextDataProps = {
  questFormData: QuestProps;
  updateFormData: (value: QuestProps) => void;
  getCompleteFormData: () => QuestProps;
  resetFormData: () => void;
  isLoading: boolean;
};

type QuestFormContextProviderProps = {
  children: ReactNode;
};

const QuestFormContext = createContext<QuestFormContextDataProps>(
  {} as QuestFormContextDataProps
);

const FORM_STORAGE_KEY = '@app_current_form';

// Valores padrão para todas as perguntas
const defaultQuestData: QuestProps = {
  // Dados pessoais (obrigatórios)
  fullName: "",
  age: "",
  weight: 0,
  height: 0,
  parent: "",

  // Questionários com valores padrão 0
  pratica: 0 as any,
  qual: "",
  diasPratica: 0 as any,
  competitivo: 0 as any,
  horasTv: 0 as any,
  horasPc: 0 as any,
  ler: 0 as any,
  posicaoDormir: 0 as any,
  horasDorme: 0 as any,
  sexo: 0 as any,
  sentarEscreverMesa: 0 as any,
  sentarCadeiraConversar: 0 as any,
  sentarComputador: 0 as any,
  pegarObjeto: 0 as any,
  bolsas: 0 as any,
  levarMochila: 0 as any,
  responsavelFemEstudo: 0 as any,
  responsavelMascEstudo: 0 as any,
  responsavelDores: 0 as any,
  qualResponsavelDores: "",
  sentiuDor: 0 as any,
  dorFrequente: 0 as any,
  dorImpede: 0 as any,
  escalaDor: 0 as any,
};

function QuestProvider({ children }: QuestFormContextProviderProps) {
  const [questFormData, setQuestFormData] = useState<QuestProps>({
    ...defaultQuestData,
  });
  const [isLoading, setIsLoading] = useState(true);

  // Função para salvar formulário atual no AsyncStorage
  const saveFormToStorage = async (formData: QuestProps) => {
    try {
      // Só salva se houver dados significativos preenchidos
      if (formData.fullName || formData.age || formData.weight || formData.height) {
        const jsonValue = JSON.stringify(formData);
        await AsyncStorage.setItem(FORM_STORAGE_KEY, jsonValue);
      }
    } catch (error) {
      console.error('Erro ao salvar formulário:', error);
    }
  };

  // Função para carregar formulário do AsyncStorage
  const loadFormFromStorage = async () => {
    try {
      setIsLoading(true);
      const jsonValue = await AsyncStorage.getItem(FORM_STORAGE_KEY);
      
      if (jsonValue != null) {
        const loadedForm: QuestProps = JSON.parse(jsonValue);
        setQuestFormData(loadedForm);
      }
    } catch (error) {
      console.error('Erro ao carregar formulário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Carregar dados quando o componente monta
  useEffect(() => {
    loadFormFromStorage();
  }, []);

  // Salvar dados sempre que o formulário mudar (debounce seria ideal aqui)
  useEffect(() => {
    if (!isLoading) {
      const timeoutId = setTimeout(() => {
        saveFormToStorage(questFormData);
      }, 1000); // Salva após 1 segundo de inatividade

      return () => clearTimeout(timeoutId);
    }
  }, [questFormData, isLoading]);

  function updateFormData(data: QuestProps) {
    setQuestFormData((prevState) => ({ ...prevState, ...data }));
  }

  function getCompleteFormData(): QuestProps {
    const completeData = { ...defaultQuestData };

    Object.keys(questFormData).forEach((key) => {
      const value = questFormData[key as keyof QuestProps];

      if (value !== undefined && value !== null && value !== "") {
        (completeData as any)[key] = value;
      }
    });

    return completeData;
  }

  async function resetFormData() {
    setQuestFormData({ ...defaultQuestData });
    
    // Remove o formulário salvo do storage quando resetar
    try {
      await AsyncStorage.removeItem(FORM_STORAGE_KEY);
    } catch (error) {
      console.error('Erro ao limpar formulário do storage:', error);
    }
  }

  return (
    <QuestFormContext.Provider
      value={{
        questFormData,
        updateFormData,
        getCompleteFormData,
        resetFormData,
        isLoading,
      }}
    >
      {children}
    </QuestFormContext.Provider>
  );
}

export { QuestProvider, QuestFormContext };