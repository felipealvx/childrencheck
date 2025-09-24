import { createContext, ReactNode, useState } from "react";

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
  escalaDor: number;
};

type QuestFormContextDataProps = {
  questFormData: QuestProps;
  updateFormData: (value: QuestProps) => void;
  getCompleteFormData: () => QuestProps; // Nova função para dados completos
  resetFormData: () => void; // Nova função para resetar
};

type QuestFormContextProviderProps = {
  children: ReactNode;
};

const QuestFormContext = createContext<QuestFormContextDataProps>(
  {} as QuestFormContextDataProps
);

// Valores padrão para todas as perguntas
const defaultQuestData: QuestProps = {
  // Dados pessoais (obrigatórios)
  fullName: "",
  age: "",
  weight: 0,
  height: 0,
  parent: "",

  // Questionários com valores padrão 0
  pratica: 0 as any, // 0 = não respondido
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
  escalaDor: 99,
};

function QuestProvider({ children }: QuestFormContextProviderProps) {
  const [questFormData, setQuestFormData] = useState<QuestProps>({
    ...defaultQuestData,
  });

  function updateFormData(data: QuestProps) {
    setQuestFormData((prevState) => ({ ...prevState, ...data }));
  }

  // Nova função que retorna dados completos com valores padrão para campos não respondidos
  function getCompleteFormData(): QuestProps {
    const completeData = { ...defaultQuestData };

    // Sobrescreve apenas os campos que foram preenchidos
    Object.keys(questFormData).forEach((key) => {
      const value = questFormData[key as keyof QuestProps];

      // Se o valor foi preenchido (não é undefined, null ou string vazia)
      if (value !== undefined && value !== null && value !== "") {
        (completeData as any)[key] = value;
      }
    });

    return completeData;
  }

  // Nova função para resetar o formulário
  function resetFormData() {
    setQuestFormData({ ...defaultQuestData });
  }

  return (
    <QuestFormContext.Provider
      value={{
        questFormData,
        updateFormData,
        getCompleteFormData,
        resetFormData,
      }}
    >
      {children}
    </QuestFormContext.Provider>
  );
}

export { QuestProvider, QuestFormContext };
