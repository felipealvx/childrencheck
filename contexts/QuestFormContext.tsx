import { createContext, ReactNode, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export type QuestProps = {
  // modulo 1
  fullName: string;
  age: string;
  weight: number;
  height: number;
  parent: string;
  sexo: 1 | 2 | 3;

  // modulo 2
  posicaoComumCadeira: 1 | 2 | 3 | 4 | 5;
  freqEncosto: 1 | 2 | 3 | 4 | 5;
  apoioEscrevendoComputador: 1 | 2 | 3;
  ajusteCadeiraMesa: 1 | 2 | 3 | 4 | 5;

  // modulo 3
  freqAnsiedade: 1 | 2 | 3 | 4 | 5;
  reageProva: 1 | 2 | 3 | 4;
  membrosTensao: 1 | 2 | 3 | 4 | 5;
  estresseGeral: 1 | 2 | 3 | 4;

  // modulo 4
  dorGeral: 1 | 2;
  escalaDor: 1 | 2 | 3 | 4 | 5;
  dorDuracao: 1 | 2 | 3;
  dorPioraEstresse: 1 | 2 | 3 | 4;

  //modulo 5
  diasPraticaAtv: 1 | 2 | 3 | 4;
  tempoAtvFimSemana: 1 | 2 | 3 | 4;
  horasSentado: 1 | 2 | 3 | 4;

  //modulo 6
  classificaSono: 1 | 2 | 3 | 4 | 5;
  freqAcorda: 1 | 2 | 3 | 4 | 5;
  freqAnsiedadeSono: 1 | 2 | 3 | 4 | 5;
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
  sexo: 0 as any,

  // Questionários com valores padrão 0
  posicaoComumCadeira: 0 as any,
  freqEncosto: 0 as any,
  apoioEscrevendoComputador: 0 as any,
  ajusteCadeiraMesa: 0 as any,
  freqAnsiedade: 0 as any,
  reageProva: 0 as any,
  membrosTensao: 0 as any,
  estresseGeral: 0 as any,
  dorGeral: 0 as any,
  dorDuracao: 0 as any,
  dorPioraEstresse: 0 as any,
  diasPraticaAtv: 0 as any,
  tempoAtvFimSemana: 0 as any,
  horasSentado: 0 as any,
  classificaSono: 0 as any,
  freqAcorda: 0 as any,
  freqAnsiedadeSono: 0 as any,
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